

var template = (
    <div>
        <h1>Indecision App</h1> 
        <p> This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Salles</h1> 
        <p>Age: 25</p>
        <p>Localization: Campinas</p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo,appRoot);