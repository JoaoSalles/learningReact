let count = 0;

const addCount = () => 
{
    count += 1
    renderCounterApp();
}
const subCount = () => 
{
    count -= 1
    renderCounterApp();
}
const resetCount = () => 
{
    count = 0
    renderCounterApp();
}
// class in html is renamed to className
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addCount}>+1</button>
        <button onClick={subCount}>-1</button>
        <button onClick={resetCount}>Reset</button>
    </div>
);

const appRoot = document.getElementById('app');


const renderCounterApp = ()  => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addCount}>+1</button>
            <button onClick={subCount}>-1</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}

renderCounterApp();