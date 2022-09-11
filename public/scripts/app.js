'use strict';

// console.log('App.js is running!');

// //JSX - JavaScript XML = What is JSX? JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
// let template = (
//     <div>
//         <h1>Indecision App</h1>
//         <p>This is some Info:</p>
//         <ol>
//             <li>First Iten</li>
//             <li>Second Item</li>
//         </ol>
//     </div>
// );

// //create new templateTwo let JSX expression
// /*
// div
//     h1 -> Olaleke Akbar
//     p -> Age: 33
//     p -> Location: Baltimore
//     Render templateTwo instead of template */

// let user = {
//     name: 'Mohammed',
//     age: 22,
//     location: 'New York'
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location.toUpperCase()}</p>;
//     }
// }

// let templateTwo = (
//     <div>
//         <h1>Name: {user.name ? user.name : 'Anonymous'}</h1>
//         {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

// /* create app object title/subtitle 
//     use title/subtitle is the template
//     tender template
// */

// let book = {
//     title: 'Bolivia',
//     subtitle: 'Days of reconcilitation in El Alto'
// }

// let templateThree = (
//     <div>
//         <h1>{book.title}</h1>
//         <p>{book.subtitle}</p>
//         <ol>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ol>
//     </div>
// )

// //if statements, ternary operators, logical operator
// //only redered the subtitle (and p tag) if subtitle exist - logical operator
// //reender new p tag - if option.length > 0 ''Here are your options" : "No Options"

var app = {
    title: 'Confession',
    subtitle: 'You are my superstar',
    option: ['One', 'Two']
};

function paragraphExist(option) {
    if (option.length > 0) {
        return React.createElement(
            'p',
            null,
            'Here are your options'
        );
    }
}

var templateFour = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Title: ',
        app.title ? app.title : ''
    ),
    React.createElement(
        'p',
        null,
        'Subtitle: ',
        app.subtitle ? app.subtitle : ''
    ),
    app.option.length > 0 ? 'Here are your option ' : 'No options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    console.log('minusOne');
};
var reset = function reset() {
    console.log('reset');
};

var templateEvent = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Counter: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);
//Challenge
//make button "-1" - setup minusOne function and register - log "minueOne"
// Make reset button "reset" - setup reset function - log "reset"

console.log(templateEvent);
var appRoot = document.getElementById('app');
ReactDOM.render(templateEvent, appRoot);
