console.log('this is tut 45');

function greet(name, Text = "u r not good boy") {
    console.log(Text + " " + name);
    console.log(name + " is a good boy");
}
let name = "Harsh";
let name1 = "shubham";
let name2 = "saurabh";
let name3 = "Ashwin";
let Text = "Good morning";
greet(name, Text);
greet(name1, Text);
greet(name2, Text);
greet(name3);

function sum(a, b, c) {
    let d = a + b + c;
    return d;
}
let returnval = sum(1, 2, 3);
console.log(returnval);
//
function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

let a = 20;
let b = 10;
console.log('The greater from ${a} and ${b} is ${max(a,b)}');
console.log('The smaller from ${a} and ${b} is ${min(a,b)}');








