let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let mycreateddate = new Date(2002, 5, 28);
console.log(mycreateddate.toDateString());

let newdate = new Date(2002, 5, 28, 5, 30);
console.log(newdate.toLocaleString());

let newdate1 = new Date("06-28-2002"); //yy-mm-dd or mm-dd-yy
console.log(newdate1.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(newdate1.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(newdate1.getDate());
console.log(newdate1.getMonth());
console.log(newdate1.getFullYear());
console.log(newdate1.getSeconds());
console.log(newdate1.getMilliseconds());
console.log(newdate1.getMinutes());

newdate1.toLocaleString('default', {
    weekday: "long"
})