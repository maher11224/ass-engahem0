const waves = document.querySelectorAll('.wave');
let step = 0;

function animateWaves() {
    step += 0.02;
    waves.forEach((wave, index) => {
        const colorValue = Math.abs(Math.sin(step + index)) * 255;
        wave.setAttribute('stroke', `rgb(${colorValue}, 0, 0)`);
    });
    requestAnimationFrame(animateWaves);
}
animateWaves();