import React from 'react';
class AddOption extends  React.Component {

    state = {
        error: undefined  
    };
    
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.optionValue.value.trim();
        const error = this.props.handleAdd(option)
        
        // when the variable has the same name as the state variable, it can be hidden
        this.setState( () => ({
            error 
            }))

        // If no error, reset input field
        if (!error){
            e.target.elements.optionValue.value = "";
        }

    }
    render(){
        return (
            <div>
            {this.state.error ? <p className="add-option-error">{this.state.error}</p> : undefined}
            <form className="add-option" onSubmit={this.handleAddOption}>
                <input className="add-option__input" type="text" name="optionValue"/>
                <button className="button">Add Option</button>
            </form>
            </div>
        );
    }
}   


export {AddOption as default}