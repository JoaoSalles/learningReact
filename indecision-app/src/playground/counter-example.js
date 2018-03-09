// in setState, you just declare the variables that you want to change
// prevState can have another name
// this.state should be the name in constructor

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: props.count
        };
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne(){
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne(){
        // using prevState prevent async problems. concurrence
        this.setState( (prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset(){
        this.setState( () => {
            return {
                count: 0
            }
        });
    }
    render(){
        return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
        );
    }
}

Counter.defaultProps = {
    count : 0
}

ReactDOM.render(<Counter/>, document.getElementById('app'));


// let count = 0;

// const addCount = () => 
// {
//     co
//     count = 0
//     renderCounterApp();
// }
// // class in html is renamed to className
// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addCount}>+1</button>
//         <button onClick={subCount}>-1</button>
//         <button onClick={resetCount}>Reset</button>
//     </div>
// );

// const appRoot = document.getElementById('app');


// const renderCounterApp = ()  => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addCount}>+1</button>
//             <button onClick={subCount}>-1</button>
//             <button onClick={resetCount}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// }

// renderCounterApp();unt = 0
//     renderCounterApp();
// }
// // class in html is renamed to className
// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addCount}>+1</button>
//         <button onClick={subCount}>-1</button>
//         <button onClick={resetCount}>Reset</button>
//     </div>
// );

// const appRoot = document.getElementById('app');


// const renderCounterApp = ()  => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addCount}>+1</button>
//             <button onClick={subCount}>-1</button>
//             <button onClick={resetCount}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// }

// renderCounterApp();

