let colorValue = '#E7C07B';
let randomColorOn = false;

const slider = document.querySelector('.slider');
const sliderTextBox = document.querySelector('.slider-text-box');
sliderTextBox.textContent = `Grid size: ${slider.value} x ${slider.value}`;
slider.oninput = () => sliderTextBox.textContent = `Grid size: ${slider.value} x 
${slider.value}`;
slider.addEventListener('input', () => makeGrid(slider.value), true);

const randomColorBtn = document.getElementById('random');
randomColorBtn.addEventListener('click', randomColor);

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('input', pickColor);

function makeGrid(length = 16) {
    
    // Remove grid if it exists
    const test = document.querySelector('.container');
    if (test) {
    document.body.removeChild(test);
    }

    // Outer grid container
    const container = document.createElement('div');
    const invisBox = document.querySelector('.invis-box');
    container.className = "container";
    container.setAttribute('style', `grid-template-columns: repeat(${length}, 1fr); grid-template-rows: repeat(${length}, 1fr);`);
    //document.body.appendChild(container);
    document.body.insertBefore(container, invisBox) 
    // Create grid of divs    
    for (let i = 0; i < length * length; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = "grid-div";
        container.appendChild(gridDiv);
        }
    hoverEffect();
}

// Place the initial grid
makeGrid(slider.value);

//Add hover effect to boxes
function hoverEffect() {
    const boxes = document.querySelectorAll('.grid-div');
    boxes.forEach(hoverEvent);
}

function hoverEvent (box) {
    box.addEventListener('mouseenter', changeColor);
}

function changeColor() {
    if(randomColorOn) {
        colorValue = '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    this.setAttribute('style', `background-color: ${colorValue};`);
}

function pickColor() {
    randomColorOn = false;
    colorValue = colorPicker.value;
    makeGrid(slider.value);
}

function randomColor() {
    randomColorOn = true;
    makeGrid(slider.value);
}

function clear() {
    randomColorOn = false;
    colorValue = '#E7C07B';
    colorPicker.value = '#E7C07B';
    makeGrid(slider.value);
}

