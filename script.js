// Get sensor data
var temp = document.getElementById("temp");
var hum = document.getElementById("hum");
var soil = document.getElementById("soil");

// Simulate sensor data
setInterval(function() {
	temp.innerHTML = Math.floor(Math.random() * 20 + 20);
	hum.innerHTML = Math.floor(Math.random() * 30 + 50);
	soil.innerHTML = Math.floor(Math.random() * 50 + 50);
}, 5000);

// Water plants
var waterBtn = document.getElementById("water");
waterBtn.addEventListener("click", function() {
	alert("Watering plants...");
});

// Fertil