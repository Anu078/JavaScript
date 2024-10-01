const FirstName = "Mohammed Anwar";
const LastName = "Ahmed";

console.log(`My name is ${FirstName} ${LastName}`); //now in modern day everyon use console like that by using tatics

const gamename = new String('Pokemon-Go');

console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.charAt[2]); // output will be k basically we can check the position of our given string alphabate
console.log(gamename.indexOf['e']); // output will be 3 here as well we can check position our given string alphabate
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());

const newstring = gamename.substring(0,4);
console.log(newstring);

const anotherstring = gamename.slice(-9,3);
console.log(anotherstring);

const newstringone = "      Anwar    ";
console.log(newstringone);
console.log(newstringone.trim()); // is use top remove extra spaces

const url = "https://www.google.com";
console.log(url.replace('g','G'));
console.log(url.includes('google')); // by using includes keyword we can check or ask weather a particular word are there or not if there then it print true other wise false

console.log(gamename.split('-'));