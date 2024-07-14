//--------------------QUESTION 01---------------------//
var multidimensionalArray = [[],[]];
//--------------------QUESTION 02---------------------//
//--------------------QUESTION 03---------------------//
for(var i=1; i<=10; i++){
    document.write(i + "<br>");
}
//--------------------QUESTION 04---------------------//
//var table = +prompt("Please enter any table number");
//var length = +prompt("Length of table..");

for(var i=1; i<=length; i++){
    document.write(table + "x" + i + "=" + table*i + "<br>");
}

//--------------------QUESTION 05---------------------//
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
document.write(fruits[0] + "<br>");
document.write(fruits[1] + "<br>");
document.write(fruits[2] + "<br>");
document.write(fruits[3] + "<br>");
document.write(fruits[4] + "<br><br>");

document.write("Element at index 0 is " +fruits[0] + "<br>");
document.write("Element at index 1 is " +fruits[1] + "<br>");
document.write("Element at index 2 is " +fruits[2] + "<br>");
document.write("Element at index 3 is " +fruits[3] + "<br>");
document.write("Element at index 4 is " +fruits[4] + "<br><br>");
//--------------------QUESTION 06---------------------//
document.write("Counting <br>");
for(var i=1; i<=10; i++){
    document.write(i + ", ");
}

document.write("<br> Reverse Counting <br>");
for(var i=10; i>=1; i--){
    document.write(i + ", ");
}

//--------------------QUESTION 07---------------------//

//--------------------QUESTION 08---------------------//
let A = [24, 53, 78, 91, 12];
let largest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

document.write("The largest number in the array is:", largest + "<br><br>");
//--------------------QUESTION 09---------------------//
let B = [24, 53, 78, 91, 12];
let smallest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

document.write("The smallest number in the array is:", smallest + "<br><br>");

//--------------------QUESTION 10---------------------//
for(var i=1; i<=100; i++){
    if(i % 5 === 0){
        document.write(i + ", ");
    }
}