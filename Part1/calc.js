var ops = [];
var pendingOP = null;

function captureKey(key) {
	ops.push(key);
	console.log(key);
}

function equals() {
	let currentNumber = null;
	let nextNumber = null;
	let pendingOp = null;
	let ans = 0;

	for (let i = 0; i < ops.length; i++) {
		if (isNumeric(ops[i])) {
			if (pendingOp !== null) {
				if (nextNumber === null) {
					nextNumber = ops[i];
				} else {
					nextNumber = nextNumber * 10 + nextNumber;
				}
				console.log(nextNumber);
			} else {
				if (currentNumber === null) {
					currentNumber = ops[i];
				} else {
					currentNumber = currentNumber * 10 + ops[i];
				}
				console.log(currentNumber);
			}
		} else {
			console.log(currentNumber + nextNumber);
		}
	}
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

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
