function myFunction(num1, num2) {
var num1, num2, result;
 	num1 = document.getElementById("n1").value;
 	num1 = parseInt(num1);
	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);
	if (num1 % 2) === 0 i (y % 2) === 0 {
	result = ("both odd");
	}
	else if (((num1 % 2) === 0); ((num2 % 2) != 0)) {
	result = ("first odd,second even");
	}
	else if (((num1 % 2) != 0);((num2 % 2) === 0)) {
	result = ("first even,second odd");
	}
	else (((num1 % 2) != 0); ((num2 % 2) != 0)) {
	result = ("both even");
	}
	document.getElementById("out").innerHTML = result;
}