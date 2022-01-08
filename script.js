const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 0; i < (size ** 2); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${size},1fr)`;
        container.style.gridTemplateRows = `repeat(${size},1fr)`;
        container.appendChild(div).classList.add('box');
    }

}

createGrid(4);

const boxes = container.querySelectorAll('.box')

boxes.forEach(box => box.addEventListener('mouseover', () => {
    box.style.background = 'black';
}))