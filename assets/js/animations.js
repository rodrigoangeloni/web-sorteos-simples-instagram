/**
 * Triggers a confetti animation.
 */
export function triggerConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

export function startRouletteAnimation(participants, onAnimationEnd) {
    const rouletteContainer = document.getElementById('roulette-container');
    rouletteContainer.innerHTML = ''; // Clear previous content
    rouletteContainer.style.display = 'block';

    let animationInterval;
    let spinCount = 0;
    const maxSpins = 30; // Number of times the roulette will "spin"
    const spinDuration = 50; // Milliseconds per spin

    const displayRandomParticipant = () => {
        const randomIndex = Math.floor(Math.random() * participants.length);
        rouletteContainer.textContent = participants[randomIndex];
    };

    animationInterval = setInterval(() => {
        displayRandomParticipant();
        spinCount++;
        if (spinCount > maxSpins) {
            clearInterval(animationInterval);
            rouletteContainer.style.display = 'none';
            onAnimationEnd();
        }
    }, spinDuration);
}