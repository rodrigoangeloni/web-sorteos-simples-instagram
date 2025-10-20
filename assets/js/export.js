/**
 * Exports the list of winners to a text file.
 * @param {string[]} winners - An array of winner names.
 * @param {string} giveawayName - The name of the giveaway.
 */
export function exportWinners(winners, giveawayName) {
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `ganadores-${giveawayName.replace(/\s+/g, '-')}-${timestamp}.txt`;
    
    let content = `Ganadores del Sorteo: ${giveawayName}\n`;
    content += `Fecha: ${new Date().toLocaleString()}\n\n`;
    content += winners.join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}