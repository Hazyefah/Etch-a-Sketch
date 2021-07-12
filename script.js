
const grid = document.querySelector("#container");
start();


// On clicking clear button, reset grid and all squares to white
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear)

// Creating default grid for sketching
function start() {
    for (let i = 0; i < 256; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");

        grid.appendChild(squareDiv);
    }
    draw();
}



// Function used to fill draw on grid
function fill(e) {
    e.target.style.backgroundColor = "black";
}

// Function used to reset all filled squares on grid
function clear() {

    /*squares.forEach((square) => {
        square.style.backgroundColor = "white";
    })*/

    while (grid.firstChild) {
        grid.firstChild.remove();
    }

    createGrid(requestGridSize());

}

// Function to promot user for grid size after clearing default grid size
function requestGridSize() {
    let gridSize = parseInt(prompt("How many squares per size? (Max 100)"), 10);
    warning(gridSize);

    return gridSize;
}

// If user enters grid size of over 100, alert a warning
function warning(gridSize) {
    if (gridSize > 100) {
        alert("Max limit is 100, please re-enter.")
        requestGridSize();
    }


}

// Creates new Grid based off User's input
function createGrid(requestGridSize) {
    console.log(requestGridSize);
    for (let i = 0; i < (requestGridSize * requestGridSize); i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");

        grid.appendChild(squareDiv);
    }

    grid.style.gridTemplateRows = `repeat(${requestGridSize}, ${720 / requestGridSize}px)`;
    grid.style.gridTemplateColumns = `repeat(${requestGridSize}, ${720 / requestGridSize}px)`;
    draw();
}


function draw() {
    // Storing all squares in grid in variable
    const squares = document.querySelectorAll(".squareDiv");

    // On hoveing square in grid, fill with black
    squares.forEach((square) => {
        square.addEventListener("mouseenter", fill);
    });
}