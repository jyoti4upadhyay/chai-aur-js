/*memory are of 2 type stack(primitive)(changes our in copy)and heap(non-primitive)(changes occur in memo directly) */

let myYt="jyotiupadhyay" //stack mai jaayega 

let anothername=myYt
anothername="chaiaur code"
console.log(anothername);
console.log(myYt);//original value change nhi hoti yahan sirf stack mai uski copy save ho jaati hai 


//heap mai store hoga
let userone={
    email:"jyoti@gmail.com",
    upi:"user@ybl"
}
let usertwo=userone // heap se value milegi toh change krne par memo mai change hoga 
// userone and usertwo have same refrence;
usertwo.email="user@gmail.com"

console.log(userone.email);
console.log(usertwo.email);



