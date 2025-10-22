import { triggerConfetti, startRouletteAnimation } from './animations.js';
import { exportWinners } from './export.js';

// DOM Elements
const configSection = document.getElementById('config-section');
const winnerSection = document.getElementById('winner-section');
const giveawayForm = document.getElementById('giveaway-form');
const giveawayNameInput = document.getElementById('giveaway-name');
const participantsInput = document.getElementById('participants');
const winnerCountInput = document.getElementById('winner-count');
const winnerDisplay = document.getElementById('winner-display');
const restartButton = document.getElementById('btn-restart');
const exportButton = document.getElementById('btn-export');
const animationOverlay = document.getElementById('animation-overlay');
const allowDuplicatesCheckbox = document.getElementById('allow-duplicates');
const excludedParticipantsInput = document.getElementById('excluded-participants');

/**
 * Handles the main logic for the giveaway.
 */
class Giveaway {
    constructor() {
        this.participants = [];
        this.winners = [];
        this.winnerCount = 1;
        this.giveawayName = '';
    }

    /**
     * Initializes the giveaway by adding event listeners.
     */
    init() {
        giveawayForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.run();
        });

        restartButton.addEventListener('click', () => {
            this.reset();
        });

        exportButton.addEventListener('click', () => {
            exportWinners(this.winners, this.giveawayName);
        });
    }

    /**
     * Runs the giveaway process.
     */
    run() {
        this.gatherParticipants();
        this.winnerCount = parseInt(winnerCountInput.value, 10);
        this.giveawayName = giveawayNameInput.value.trim();

        if (!this.validate()) {
            return;
        }

        // Iniciar la animación de ruleta
        animationOverlay.style.display = 'block';
        startRouletteAnimation(this.participants, () => {
            animationOverlay.style.display = 'none';
            this.winners = this.selectWinners();
            this.displayWinners(this.winners);
            this.showWinnerSection();
            triggerConfetti();
        });
    }

    /**
     * Gathers and cleans the list of participants from the textarea,
     * applying rules for duplicates and exclusions.
     */
    gatherParticipants() {
        let rawParticipants = participantsInput.value
            .split('\n')
            .map(p => p.trim())
            .filter(p => p.length > 0);

        const allowDuplicates = allowDuplicatesCheckbox.checked;
        const excludedParticipants = excludedParticipantsInput.value
            .split('\n')
            .map(p => p.trim())
            .filter(p => p.length > 0);

        if (!allowDuplicates) {
            rawParticipants = [...new Set(rawParticipants)];
        }

        this.participants = rawParticipants.filter(p => !excludedParticipants.includes(p));
    }

    /**
     * Validates the input before running the giveaway.
     * @returns {boolean} - True if validation passes, false otherwise.
     */
    validate() {
        if (this.giveawayName === '') {
            alert('Por favor, asigna un nombre al sorteo.');
            giveawayNameInput.focus();
            return false;
        }
        if (this.participants.length === 0) {
            alert('Por favor, ingresa al menos un participante.');
            participantsInput.focus();
            return false;
        }
        if (this.winnerCount > this.participants.length) {
            alert('El número de ganadores no puede ser mayor que el número de participantes.');
            winnerCountInput.focus();
            return false;
        }
        return true;
    }

    /**
     * Selects random winners from the participants list.
     * @returns {string[]} - An array of winners.
     */
    selectWinners() {
        const shuffled = [...this.participants].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, this.winnerCount);
    }

    /**
     * Displays the winners on the page.
     * @param {string[]} winners - The array of winners to display.
     */
    displayWinners(winners) {
        winnerDisplay.innerHTML = '';
        winners.forEach(winner => {
            const winnerElement = document.createElement('div');
            winnerElement.className = 'winner-item';
            winnerElement.textContent = winner;
            winnerElement.style.opacity = '0';
            winnerDisplay.appendChild(winnerElement);

            setTimeout(() => {
                winnerElement.style.transition = 'opacity 0.5s ease-in';
                winnerElement.style.opacity = '1';
            }, 100);
        });
    }

    /**
     * Hides the config section and shows the winner section.
     */
    showWinnerSection() {
        configSection.style.display = 'none';
        winnerSection.style.display = 'block';
    }

    /**
     * Resets the UI to start a new giveaway.
     */
    reset() {
        winnerSection.style.display = 'none';
        configSection.style.display = 'block';
        giveawayForm.reset();
        winnerDisplay.innerHTML = '';
        this.winners = [];
    }
}

// Initialize the app
const app = new Giveaway();
app.init();