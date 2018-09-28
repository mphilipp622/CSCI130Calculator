function getDimensions(input) {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var m1 = document.getElementById('m1').value;
    var m2 = document.getElementById('n2').value;

    matrixA = [];
    for (var i = 0; i < n1; i++) {
        matrixA[i] = [];
        for (var j = 0; j < m1; j++) {
            matrixA[i][j] = undefined;
        }
    }

    matrixB = [];
    for (var i = 0; i < n2; i++) {
        matrixB[i] = [];
        for (var j = 0; j < m2; j++) {
            matrixB[i][j] = undefined;
        }
    }

    CreateTables(matrixA, matrixB);
}

function AddMatrices()
{
    return Math.add(matrixA, matrixB);
}
function SubtractMatrices()
{
    return Math.subtract(matrixA, matrixB);
}
function MultiplyMatrices()
{
    return Math.multiply(matrixA, matrixB);
}
// const matrixA = 
// const matrixS = 
// const matrixM = 

// const matrixTraceA = Math.trace(matrixA);
// const matrixTraceB = Math.trace(matrixB);

function ExecuteOperation()
{
    let operation = document.getElementById("MatrixOperation").value;

    if(operation == "Addition")
        AddMatrices();
    else if(operation == "Subtraction")
        SubtractMatrices();
    else if(operation == "Multiplication")
        MultiplyMatrices();
}

function transposeArray(array){
    var h = a[0] instanceof Array ? a[0].length : 0;// height of array
    var w = a.length || 0;                          // width of array

    if (h === 0 || w === 0) { return [];} // empty matrix, return empty

    var transposedArray = [];
    for (var i = 0; i < h; i++) {
        t[i] = [];
        for (var j = 0; j < w; j++){
            transposedArray[i][j] = array[j][i];
        }
    }
    return transposedArray;
}

var matrixA;
var matrixB;