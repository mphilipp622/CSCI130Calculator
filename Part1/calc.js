var ops = [];

function captureKey(key) {
  ops.push(key);
  console.log(key);
}

function equals() {
  let currentNumber = null;
  let ans = 0;
  for (let i = 0; i < ops.length; i++) {
    //to determine what to do with it
    switch (ops) {
      case "+":
        if (ans == 0) {
          ans = currentNumber;
        }
        addKey;
      case "-":
        subKey;
      case "*":
        multKey;
      case "/":
        divKey;
      default:
        if (currentNumber === null) {
          currentNumber = ops[i];
        } else {
          currentNumber = currentNumber * 10 + ops[i];
        }
    }
  } //end for
}

function incArray() {
  pos++;
}

function addKey(a, b) {
  return a + b;
}

function subKey(a, b) {
  return a - b;
}

function multKey(a, b) {
  return a * b;
}

function divKey(a, b) {
  return a / b;
}

function squareKey(a, b) {
  return Math.pow(a, b);
}

function sqrRt(b) {
  return Math.sqrt(b);
}

function clear(a, b) {}
