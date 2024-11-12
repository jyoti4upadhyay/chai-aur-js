//console.log(2>1);
//console.log((1!=2));

//console.log("2">1);//automatically converted into number
//console.log("02">1);// comparison bw diff datatype that'swhy we use typescript

//console.log(null>0);
//console.log(null==0);
//console.log(null>=0); 
/* null is not equal or greater than zero but issue created bc both have diff datatype
equality check == and comparison ><>=<= work differently
comparison convert null to an no,treating it as 0,
that's why null>=0 is true and null>0 is false */

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// ===

console.log("2"==2); //conversion occur
console.log("2"===2);//no conversion but also compare datatype


    


