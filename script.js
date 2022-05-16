/*
make a 16x16 grid of divs using javascript
    document.addElement to create 16 divs within an outer container div

    CSS to style it into a grid
*/

// Outer container
const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);


// 16 x 16 grid of divs
for (let i = 0; i < 255; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.className = "grid-div";
    container.appendChild(gridDiv);
}


