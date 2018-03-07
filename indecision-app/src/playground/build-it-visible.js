const appRoot = document.getElementById('app');

let togleObject = {
    toggleFlag: false,
    text: 'Show'
}


const toggleP = () => {
    togleObject.toggleFlag = !togleObject.toggleFlag;
    if (togleObject.text == 'Show'){
        togleObject.text = 'Hide';
    }else{
        togleObject.text = 'Show';
    }
    render();
}


const render = ()  => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleP}>{togleObject.text} details</button>
            {togleObject.toggleFlag ? <p>This p is visible</p> : undefined}
        </div>
    );
    ReactDOM.render(template,appRoot);
}

render();