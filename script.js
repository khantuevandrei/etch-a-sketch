const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
    for (let i = 1; i <= 16; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        container.appendChild(square);
    }
}