
function handleConvert(event) {
	event.preventDefault();
	event.stopPropagation();
	let number = document.getElementById("no").value;
	var e = document.getElementById("unitFrom");
	var value1 = e.value;
	var text1 = e.options[e.selectedIndex].text;
	var e = document.getElementById("UnitTo");
	var value2 = e.value;
	var text2 = e.options[e.selectedIndex].text;
	let answer = document.getElementById("ans");
	console.log(text1, text2, number);
	if (isNaN(number)) {
		alert("Input cannot be a letter");
	}
	if (text1==text2) {
		alert("Invalid Input");
	}
	if (text1 == "Celcius" && text2 == "Fahrenheit") {
		let a = (number * 9 / 5) + 32;
		answer.innerHTML = a;
	}
	if (text1 == "Celcius" && text2 == "Kelvin") {
		let a = (+number + 273.15);
		answer.innerHTML = a;
	}
	if (text1 == "Fahrenheit" && text2 == "Celcius") {
		let a = ((number - 32) * 5 / 9);
		answer.innerHTML = a;
	}
	if (text1 == "Fahrenheit" && text2 == "Kelvin") {
		let a = ((number - 32) * 5 / 9 + 273.15);
		answer.innerHTML = a;
	}
	if (text1 == "Kelvin" && text2 == "Celcius") {
		let a = (number - 273.15);
		answer.innerHTML = a;
	}
	if (text1 == "Kelvin" && text2 == "Fahrenheit") {
		let a =((number - 273.15) * 9 / 5 + 32);
		answer.innerHTML = a;
	}
}
