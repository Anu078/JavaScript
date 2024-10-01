const score = 100;
console.log(score); // normally 400 will be printed

const balance = new Number(100);
console.log(balance); // here we are telling it must be number by using Number keyword compare to previous one you see output has difference here output will be like [Number: 100]

console.log(balance.toString().length); // it show the length of balanace taht is 3
console.log(typeof('balance')); // by using toString keyword now Number become String and we use length keyword to see the length of the String that is 3
console.log(balance.toFixed(2)); // basically it will use in E-commerse Website 
//customers not able to see the long number that 
//why we use toFixed it will will show only 2 numbers or zero after actual price

const othernumber = 123.8966;
console.log(othernumber.toPrecision(3)); // toPrecision is used to roud off the vales but you have to give correct precision value if they 3 number are given then give three like 123 round of will bhe 24

const hundereds = 1000000;
console.log(hundereds.toLocaleString()); // here we easily count the number because they seperated by comma 
console.log(hundereds.toLocaleString('en-IN')); // indian will use like that

// In js we have max,min values are there and max_safe_integer & min_safe_integer also

/* ***************************** Maths ********************************************* */

console.log(Math.abs(-78)); // by using abs keyword in math we can convert negative value in postive only not postive to negative

console.log(Math.round(4.5)); // normally how we can do in math whatever value like 4.5 greaterthan or equal to .5 then it will 5  other wise irt will be 4
console.log(Math.round(4.4));
console.log(Math.ceil(4.1)); // ceil keyword in maths is used whatever value will be like inrease like .1 then it will directly print 5
console.log(Math.floor(4.9)); // reverse of ceil until you gave 5 then only it will print 5 other wise it will be 4 only like 4.9

console.log(Math.min(86,78,80,83,94,118)); // Min is use to find the minimum value of the given Numbers
console.log(Math.max(86,78,80,83,94,118)); // Max is use to find the maximum value of the given Numbers
console.log(Math.random()); // random is print the value between 0 & 1 
console.log(Math.random()*10); // by multiplying with 10 then values wil 3.65456345 but but value aise bhe hosakte hai 3.034564 to zero after .0 then we do like that see in next one
console.log(Math.random()*10 + 1); // to avoid after .0 then we add + 1 after multiplying is mai bhe kuch problems hore bol ke alag us ekare next mai dekho
console.log((Math.random()*10) + 1); // this will be correct

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);