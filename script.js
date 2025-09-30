const container = document.querySelector('#container');
let oneSide = 16;

const paraBtn = document.createElement('button');
paraBtn.textContent = 'Enter new parameters';
paraBtn.addEventListener('click', () => {
    makeNewGrid();
})
const body = document.querySelector('body');
body.appendChild(paraBtn);

function clearTheGrid() {
    container.innerHTML = '';
}

function setNewParameters() {
    oneSide = Number(prompt('Squares per side?', ''));
    if (oneSide > 100) oneSide = 100;
    return oneSide;
}

function drawGrid() {
    let length = 960 / oneSide;

    for (let i = 1; i <= oneSide; i++) {
        for (let i = 1; i <= oneSide; i++) {
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('style', `height: ${length}px; width: ${length}px;`)
            container.appendChild(square);
        }
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add('active');
        })
    })
}

function makeNewGrid() {
    clearTheGrid();
    setNewParameters();
    drawGrid()
}

drawGrid();

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

