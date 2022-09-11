console.log('New File: es6 arrow function2')

// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments)
    return a + b;
}

console.log(add(44, 22))


const user = {
    name: 'Naomi James',
    cities: ['Chicago', 'Portsmouth', 'Bethesda'],
    printPlacedLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacedLived())

//Challenge area

const mulitplier = {
    //numbers - array of numbers
    numbers: [17, 39, 9, 10],
    multiplyby: 4,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyby);
    }
    //multiplyBy = single numbers
    //multiply - return a new array where the numbers have been multiplied

};

console.log(mulitplier.multiply())