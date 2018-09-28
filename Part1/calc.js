var numbers = [];
var pos=0;
var ops = [];

function captureKey(key){
	if (numbers[pos] === null){
		numbers[pos];
	}
	numbers[pos]=numbers[pos]+key;
	console.log(numbers[pos]);
}



function incArray(){
	pos++;
}

function addKey(a,b){
     return a + b;     
}

function subKey(a,b){
    return a - b; 
}

function multKey(a,b){
    return a * b; 
}

function divKey (a,b){
    return a/b; 
}

function squareKey(a,b){
    return Math.pow(a,b);
}

function sqrRt (b){
    return Math.sqrt(b);
}

function clear (a,b){

}

