const name="hitesh"
const repoCount=50

//console.log(name + repocount + "value"); outdated
//console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);
//string declare

const gamename=new String('hites-hhh')

//console.log(gamename[0]);
//console.log(gamename.__proto__);//prototype in string 

//console.log(gamename.length);
//prtotype(methods and function)
//console.log(gamename.toUpperCase());//original value is not change bc of stack

//console.log(gamename.charAt(2));
//console.log(gamename.indexOf('t'));


const newString=gamename.substring(0,4)
console.log(newString);

const anotherString =gamename.slice(-8,4)
console.log(anotherString);

const one="      hitesh      "
console.log(one);
console.log(one.trim()); //trim trim_start trim_end 

const url="https://hitesh.com/hitesh%20chaudhary" //if we create space in url then browser automatically take %20 
//to improve url we use url.replace()
console.log(url.replace('%20','_'))
console.log(url.includes('sundar'))





