

var appObject = {
    title: 'Once upon time',
    subtitle: 'English',
    options: ['one', 'two']
};

function tamCodition(object) {
    if (appObject.options && appObject.options.length > 0){
        return <p>Here are your options</p>
    } else {
        return <p>No options</p>
    }
}

var template = (
    <div>
        <div>
            <h1>Title: {appObject.title}</h1>
            {appObject.subtitle && <p>Subtitle: {appObject.subtitle}</p>}
            { tamCodition(appObject)}  
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
        </div>
    </div>
);

var user = {
    name: "Salles",
    age: 25,
    location: "Campinas"
};

function getLocation(location)
{
    if (location){
        return <p>Localization: {location}</p>
    }else{
        return <p>Localization: Unknown</p>
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1> 
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);