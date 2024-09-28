/* *******************************conversions*************************************** */

let name = "Anwar";
console.log(typeof name);
let ValueInNumber = Number(name);
console.log(ValueInNumber); //it convert in number but we dont have number we have string that why they show NaN(Not an Number)
console.log(typeof ValueInNumber); // String converted into Number

let age = 21;
console.log(typeof age);
let ValueInString = String(age);
console.log(ValueInString); // its show 21 
console.log(typeof ValueInString); // Number Converted into String

let ValueInFalse = 0; // In Boolean 0 => false , 1 => true
console.log(typeof ValueInFalse); 
let ValueInBoolean = Boolean(ValueInFalse);
console.log(ValueInBoolean); // Number convert into Boolean
console.log(typeof ValueInBoolean);

let ValueInTrue = 1; // In Boolean 0 => false , 1 => true
console.log(typeof ValueInTrue); 
let ValueInBoolean1 = Boolean(ValueInTrue);
console.log(ValueInBoolean1); // Number convert into Boolean
console.log(typeof ValueInBoolean1);

let accountName = "Anwar"; // "Anwar or write anything in coats" when you convert this in Boolean then it will true
console.log(typeof accountName);
let valueinboolean = Boolean(accountName);
console.log(valueinboolean);
console.log(typeof valueinboolean);

let accountpassword = ""; // "" when you convert this empty coats in Boolean then it will false
console.log(typeof accountpassword);
let passwordinboolean = Boolean(accountpassword);
console.log(passwordinboolean);
console.log(typeof passwordinboolean);

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0
// 1 => true , 0 => false
// "Anwar" => true , "" => false


/* *******************************operations*************************************** */

let value = 78;
let negvalue = -value;
console.log(negvalue);
console.log(typeof negvalue);

let str1 = "Hyderabadi";
let str2 = " gamer";
let str3 = str1 + str2;
console.log(str3);
console.log(typeof str3);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2);
console.log(2 / 2);
console.log(2 % 2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(1 + "2" + 2);

let gamecounter = 100;
gamecounter++;
console.log(gamecounter);

let gamecounter1 = 100;
++gamecounter;
console.log(gamecounter1);