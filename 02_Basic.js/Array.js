//Array

const myarr = [0, 1, 2, 3, 4, 5]; // this is the one type to write array
const myheros = ["Ironman, Hulk, Thor, Dr Strange"]; // this is the another type to write array
const myarr2 = new Array(1, 2, 3, 4); // this is also the another type of array

console.log(myarr[1]);

//Array Mthods

myarr.push(6); // simply we are adding element in the array by using push method
myarr.push(7); // again we nare adding element in the array by using push method
myarr.pop(); // by using pop method we can remove last element from the array dont have to give any parameter it will automaticlly pop last element in the array
myarr.unshift(9); // here by using unshift method we are adding element but it will be added at first of the array because of that we have to shift all the array so it will be waste for large number of array
myarr.shift(); // by using shift we can remove or pop the first element of the array

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));

const newarr = myarr.join()

console.log(myarr);
console.log(typeof newarr);

//slice splice

console.log("A", myarr);

const myn1 = myarr.slice(1,3); // in slice array it will be count upto 2 only 3 will not count

console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,3); // but in splice all 3 will be printed and original array will be manipulated means those 1 to 3 will be pop or rewmove from original array

console.log("c", myarr);
console.log(myn2);

/* ********************************* array-part2 ************************************** */

const Marvels_Heros = ["Ironman", "Hulk", "Thor"];
const Dc_Heros = ["Superman", "Batman", "Blackadam"];

// Marvels_Heros.push(Dc_Heros); // push same as concat but push jo hai apna wo existing array pe push karta 
// console.log(Marvels_Heros);
// console.log(Marvels_Heros[3][1]);

const allHeros = Marvels_Heros.concat(Dc_Heros); // concat ids same as push but concat will retuen a new array
console.log(allHeros);


const all_new_heros = [...Marvels_Heros, ...Dc_Heros]; // its better to use this dont use concat
console.log(all_new_heros);



const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // if see like that array inside array 2 to 3 time then we use flat with infinity to make or combine in one array

const real_another_array = anotherarray.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Anwar")); // here we are checking this Anwar word is present in array or not
console.log(Array.from("Anwar")); // here we are making array by using from keyword
console.log(Array.from({name: "Anwar"})); // apne ku bolna para ta ke keys ya values se ek array bano nai toh ine empty string deta

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));