const sketch_board = document.getElementById('sketch-board');
const inputValueBtn = document.getElementById('input-value-btn');
const inputValueTxt = document.getElementById('input-value');

function createCells(userInput) {
    let value = userInput;
    sketch_board.innerHTML = '';
    for (let i = 0; i < value; i++) {
        // Create a row for each iteration of the outer loop
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        sketch_board.appendChild(row);

        // This second loop is to loop through and create horizontal divs/cells
        for (let j = 0; j < value; j++) {
            let cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            // You can set a unique identifier if needed, or use class for styling
            // cell.setAttribute("id", "cell-" + i + "-" + j);
            row.appendChild(cell);


            cell.addEventListener('mouseover', function () {
                cell.style.backgroundColor = '#3498db';
            });
        }
    }
}

inputValueBtn.addEventListener('click', function() {
    let userInput = inputValueTxt.value;
    createCells(userInput);
})
