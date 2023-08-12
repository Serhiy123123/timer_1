// function isIsogram(str) {
//   for (let i = 0; i < str.length; i++) {
//     console.log(str.split(str[i].length - 1 > 1) ? false : true);
//   }
// }
// isIsogram("moose");

// if(str === ''){

// }

// function isIsogram(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i]) console.log(true);

//     str[i] = 1;
//   }
//   console.log(false);
// }

// isIsogram("Dermatoglyphics");

// function checkDup(s) {
//   let map = {};
//   for (var i = 0; i < s.length; i++) {
//     if (map[s[i]]) return true;
//     map[s[i]] = 1;
//   }
//   return false;
// }
// let str = "супер разработчик";

// console.log(str, checkDup(str));

// new Set
// const nazar = [63, 12, 11, 8, 10];

// function sumArray(array) {
//   console.log(array.sort((a, b, ) => a - b ));
// }
// sumArray(nazar);

// function sumArray(array) {
//   array.sort((a, b) => a - b);

//   array.pop();
//   array.shift();

//   console.log(array.reduce((a, b) => a + b));
// }
// sumArray(nazar);

// let number = 25;
// let binaryString = number.toString(16);

// console.log(binaryString); // Виведе: "11001"

// function abbrevName(name) {
//   name.toUpperCase();
//   let c = name.split(" ");

//   let k = c[1];

//   return k.charAt(0);
// }

// console.log(abbrevName("Sam Harris"));

// function abbrevName(name) {
//   name.toUpperCase();
//   let c = name.split(" ");
//   return `${c[0].charAt(0)}.${c[1].charAt(0)}`;
// }

// console.log(abbrevName("Sam Harris"));

// function oddOrEven(array) {
//   return array.lenght === 0 ? "even" : array.reduce((a, b) => a + b) % 2 !== 0 ? "odd" : "even";
// }
// console.log(oddOrEven([]));

// let x = [];

// console.log((x = false));
////////////////////////////////////////////////////////////////////////////
// "use strict";
let year = 2023;
let old = 19;
let date = new Date(`12 17 ${year.toString()} 00:00:00`);
console.log(date);
export function timer() {
  let timeNow = new Date();
  let gap = date - timeNow;

  let month = Math.floor(gap / (1000 * 60 * 60 * 24 * 31));
  let days = Math.floor(gap / (1000 * 60 * 60 * 24)) % 31;
  let hours = Math.floor(gap / (1000 * 60 * 60)) % 24;
  let minutes = Math.floor(gap / (1000 * 60)) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  if (gap < 0) {
    date.setFullYear(date.getFullYear() + 1);
    old += 1;
    // month += 12;
    // days += 31;
    // hours += 24;
    // minutes += 60;
    // seconds += 60;
  } else {
    // old += 1;
  }

  document.getElementById("month").innerText = month + " Month";
  document.getElementById("d").innerText = days + " Days";
  document.getElementById("h").innerText = hours + " Hours";
  document.getElementById("m").innerText = minutes + " Minutes";
  document.getElementById("s").innerText = seconds + " Seconds";
  document.getElementById("old").innerText = old + " Years";
}

setInterval(timer, 1000);

// console.log(timer < 1);

////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".x");

year[0];
