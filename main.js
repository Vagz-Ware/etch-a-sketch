/*declaration of global variables and nodes */
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

/*
calls my makeDefaultGrid function as soon as the page loads up
*/ 
makeDefaultGrid()

/*makeDefaultGrid function with default argumments of 16/16 */

function makeDefaultGrid() {
    let userDesiredRows = prompt ("How many rows do you want?, 16")
    
    let userDesiredColumns = prompt ("How many columns do you want?, 16")
    

    makeRows(userDesiredRows);
    makeColumns(userDesiredColumns);
}

function makeRows(rowNum) {

    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className ="gridRow";
    }
    
}

function makeColumns(cellNum) {

    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");

            newCell.onmouseover = function() {
                this.style.backgroundColor = "blue";
            }

        /* newCell.onmouseout = function() {
                this.style.backgroundColor = "red";
            } */

            rows[j].appendChild(newCell).className = "cell";
        }
    }    
}

