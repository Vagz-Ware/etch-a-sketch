const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

makeDefaultGrid()

function makeDefaultGrid() {
    makeRows(16);
    makeColumns(16);
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

            newCell.onmouseout = function() {
                this.style.backgroundColor = "red";
            }
            
            rows[j].appendChild(newCell).className = "cell";
        }
    }
    
}

