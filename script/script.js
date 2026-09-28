const audio = document.getElementById('musica-fondo');
const btnMusica = document.getElementById('boton-musica');
const iconoMusica = document.getElementById('icono-musica');

audio.volume = 0.3;

function reproducirPrimerClic() {
    audio.play().then(() => {
        if (iconoMusica) iconoMusica.textContent = '🔊';
    }).catch((error) => {
        console.log("Esperando interacción para reproducir:", error);
    });
}

document.addEventListener('click', reproducirPrimerClic, { once: true });

if (btnMusica) {
    btnMusica.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audio.paused) {
            audio.play();
            if (iconoMusica) iconoMusica.textContent = '🔊';
        } else {
            audio.pause();
            if (iconoMusica) iconoMusica.textContent = '🔇';
        }
    });
}
