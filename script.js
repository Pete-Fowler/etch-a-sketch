/*
make a 16x16 grid of divs using javascript
    document.addElement to create 16 divs within an outer container div

    CSS to style it into a grid
*/

// Grid size slider
    const slider = document.querySelector('.slider');
    const sliderTextBox = document.querySelector('.slider-text-box');
    sliderTextBox.textContent = `${slider.value} x ${slider.value}`;
    slider.oninput = () => sliderTextBox.textContent = `${slider.value} x 
    ${slider.value}`;

// Outer grid container
    const container = document.createElement('div');
    container.className = "container";
    document.body.appendChild(container);


// Create inital 16 x 16 grid of divs
    for (let i = 0; i < 255; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = "grid-div";
        container.appendChild(gridDiv);
    }

// Add hover effect to boxes
    const boxes = document.querySelectorAll('.grid-div');
    boxes.forEach(hoverEffect);

    function hoverEffect (box) {
        box.addEventListener('mouseenter', changeColor);
    }

    function changeColor() {
        this.setAttribute('style', 'background-color: blue;');

    }

