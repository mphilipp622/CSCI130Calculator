function getDimensions(input) {
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var m1 = document.getElementById('m1').value;
    var m2 = document.getElementById('n2').value;

    var matrixA = [];
    for (var i = 0; i < n1; i++) {
        matrixA[i] = [];
        for (var j = 0; j < m1; j++) {
            matrixA[i][j] = undefined;
        }
    }

    var matrixB = [];
    for (var i = 0; i < n2; i++) {
        matrixA[i] = [];
        for (var j = 0; j < m2; j++) {
            matrixA[i][j] = undefined;
        }
    }
}

const matrixA = math.add(matrixA, matrixB);
const matrixS = math.subtract(matrixA, matrixB);
const matrixM = math.multiply(matrixA, matrixB);

const matrixTraceA = math.trace(matrixA);
const matrixTraceB = math.trace(matrixB);

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