const barR = document.getElementsByTagName('input')[0];
const barG = document.getElementsByTagName('input')[1];
const barB = document.getElementsByTagName('input')[2];
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const fondo = document.getElementsByTagName('body')[0];

const barras =['barR','barG','barB'];
const textos =['red','green','blue'];
    barR.addEventListener('click', () => {
        console.log(barR.value);
        red.innerText = barR.value;
        fondo.style.background = `rgb(${barR.value},${barG.value},${barB.value})`;
        
    })
    barG.addEventListener('click', () => {
        console.log(barG.value);
        green.innerText = barG.value;
        fondo.style.background = `rgb(${barR.value},${barG.value},${barB.value})`;
    })
    barB.addEventListener('click', () => {
        console.log(barB.value);
        blue.innerText = barB.value;
        fondo.style.background = `rgb(${barR.value},${barG.value},${barB.value})`;
    })
    