

function currentTime() {

	var date = new Date()
	var h = date.getHours()
	var m = date.getMinutes()
	var s = date.getSeconds()

	if(h < 10) {
		h = "0" + h // hours will display 0 in accordance with military time when before 10am.
	}
	if(m < 10) {
		m = "0" + m // minutes will display 0 as placeholder when less than 10 minutes in hour
	}
	if(s < 10) {
		s = "0" + s // seconds will display 0 as placeholder when less than 10 seconds in minute
	}

	var time = h + ':' + m + ':' + s 
	
function colorTime() {
var red = (h*(Math.round(Math.random()*10))).toString(16) // red value converted to base16
var green = (m*(Math.round(Math.random()*4))).toString(16) // green value converted to base16
var blue = (s*(Math.round(Math.random()*4))).toString(16) // blue value converted to base16

var color = ('#'+red+green+blue) // color values appended into a hexadecimal value
console.log(color)
	document.getElementById('firstClock').innerText = time
	document.getElementById('firstClock').textContent = time

	document.body.style.backgroundColor = color // change css background color of body
	setTimeout(currentTime, 1000) // display time each second
}
colorTime()
}
currentTime()