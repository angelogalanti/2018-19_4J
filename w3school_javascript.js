document.getElementById("demo").innerHTML = "Hello JavaScript"; // Write a value
var x = document.getElementById("myText"); // Read a value
document.getElementById("demo").style.fontSize = "35px";
// <script src="/js/myScript1.js"></script>
document.getElementById("demo").innerHTML = 5 + 6;
document.write(5 + 6);
window.alert(5 + 6);
console.log(5 + 6);
var x, y;          // How to declare variables
x = 5; y = 6;      // How to assign values
var x = "John" + " " + "Doe";
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object
x.firstName
var cars = ["Saab", "Volvo", "BMW"];           // Array
cars[0]
typeof "John"              // Returns "string"
typeof 314                 // Returns "number"
var car;                // Value is undefined, type is undefined
car = null;        // Now value is null, null is "nothing"
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
var x = myFunction(4, 3);   // Function is called, return value will end up in x
// objects
// https://www.w3schools.com/js/js_objects.asp
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
}; 
// events
// https://www.w3schools.com/js/js_events.asp
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
var pos = str.lastIndexOf("locate");
var pos = str.search("locate"); // can be used with regex
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); // the start position, and the end position
var res = str.substring(7, 13); // the second parameter specifies the length
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
var str = "       Hello World!        ";
str.trim();
var str = "HELLO WORLD";
str.charAt(0);            // returns H
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72
// Converting a String to an Array
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
var x = 123;
x.toString();            // returns 123 from variable x
// Converting Variables to Numbers
Number("10.33");       // returns 10.33
parseInt("10.33");      // returns 10
parseFloat("10.33");     // returns 10.33
var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number
// array
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo").innerHTML = cars[0];
var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits
// Associative Arrays JavaScript does not support arrays with named indexes.
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.
document.getElementById("demo").innerHTML = fruits.join(" * ");
var x = fruits.pop();      // Removes the last element ("Mango") from fruits
var x = fruits.push("Kiwi");   // The value of x is 5, returns the new array length
	var x = fruits.shift();    // Removes the first element "Banana" from fruits
	var myGirls = ["Cecilie", "Lone"];
	var myBoys = ["Emil", "Tobias", "Linus"];
	var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var citrus = fruits.slice(1, 3); // Orange,Lemon
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.sort();        // Sorts the elements of fruits
	fruits.reverse();     // Then reverse the order of the elements
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a, b){return a - b}); // Numeric Sort
	numbers.forEach(myFunction);
	// creates a new array by performing a function on each array element.
	var numbers2 = numbers1.map(myFunction);
	// creates a new array with array elements that passes a test.
	var over18 = numbers.filter(myFunction);
	// runs a function on each array element to produce (reduce it to) a single value.
	var sum = numbers1.reduce(myFunction);
	var fruits = ["Apple", "Orange", "Apple", "Mango"];
	var a = fruits.indexOf("Apple"); // returns 1
var d = new Date();
getFullYear()	//Get the year as a four digit number (yyyy)
getMonth()	//Get the month as a number (0-11)
getDate()	//Get the day as a number (1-31)
getHours()	//Get the hour (0-23)
getMinutes()	//Get the minute (0-59)
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.pow(8, 2);      // returns 64
Math.sqrt(64);      // returns 8
Math.abs(-4.7);     // returns 4.7
Math.ceil(4.4);     // returns 5
Math.floor(4.7);    // returns 4
Math.random();     // returns a random number
// &&	and	(x < 10 && y > 1) is true	
// ||	or	(x == 5 || y == 5) is false	
// !	not	!(x == y) is true

// if
var voteable = (age < 18) ? "Too young":"Old enough";
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// switch
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break; 
  case 0:
    text = "Today is Sunday";
    break; 
  default: 
    text = "Looking forward to the Weekend";
}

// for
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

// for in
var person = {fname:"John", lname:"Doe", age:25}; 
var text = "";
var x;
for (x in person) {
  text += person[x];
}

//while
while (i < 10) {
  text += "The number is " + i;
  i++;
}

//do while
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

//break
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

//continue
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

//this keyword refers to the object it belongs to
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};



//******IMPORTANTI
https://htmlcheatsheet.com/jquery/
https://htmlcheatsheet.com/js/

/*exercises:
https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1
variables
operators
functions
objects
events
strings
arrays
dates
math
comparisons
conditions
switch
loops
HTML DOM
*/
