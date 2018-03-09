
class IndecisionApp extends React.Component{
    // Instead of use .bind(this) to bind the function with values in props
    // We override the constructor function
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        }
    }

    handlePick(){
        const randomNumber = Math.floor(Math.random() * (this.state.options.length));
        alert(this.state.options[randomNumber]);
    }

    handleAdd(option){
        if (!option){
            return "Enter a valid value to add";
        } else if (this.state.options.indexOf(option) > -1){
            return 'This options already exists';
        }

        this.setState( (prevState) => ({
            options: [...prevState.options, option]
        }))
    }

    handleRemove(){
        // to bring back a empty object{}, it is necessary to wrap it up with ()
        // in case of one line arrow function
        this.setState( () => ({ 
            options : []
        }))
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter( (option) => {
                return !(optionToRemove === option);
            })
        }));
    }

    render() {
        const subtitle="Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                hasOption={this.state.options.length > 0} 
                handlePick={this.handlePick}
                />
                <Options
                options={this.state.options}
                handleRemove={this.handleRemove}
                handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                handleAdd={this.handleAdd}
                />
            </div>
        );
    }
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision"
}




const Action = (props) => {
    return (
        <div>
            <button 
            disabled={!props.hasOption}
            onClick={props.handlePick}
            >
            What Should I do
            </button>
        </div>
    );
}



const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemove}>Remove all</button>
            {
                props.options.map((option) => (
                    <Option 
                    key={option} optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />
            ))}
        </div>
    );
}


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
                >Remove
            </button>
        </div>
    )
}

class AddOption extends  React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.optionValue.value.trim();
        e.target.elements.optionValue.value = "";
        const error = this.props.handleAdd(option)
        
        // when the variable has the same name as the state variable, it can be hidden
        this.setState( () => ({
            error 
            }))

    }
    render(){
        return (
            <div>
            {this.state.error ? this.state.error : undefined}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="optionValue"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}   


// stateless component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));