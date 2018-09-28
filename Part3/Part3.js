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