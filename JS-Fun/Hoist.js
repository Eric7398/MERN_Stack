// 1 //
console.log(hello); // console log var hello
var hello = 'world'; // var hello being defined as world
// My Prediction: undefined
// Output: undefined

// 2 //
var needle = 'haystack'; // var needle being defined as haystack
test(); // calling the function test
function test() {
    var needle = 'magnet'; // change var needle into magnet
    console.log(needle); // console log magnet
}
// My Prediction: Error (function called pre defined)
// Output: magnet

// 3 //
var brendan = 'super cool'; // var brendan being defined as super cool
function print() {
    brendan = 'only okay'; // var brendan being redefined as only okay
    console.log(brendan); // print new console log
}
console.log(brendan); // print super cool because function was never called
// My Prediction: super cool (function isn't called)
// Output: super cool

// 4 //
var food = 'chicken'; // var food being defined as chicken
console.log(food); // console log chicken
eat(); // calling eat function
function eat() {
    food = 'half-chicken'; // redefine food into half-chicken
    console.log(food); // console log half-chicken
    var food = 'gone'; // redefine food as gone
}
// My Prediction: chicken, half-chicken
// Output: chicken, half-chicken

// 5 //
mean(); // call mean function
console.log(food); // nothing to console log so undefined
var mean = function () { // ERROR
    food = "chicken"; // define var food as chicken
    console.log(food); // log chicken
    var food = "fish"; // redefine food as fish
    console.log(food); // log fish
}
console.log(food); // log fish
// My Prediction: Error (console.log has nothing to log)
// Output: Error (mean is not a function)

// 6 //
console.log(genre); // undefined since genre hasn't been defined yet
var genre = "disco"; // define genre as disco
rewind(); // calls function rewind
function rewind() {
    genre = "rock"; // redefine genre as rock
    console.log(genre); // log rock
    var genre = "r&b"; // reset genre as r&b 
    console.log(genre); // log r&b
}
console.log(genre); // log disco
// My Prediction: undefined, rock, r&b, r&b
// Output: undefined, rock, r&b, disco

// 7 //
dojo = "san jose"; // define var dojo as san jose
console.log(dojo); // log san jose
learn(); // call function learn
function learn() {
    dojo = "seattle"; // redefine var dojo as seattle
    console.log(dojo); // log seattle
    var dojo = "burbank"; // redefine var dojo as burbank
    console.log(dojo); // log burbank
}
console.log(dojo); // log sanjose 
// My Prediction: san jose, seattle, burbank, san jose
// Output: san jose, seattle, burbank, san jose

// 8 BONUS //
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
// My Prediction: {name: Chicago, students: 65, hiring: true}, closed for now
// Output: {name: Chicago, students: 65, hiring: true}, Error (Assignment to constant variable.)
