// There are two types of Datatypes are:=
//1)Primitive Datatype
//2)Non-Primitive Datatype

//***Primitive Datatype***
//1) String
//2) Number
//3) Boolean
//4) Null
//5) Undefined
//6) Symbol
//7) BigInt

const name = "Anwar";
const Age = 21;
const LordsStudent = true;
let outsidetemp = null;
let statename;

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid); //it show output false but id and anotherid is same this is the specality of symbol datatype we can easily use same id for two same things

let BankBalance = 476878417968518n  //BigInt is use for big number after big number just write 'n' at the end of the number then it's called BigInt

//***Non-Primitive Datatype***
//Array
//Object
//Function

const heros = ["IronMan","Dr Stange","Thor"]; //Array will be declare in square brackets

let myobj = {
    name: "Anwar", //whatever you write in curlybrases its called object it may be any sting,number,boolean,& so on
    age: 21,
}


const myFunction = function() {
    console.log("Hyderabadi gamer");
    
}
myFunction()


/* ************************************************************************************ */

let myyoutubename = "NO Channel";
console.log(myyoutubename);

let anothername = myyoutubename;
anothername = "Hyderabadi gamer";

console.log(anothername);

let userOne = {
    email: "yoyo@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email =  "Hyderbadi gamer";
console.log(userOne.email);
console.log(userTwo.email);