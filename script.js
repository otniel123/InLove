
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('myModal');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelector('.close');


images.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        
        modalText.textContent = img.getAttribute('data-text');
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const revealButton = document.getElementById('revealButton');
    const playMusicButton = document.getElementById('playMusicButton');
    const specialMusic = document.getElementById('specialMusic');

    revealButton.addEventListener('click', () => {
        playMusicButton.style.display = 'inline-block'; 
    });

    playMusicButton.addEventListener('click', () => {
        specialMusic.play(); 
    });
});
