var add=function(a,b){
	return `the product of number is ${a+b}`;
}

var subtract=function(a,b){
	return `the product of number is ${a-b}`;
}

var multiplication=function(a,b){
	return `the product of number is ${a*b}`;
}


var divide=function(a,b){
	return `the product of number is ${a/b}`;
}

module.exports.add=add;
module.exports.subtract=subtract;
module.exports.multiplication=multiplication;
module.exports.divide=divide;