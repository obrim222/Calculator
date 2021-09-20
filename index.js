function display(val) {
	document.getElementById("textval").value += val;
}

function getResult() {
	let x = document.getElementById("textval").value;
	let y = eval(x);
	document.getElementById("textval").value = y;
}

function clr() {
	document.getElementById("textval").value = "";
}

function clrtozero() {
	document.getElementById("textval").value = "0";
}
