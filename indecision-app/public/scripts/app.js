'use strict';

var appObject = {
    title: 'Once upon time',
    subtitle: 'English',
    options: ['one', 'two']
};

function tamCodition(object) {
    if (appObject.options && appObject.options.length > 0) {
        return React.createElement(
            'p',
            null,
            'Here are your options'
        );
    } else {
        return React.createElement(
            'p',
            null,
            'No options'
        );
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Title: ',
            appObject.title
        ),
        appObject.subtitle && React.createElement(
            'p',
            null,
            'Subtitle: ',
            appObject.subtitle
        ),
        tamCodition(appObject),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
        )
    )
);

var user = {
    name: "Salles",
    age: 25,
    location: "Campinas"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Localization: ',
            location
        );
    } else {
        return React.createElement(
            'p',
            null,
            'Localization: Unknown'
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
