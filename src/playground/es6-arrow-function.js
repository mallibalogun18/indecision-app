// //ES5 function
// const square = function (x) {
//     return x * x;
// };

// console.log(square(8))

// //ES6 function
// const cube = (x) => square(x)

// console.log(cube(9))


//CHALLENGE
/**getFirstName() 
 * create regular arrow function
 * create arrow function using shorthand syntax
*/

function getfirstName(fullname) {
    return fullname.split(" ")[0]
}

console.log(getfirstName("Mohammed Allibalogun"))


const arrowFirstName = (fullname) => fullname.split(" ")[0]
console.log(arrowFirstName("James Brown"))