
var pizzas : Array<string>=['Hawaii', 'Caprese', 'Tonno', 'Pepperoni Passion', 'Quattro Formaggi', 'Extravaganzza'];

for (let i = 0; i < pizzas.length; i++) {
	document.getElementById(''+(i+1)+'').innerHTML = pizzas[i]
}

