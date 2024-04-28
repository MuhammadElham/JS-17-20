// Q#1
// var arr = [];
// arr[0] = [];
// arr[1] = [];
// arr[2] = [];
// console.log(arr);
// Q#2
// var arr = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i].join(" "));
// }
// Q#3
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }
// Q#4
// var table = +prompt("Enter number of table:");
// var length = +prompt("Enter the length of table:");
// var num;
// for (i = 1; i <= length; i++) {
//   num = table * i;
//   document.write(table + " x " + i + " = " + num + "<br>");
// }
// Q#5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// for (i = 0; i < fruits.length; i++) {
//   console.log("Element at index " + i + " is " + fruits[i]);
// }
// Q#6
// document.write("<h1>Counting:-</h1>");
// var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write(count);

// document.write("<h1>Reverse Counting:-</h1>");
// var count = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// document.write(count);

// document.write("<h1>Even:-</h1>");
// var count = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// document.write(count);

// document.write("<h1>Odd:-</h1>");
// var count = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// document.write(count);

// document.write("<h1>Series:-</h1>");
// var count = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
// document.write(count);
// Q#7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var enter = prompt("Welcome to ABC bakery.What do you want to order:");
// var match = false;
// for (i = 0; i < A.length; i++) {
//   if (A[i] == enter) {
//     match = true;
//     console.log(enter + " is available at index " + i + " in our bakery");
//   }
// }
// if (match == false) {
//     console.log("We are sorry. "+enter + " is not available in our bakery");
// }
// Q#8
// var A = [24, 53, 78, 91, 12];
// var largest = A[0];
// for (i = 0; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }
// console.log("Array items = "+A);
// console.log("Largest = " + largest);
// Q#9
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for (i = 0; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }
// console.log("Array items = " + A);
// console.log("Smallest = " + smallest);
// Q#10
// for (i = 1; i <= 100; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }
