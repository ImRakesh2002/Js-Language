const name = "Rakesh"
const age = 21

console.log(`Hi my name is ${name} and I'm ${age} years old.`);
// here we use string interpolation method.

const gameName = new String('Far Cry7')
//its another way to write string.

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('C'));
console.log(gameName.toLowerCase())
console.log(gameName);

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Rakesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rakesh.com/rakesh%12panda"
console.log(url.replace('%12','-'));

console.log(url.includes('Rajesh'));

console.log(gameName.split(" "));

const toLowerCase = new String('S')
console.log(toLowerCase.toLowerCase()) 