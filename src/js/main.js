document.addEventListener('DOMContentLoaded', () => {
 // Elementos del DOM
  const iniciarBtn = document.getElementById('btn-iniciar');
  const participantesInput = document.getElementById('participantes-input');
  const overlay = document.getElementById('overlay');
  const suspenseContainer = document.getElementById('suspense-container');
  const countdownContainer = document.getElementById('countdown-container');
  const countdownNumber = document.getElementById('countdown-number');
  const ganadorContainer = document.getElementById('ganador-container');
 const ganadorText = document.getElementById('ganador-text');

  // Crear confeti
  function crearConfeti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#ff6b6b'];
    const container = document.body;
    
    // Limpiar confeti anterior
    document.querySelectorAll('.confetti').forEach(c => c.remove());
    
    for (let i = 0; i < 200; i++) {
      const confeti = document.createElement('div');
      confeti.className = 'confetti';
      confeti.style.left = Math.random() * 100 + 'vw';
      confeti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confeti.style.animationDelay = Math.random() * 2 + 's';
      confeti.style.animationDuration = (Math.random() * 3 + 3) + 's';
      container.appendChild(confeti);
      
      // Eliminar confeti después de la animación
      setTimeout(() => {
        confeti.remove();
      }, 6000);
    }
  }

  // Función para la cuenta regresiva
  function iniciarCuentaRegresiva() {
    return new Promise((resolve) => {
      suspenseContainer.style.display = 'none';
      countdownContainer.style.display = 'block';
      
      let count = 3;
      
      function actualizarCuenta() {
        if (count > 0) {
          countdownNumber.textContent = count;
          countdownNumber.style.display = 'block';
          
          // Reiniciar la animación
          countdownNumber.style.animation = 'none';
          setTimeout(() => {
            countdownNumber.style.animation = 'countdown-scale 0.5s ease-out';
          }, 10);
          
          count--;
          setTimeout(actualizarCuenta, 1000);
        } else {
          countdownNumber.style.display = 'none';
          resolve();
        }
      }
      
      actualizarCuenta();
    });
  }

  // Iniciar sorteo con cuenta regresiva
  iniciarBtn.addEventListener('click', async () => {
    const participantesValue = participantesInput.value.trim();
    const participantes = participantesValue.split('\n').filter(p => p.trim() !== '');

    if (participantes.length === 0) {
      alert('No hay participantes para sortear. Ingresa al menos un participante.');
      return;
    }
    
    // Mostrar overlay
    overlay.classList.add('active');
    
    // Iniciar la cuenta regresiva
    await iniciarCuentaRegresiva();
    
    // Seleccionar ganador
    const ganador = participantes[Math.floor(Math.random() * participantes.length)];
    
    // Mostrar ganador
    ganadorText.textContent = ganador;
    countdownContainer.style.display = 'none';
    ganadorContainer.style.display = 'block';
    
    // Crear confeti
    crearConfeti();
    
    // Ocultar después de 8 segundos
    setTimeout(() => {
      overlay.classList.remove('active');
      // Limpiar confeti
      document.querySelectorAll('.confetti').forEach(c => c.remove());
    }, 8000);
  });
});