

const appObject = {
    title: 'Once upon time',
    subtitle: 'English',
    options: []
};


const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    // prvent full page reflesh
    e.preventDefault();

    // point to element that triggered the event
    const option = e.target.elements.option.value;

    if (option){
        appObject.options.push(option)
        e.target.elements.option.value = '';
        render();
    }
};

// does not need e, because it is not a for,
// button does not trigger reflesh
const removeAll = () => {
    appObject.options = []
    render();
};

const onMakeDecision = () => {
    if (appObject.options.length > 0){
        const randomNumber = Math.floor(Math.random() * (appObject.options.length));
        alert(appObject.options[0]);
    }else{
        alert('Empty Array');
    }
};

//  array of jsx need to receive a key
//  react otimizate its updates this way
const render = ()  => {
    const template = (
        <div>
            <h1>Title: {appObject.title}</h1> 
            {appObject.subtitle && <p>Subtitle: {appObject.subtitle}</p>}  
            <p>{(appObject.options && appObject.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <button disabled={appObject.options.length == 0} onClick={onMakeDecision}>What Shoud I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                appObject.options.map( (option) => {
                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

render();
