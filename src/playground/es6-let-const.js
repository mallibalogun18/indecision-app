var nameVar = 'Michael James'
console.log('nameVar: ', nameVar)


let nameLet = 123123;
console.log('nameLet: ', nameLet)

const PI = 3.14;
console.log(PI)

//Block Scoping
//The scope of a var variable is functional scope. The scope of a let variable is block scope. The scope of a const variable is block scope. 

var fullname = 'James Brown'

if (fullname) {
    const firstName = fullname.split(' ')[0]
    console.log(firstName);
}

