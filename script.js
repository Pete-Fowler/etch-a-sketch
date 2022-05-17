/*
make a 16x16 grid of divs using javascript
    document.addElement to create 16 divs within an outer container div

    CSS to style it into a grid
*/

// Grid size slider
const slider = document.querySelector('.slider');
const sliderTextBox = document.querySelector('.slider-text-box');
sliderTextBox.textContent = `Grid size: ${slider.value} x ${slider.value}`;
slider.oninput = () => sliderTextBox.textContent = `Grid size: ${slider.value} x 
${slider.value}`;

slider.addEventListener('input', () => makeGrid(slider.value), true);

function makeGrid(length = 16) {
    
    // Remove grid if it exists
    const test = document.querySelector('.container');
    if (test) {
    document.body.removeChild(test);
    }

    // Outer grid container
    const container = document.createElement('div');
    container.className = "container";
    container.setAttribute('style', `grid-template-columns: repeat(${length}, 1fr); grid-template-rows: repeat(${length}, 1fr);`);
    document.body.appendChild(container);

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
    this.setAttribute('style', 'background-color: blue;');
}


