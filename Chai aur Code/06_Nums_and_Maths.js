//  const score = 200
// console.log(score);

//  const balance = new Number(200)
//  console.log(balance);

//  console.log(balance.toString().length);
//  console.log(balance.toFixed(2));

//  const otherNumbr = 1123.8999
//  console.log(otherNumbr.toPrecision(4));

//  const hundreds = 1000000
//  console.log(hundreds.toLocaleString('en-IN'))

 //******************MATHS**********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.random());
// console.log(Math.random() *10 );
// console.log((Math.random()*10)+1);
// console.log(Math.ceil(Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

// need a output where output number is above than 10 and lower than 20, its shouldn't return the 0 and the number shoulf return as a single digit floor value.

console.log(Math.floor(Math.random()* 10 + (max - min + 1)));
  //OR
console.log(Math.floor(Math.random() * (max - min - 1)) + min);

// the diffrence betn both of code is in the first code i used "*10" for 