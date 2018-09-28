function CreateTables(matrixA, matrixB)
{
    var newDivA = document.createElement("div")
    newDivA.className = "MatrixADiv";

    var newDivB = document.createElement("div");
    newDivB.className = "MatrixBDiv";

    // Check if table already exists. If so, kill it.
    if(document.body.getElementsByClassName("MatrixATable")[0] != null)
        document.body.getElementsByClassName("MatrixATable")[0].remove();
    if(document.body.getElementsByClassName("MatrixBTable")[0] != null)
        document.body.getElementsByClassName("MatrixBTable")[0].remove();

    var matrixTableA = document.createElement("table");
    matrixTableA.className = "MatrixATable";

    var matrixTableB = document.createElement("table");
    matrixTableB.className = "MatrixBTable";

    let matrixABody = document.createElement("tbody");
    let matrixBBody = document.createElement("tbody");

    // generate matrix A table
    for(let i = 0; i < matrixA.length; i++)
    {
        let newRow = document.createElement("tr");

        for(let j = 0; j < matrixA[i].length; j++)
        {
            let newCell = document.createElement("td");
            newCell.className = "MatrixCell";

            let newInputField = document.createElement("input");
            newInputField.type = "number";
            newInputField.class = "CellInput";

            newCell.appendChild(newInputField);
            newRow.appendChild(newCell);
        }

        matrixABody.appendChild(newRow);
    }

    matrixTableA.appendChild(matrixABody);
    newDivA.appendChild(matrixABody);

    // generate matrix B table
    for(let i = 0; i < matrixB.length; i++)
    {
        
        let newRow = document.createElement("tr");

        for(let j = 0; j < matrixB[i].length; j++)
        {
            let newCell = document.createElement("td");
            newCell.className = "MatrixCell";

            let newInputField = document.createElement("input");
            newInputField.type = "number";
            newInputField.class = "CellInput";

            newCell.appendChild(newInputField);
            newRow.appendChild(newCell);
        }

        matrixBBody.appendChild(newRow);
    }

    matrixTableB.appendChild(matrixBBody);
    newDivB.appendChild(matrixTableB);
    
    let comboBox = document.getElementsByClassName("ComboBox")[0];

    document.body.insertBefore(newDivA, comboBox);
    
    let matrixAOptions = document.getElementsByClassName("MatrixAOptions")[0];

    document.body.insertBefore(newDivB, matrixAOptions);
}