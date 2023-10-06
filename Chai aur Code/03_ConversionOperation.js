// let age = 21

// console.log(typeof age);
// console.log(typeof (age));

// let valueInString = String(age)
// console.log(typeof valueInString);

// let valueInBoolean = Boolean(age)
// console.log(age);
// console.log(typeof valueInBoolean);

// let valueInUndefined = undefined(age)
// console.log(valueInUndefined);
// console.log(typeof valueInUndefined);

/* its did't worked because 'Undefined' is not a funtion*/

// ********************  Operation  ********************

let value = 4
let negValue = -value
// console.log(negValue);
// console.log(typeof negValue);

let str1 = "Rakesh"
let str2 = "Hello,"

let str3 = str2+str1
console.log(str3);

console.log(((3 + 4) * 5) % 3);
console.log(3 + 4 * 5 % 3); //here both the answer is diffrent
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//if string is in first then every number will count as string but if thats in end then only last part is count as string

// console.log(+true);
// console.log(+"");

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2 + 2

//Increment (++)
// The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


//link to study 
// https://tc39.es/ecma262/multipage/abstract-operation,html#sec-type-conversion

// Points to Note

// 1. BigInt values represent numeric values which are too large to be represented by the number primitive.

// 2. Numeric coercion
// There are two numeric types: Number and BigInt. Sometimes the language specifically expects a number or a BigInt (such as Array.prototype.slice(), where the index must be a number); other times, it may tolerate either and perform different operations depending on the operand's type. For strict coercion processes that do not allow implicit conversion from the other type, see number coercion and BigInt coercion.

// Numeric coercion is nearly the same as number coercion, except that BigInts are returned as-is instead of causing a TypeError. Numeric coercion is used by all arithmetic operators, since they are overloaded for both numbers and BigInts. The only exception is unary plus, which always does number coercion.

/* 3. Postfix Increment

let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
*/

/* 4. Prefix Increment

let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
*/

