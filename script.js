function generate(input) {
	var options = [
		"100%... a match made in heaven",
		"90%... your stable relationship arc",
		"75%... awesome but not sure it will last",
		"69%... there is definitely some chemistry",
		"50%... flip a coin",
		"25%... not sure about that",
		"13%... no one wants to see this happen",
		"0%... yall flopped sorry"
	];
	var randomOption = options[Math.floor(Math.random() * options.length)];
	var output = document.getElementById("output");
	output.innerHTML = randomOption;
	restyle();
}

function restyle() {
	var output = document.getElementById("output");
	var randomSize = Math.floor(Math.random() * 30) + 30;	
	var r = Math.floor(Math.random() * 256);
  	var g = Math.floor(Math.random() * 256);
  	var b = Math.floor(Math.random() * 256);
	var randomFont = Math.random() < 0.5 ? "serif" : "sans-serif";
	output.style.fontSize = randomSize + "px";
	output.style.color = "rgb(" + r + ", " + g + ", " + b + ")";
	output.style.fontFamily = randomFont;
}