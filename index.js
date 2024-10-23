const barR = document.getElementById('barraRoja');
const barG = document.getElementById('barraVerde');
const barB = document.getElementById('barraAzul');
const textoRed = document.getElementById('red');
const textoGreen = document.getElementById('green');
const textoBlue = document.getElementById('blue');

    barR.addEventListener('change', () => {color();})
    barG.addEventListener('change', () => {color();})
    barB.addEventListener('change', () => {color();})

function color() {
  textoRed.innerText = barR.value;
  textoGreen.innerText = barG.value;
  textoBlue.innerText = barB.value;
  document.body.style.background = `rgb(${barR.value},${barG.value},${barB.value})`;
}