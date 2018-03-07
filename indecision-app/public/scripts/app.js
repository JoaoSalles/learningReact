'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        ' This is some info'
    ),
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
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Salles'
    ),
    React.createElement(
        'p',
        null,
        'Age: 25'
    ),
    React.createElement(
        'p',
        null,
        'Localization: Campinas'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);