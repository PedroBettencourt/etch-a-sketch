// Create container with hover effect for the grid
function getContainer() {
    const container = document.createElement("div");
    container.classList.add("container");

    // Add the hover effect
    container.addEventListener("mouseover", (e) => {
        let target = e.target;
        if (target.classList[0] === "square") {
            const randomColor = getColor();
            let opacity;
            let color = target.style.backgroundColor;

            // Get opacity value and increase 0.1 if existent
            if (color === "") {
                opacity = 0.1;
            } else if (color.split("(")[0] === "rgba") {
                opacity = parseFloat(color.split(",")[3].replace(")", ""));
                opacity += 0.1;
            } else {
                opacity = 1;
            }
            randomColor.push(opacity);
            target.style.backgroundColor = `rgba(${randomColor})`;
        
        }
    });

    return container;
}


// Create the square grid
function createGrid(container, gridSize) {
    for(let i=0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j=0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    document.body.appendChild(container);
}


// Choose color
function getColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}


// Button to choose grid size
const buttonGrid = document.createElement("button");
buttonGrid.textContent = "Create drawing grid";
document.body.appendChild(buttonGrid);

buttonGrid.addEventListener("click", () => {
    let gridSize = prompt("What size should the square grid be?");
    while (gridSize > 100) {
        alert("No values above 100")
        gridSize = prompt("What size should the square grid be?");
    }
    
    const element = document.querySelector(".container");
    if (element != null) element.remove();
    
    color = getColor();
    const container = getContainer();
    createGrid(container, gridSize);
});
