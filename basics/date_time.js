// dates

let myDate =new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);//object type

// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate=new Date("2023-01-14")//("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now() //by default millisec value
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth()+1);
// `${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})








