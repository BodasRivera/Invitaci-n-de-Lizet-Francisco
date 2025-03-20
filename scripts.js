document.addEventListener('DOMContentLoaded', function () {
    // Sección de la cuenta regresiva
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Fecha del evento
    const weddingDate = new Date('2025-05-17T00:00:00').getTime(); 

    function launchFireworks() {
        // Efecto de confeti
        confetti({
            particleCount: 100,
            spread: 50,
            origin: { y: 0.6 }
        });
        
        // Lanza más confeti cada segundo durante 5 segundos
        const intervalId = setInterval(function () {
            confetti({
                particleCount: 100,
                spread: 50,
                origin: { y: 0.6 }
            });
        }, 120000);
        
        setTimeout(function () {
            clearInterval(intervalId);
        }, 2000);
        
        // Animación de cohetes
        const fireworksContainer = document.createElement('div');
        fireworksContainer.id = 'fireworks';
        fireworksContainer.style.position = 'fixed';
        fireworksContainer.style.top = 0;
        fireworksContainer.style.left = 0;
        fireworksContainer.style.width = '100vw';
        fireworksContainer.style.height = '100vh';
        fireworksContainer.style.pointerEvents = 'none';

        document.body.appendChild(fireworksContainer);

        for (let i = 0; i < 3; i++) {
            const rocket = document.createElement('div');
            rocket.className = 'rocket';
            rocket.style.left = `${Math.random() * 100}vw`;
            rocket.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            fireworksContainer.appendChild(rocket);
        }

        setTimeout(() => fireworksContainer.remove(), 5000); // Elimina después de 5 segundos
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance >= 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysElement.textContent = days;
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;
        } else {
            countdownElement.innerHTML = "¡El día ha llegado!";
            launchFireworks(); // Lanza los efectos de celebración
        }
    }

    // Actualiza el contador cada segundo
    setInterval(updateCountdown, 1000);

    // Manejo de la opción de asistencia (RSVP)
    const attendanceSelect = document.getElementById('attendance');
    const guestContainer = document.getElementById('guest-container');

    attendanceSelect.addEventListener('change', function () {
        if (attendanceSelect.value === 'Sí') { // Mostrar invitados si confirma asistencia
            guestContainer.style.display = 'block';
        } else {
            guestContainer.style.display = 'none'; // Ocultar si no asiste
        }
    });

    // Envío del formulario RSVP
    const form = document.getElementById('rsvp-form');
    form.addEventListener('submit', function (event) {
        alert('¡Gracias por confirmar tu asistencia!');
    });
});
