// GLOBAL VARIABLES
const container = document.querySelector('.container');
const create_grid_button = document.querySelector('.createGridButton');
let grid_squares = document.querySelectorAll('.gridSquare');


// FUNCTION TO CLEAR EXISTING GRID
function clearEtchASketchGrid() {   
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

}


// FUNCTION TO CREATE A NEW GRID
function createEtchASketchGrid(grid_row_quantity) {    
    const grid_total_squares = Math.pow(grid_row_quantity, 2);
    const grid_square_percentage_size = grid_row_quantity / grid_total_squares * 100;


    for (let i = 0; i < grid_total_squares; i++) {
        const div = document.createElement('div');
        div.classList.add('gridSquare');
        div.setAttribute('style', `flex-basis: ${grid_square_percentage_size}%;`)

        container.appendChild(div);
    }
}


// BUTTON TO CREATE NEW GRID
create_grid_button.addEventListener('click', () => {
    let row_size = parseInt(prompt("Enter the row size: "));

    clearEtchASketchGrid();
    createEtchASketchGrid(row_size);
    addHoverEffect();
});


// HOVER EFFECTS
function addHoverEffect() {
    let grid_squares = document.querySelectorAll('.gridSquare');

    grid_squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (!square.style.backgroundColor) {
                square.style.backgroundColor = getRandomRGBColor();
                square.style.opacity = 0.1;
            }
            console.log(`opacity is: ${square.style.opacity}`);
            console.log(`opacity should be: ${parseFloat(square.style.opacity) + 0.1}`);

            if (parseFloat(square.style.opacity) < 1) {
                square.style.opacity = parseFloat(square.style.opacity) + 0.1;
            }
        });
    });
}


// FUNCTION TO GET RANDOM RGB COLOUR
function getRandomRGBColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}