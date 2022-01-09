const container = document.querySelector('.container');
const boxes = container.querySelectorAll('.box')
const slider = document.getElementById("myRange");
let size = 9;

function createGrid(size) {
    for (let i = 0; i < (size ** 2); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${size},1fr)`;
        container.style.gridTemplateRows = `repeat(${size},1fr)`;
        container.appendChild(div).classList.add('box');

    }
}

createGrid(size);

function reset() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.remove())
    container.style.gridTemplateColumns = 'none';
    container.style.gridTemplateRows = 'none';
}

function clearGrid() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.style.background = 'none');
}

slider.oninput = function() {
    size = this.value;
    reset()
    createGrid(size);
    active();
}

function active() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    })
}    

active();