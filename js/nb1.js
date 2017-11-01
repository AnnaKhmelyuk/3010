function myFunction() {
	var x, y, result
	x = document.getElementById('n1').value;
	x = parseInt(x);

	y = document.getElementById('n2').value;
	y = parseInt(y);

	if ((x % 2) === 0) {
		if ((y % 2) === 0) {
		result = ('обидва парні');
		}
		else if ((y % 2) != 0) {
		result = ('тільки перше парне')
		}
	}
	else if ((x % 2) != 0) {
		if ((y % 2) === 0) {
			result = ('тільки друге парне')
		}
		else if ((y % 2) != 0) {
		result = ("обидва непарні")	
		}
	}
	document.getElementById('out').innerHTML = result;

	}

