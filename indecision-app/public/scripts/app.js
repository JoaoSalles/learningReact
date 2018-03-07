'use strict';

var appRoot = document.getElementById('app');

var togleObject = {
    toggleFlag: false,
    text: 'Show'
};

var toggleP = function toggleP() {
    togleObject.toggleFlag = !togleObject.toggleFlag;
    if (togleObject.text == 'Show') {
        togleObject.text = 'Hide';
    } else {
        togleObject.text = 'Show';
    }
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleP },
            togleObject.text,
            ' details'
        ),
        togleObject.toggleFlag ? React.createElement(
            'p',
            null,
            'This p is visible'
        ) : undefined
    );
    ReactDOM.render(template, appRoot);
};

render();
