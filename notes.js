//date object

//date is not just a string...it is an object
date.getDay() //returns 1 for Monday. 0 is Sunday
date.getDate() // returns 16

//unix epoch. jan 1 1970 when it was decided to start counting milliseconds.
//sometimes this is used as a reference point.
now.getTime() // will return 1521758099384 or some long number that is number of milliseconds from that date.

//can use moment.js library to make things easier
//momentjs.com can use to format dates and times
//can also do relative time

//use date object for homework. not allowed to use moment...for today

//you can use setTimeOut or setInterval to make a timer

var timeout = setTimeOut(function(){
	console.log('asdf'), 6000
}) //returns asdf in 6 seconds

//if you run clear timeout right after this code it will clear it out before it even has a chance to run

var seconds = setInterval(function(){
	console.log(new Date().getTime())
}, 1000) // returns the time every second

clearInterval(seconds) // will clear out the function and stop it from running

//setInterval will run as close to the interval as possible, even if the previous function has not completed.
//combine with setTimeout

function myInterval(){
	console.log('hello')
	setTimeout(myInterval, 1000)
}
//will run myInterval every second but will wait until the previous one is done to do so.
//results are basically the same. so what is the difference?


////////////////hexadecimal = base16 math //////////////////////////
//0 1 2 3 4 5 6 7 8 9 A B C D E F

var num = 210
num.toString(16) //because base16
//returns d2 (this is the hexadecimal equivalent)


//for example, look up rgb(252,16,81)
var red = 252, green = 16, blue = 81
red.toString(16) // fc
green.toString(16) // 10
blue.toString(16) // 51



//////////////////////////////closures/////////////////////////////////
function foo() {
	var a = 1
	console.log(a) //will return 1

	}
console.log(a) //will not work outside the function

function foo() {
	var a = 1

	function bar() {
		var b = 2
		console.log(a,b) //can access a and b

		function bat() {
			var c = 3
			console.log(a, b, c) // can access a b and c
		}
		console.log(c) // will not work
	}
}

//closure lets you keep a variable's value even after the function is gone


function add(x) {
	return function(y) {
		return x + y
	}
}

var foo = add(3) //when you run add you return a function.
foo(6) // 9
foo(7) // 10
//remembers that x is assigned 3 initially.

add(3)(6) // 9

//child function accesses variable of parent function and keeps tabs on that variable even after the function is complete
//CLOSURES

//module pattern

var myModule = {
	sayHello: function(){
		console.log('hello')
	},
	config: {
		time: Date.now(),
		name: 'myModule'
	},
	sayGoodbyg: function(){
		console.log('goodbye')
	}
}
myModule.sayHello()
myModule.sayGoodbye()


//modules allow access to only the child functions so that users cannot mess with the important parent stuff



//constructor functions//////////object oriented constructor pattern

var Card = function(suit, value, display) {
	this.suit = suit
	this.value = value
	this.display = display
}

var Deck = function() {
	var cards = []
	var suits = ['spades', 'diamonds', 'clubs', 'hearts'] //should use const instead of var (these wont change)
	var display = ['A', '2', '3', '4'......] //use const because these wont change either

	for (var i = 0; i < 4; i++) {
		for (var j = 1; j <= 13; j++) {
			cards.push(new Card(suits[i], j, j, display[j-1]))
			}
		}
	}

Deck.prototype = {
	displayCards = function() {
		console.log(this.cards)
	}
}
var deck = new Deck



//////////////////////////this///////////////

//this refers to whatever calls the function that this is inside of
//study .call, .apply and .bind differences
//.bind goes to the end of an expression
//.apply works with arrays

//arrow functions have no this value.

