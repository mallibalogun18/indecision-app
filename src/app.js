console.log('App.js is running!');

//JSX - JavaScript XML = What is JSX? JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
let template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some Info:</p>
        <ol>
            <li>First Iten</li>
            <li>Second Item</li>
        </ol>
    </div>
);

//create new templateTwo let JSX expression
/*
div
    h1 -> Olaleke Akbar
    p -> Age: 33
    p -> Location: Baltimore
    Render templateTwo instead of template */

let user = {
    name: 'Mohammed',
    age: 22,
    location: 'New York'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location.toUpperCase()}</p>;
    }
}

let templateTwo = (
    <div>
        <h1>Name: {user.name ? user.name : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

/* create app object title/subtitle 
    use title/subtitle is the template
    tender template
*/

let book = {
    title: 'Bolivia',
    subtitle: 'Days of reconcilitation in El Alto'
}

let templateThree = (
    <div>
        <h1>{book.title}</h1>
        <p>{book.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
)

//if statements, ternary operators, logical operator
//only redered the subtitle (and p tag) if subtitle exist - logical operator
//reender new p tag - if option.length > 0 ''Here are your options" : "No Options"


let app = {
    title: 'Confession',
    subtitle: 'You are my superstar',
    option: ['One', 'Two']
};

function paragraphExist(option) {
    if (option.length > 0) {
        return <p>Here are your options</p>
    }
}

let templateFour = (
    <div>
        <h1>Title: {app.title ? app.title : ''}</h1>
        <p>Subtitle: {app.subtitle ? app.subtitle : ''}</p>
        {app.option.length > 0 ? 'Here are your option ' : 'No options'}
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);


let appRoot = document.getElementById('app');
ReactDOM.render(templateFour, appRoot);
