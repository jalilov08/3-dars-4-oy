/** Darsda qilingan
let b = prompt ("Ismingizni kiriting")
let a = +prompt ("Ozingizda bor pulni qiymatini kiriting.");
let d = 11000.34;
let y = 12354.03;
let plane = d * 500;
let hotel = d * 250;
let museum = y * 120;

let dollar = plane + hotel;
let yevro = museum;
let all = dollar + yevro;

if (a > all) {
  alert("Oq yo'l ");
}
else {
  alert(`${"Ozgina sabr qilish kerak "} ${b} ${"Sizga shuncha summa yetmayapti-"}  ${all - a} `);
}

 */

/** Vazifa (IF)
 * 1--
let a = 2;
if (a > 0) {
  console.log(a++);
} else {
  console.log(a);
}
---------------------------------------
2--
let a = -7;
if (a > 0) {
  console.log(a++);
} else {
  console.log(a-2);
}
-----------------------------------------
3--
let a = 0;
if (a > 0) {
  console.log(a++);
} if (a == 0) {
  console.log(a + 10);
} else {
  console.log(a - 2);
} 
--------------------------------------
4--
let a = 10;
let b = -19;
let c = 8;
let manfiy;

 if (a < b && a < c) {
 small = a;
 }
 else if (b < a && b < c) {
 small = b;
 } 
 else {
 small = c;
 }
 console.log( small);
-------------------------------------------
6--
let a = 54;
let b = 450;
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
---------------------------------------------------
7--
let a = 54;
let b = 450;
if (a < b) {
  console.log(a);
} else {
  console.log(b);
}
----------------------------------------------------------------
8--
let a = 54;
let b = 450;
if (a > b && a <b) {
  console.log(a);
  console.log(b);
} else {
  console.log(b);
  console.log(a);
}

9--
let a = prompt("A sonini kiriting:");
let b = prompt("B sonini kiriting:");
alert(a + b);
--------------------------------------------------------
12--
let a = 10;
let b = 19;
let c = 8;
let small ;

 if (a < b && a < c) {
 small = a;
 } else if (b < a && b < c) {
 small = b;
 } else {
 small = c;
 }
 console.log( small);
--------------------------------------------------------
 14--
 let a = 3;
 let b = 1;
 let c = 7;

if ( a < b ) {
console.log(a);
} else {
console.log(b);
}
if ( b < c) {
console.log(c);
}

 */

/** Boolean
 * 1--
let son = +prompt("Son kiriting men uni bir xonali sondan katta yoki kichikligini aniqlab beraman");
if (son > 0) {
console.log(true);
}
else {
console.log(false);
}
-------------------------------
 2,3---
let number = 5;
number = number % 10;
if (number % 2 == 0) {
console.log(true);
} else {
console.log(false);
}
------------------------------
4---
let a = 8;
let b = 2;
if (a > 2 && b <= 3) {
  console.log(true);
} else {
  console.log(false);
}
------------------------------------
5--
let a = 8;
let b = 2;
if (a >= 0 && b < -2) {
  console.log(true);
} else {
  console.log(false);
}
--------------------------------
6--
let a = 3;
let b = 9;
let c = 7;

if ( a > b ) {
console.log(a);
} else {
console.log(b);
}
if ( b < c) {
console.log(c);
}
-------------------------------------
8--
let a = 7;
let b = 9;

if (a % 2 == 0 && b % 2 ==0) {
console.log("Juft son");
} else {
console.log("Toq son");
}

 */

