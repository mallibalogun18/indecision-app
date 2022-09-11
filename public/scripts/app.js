'use strict';

console.log('New File: es6 arrow function2');

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments)
    return a + b;
};

console.log(add(44, 22));

var user = {
    name: 'Naomi James',
    cities: ['Chicago', 'Portsmouth', 'Bethesda'],
    printPlacedLived: function printPlacedLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacedLived());

//Challenge area

var mulitplier = {
    //numbers - array of numbers
    numbers: [17, 39, 9, 10],
    multiplyby: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyby;
        });
    }
    //multiplyBy = single numbers
    //multiply - return a new array where the numbers have been multiplied

};

console.log(mulitplier.multiply());
