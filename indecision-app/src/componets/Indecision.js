import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
    state = {
        options : [],
        selectedOption: undefined
    }

    handleModalClose = () => {
        this.setState( () => ({selectedOption: undefined}))
    }


    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * (this.state.options.length));
        const selected = this.state.options[randomNumber]
        this.setState( (prevState) => {
            return (
                {selectedOption: selected}
            )
        })
    }

    handleAdd = (option) => {
        if (!option){
            return "Enter a valid value to add";
        } else if (this.state.options.indexOf(option) > -1){
            return 'This options already exists';
        }

        this.setState( (prevState) => ({
            options: [...prevState.options, option]
        }))
    };

    handleRemove = () => {
        // to bring back a empty object{}, it is necessary to wrap it up with ()
        // in case of one line arrow function
        this.setState( () => ({ 
            options : []
        }))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter( (option) => optionToRemove !== option)
        }));
    };

    // only for class component
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState( () => {
                    return (
                        {options}
                    )        
                })
            }
        } catch (e) {
            console.log("Error in data format")
        }

    };
    // only for class component
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json);
        }
    };

    // only for class component
    componentWillUnmount = () => {
        console.log("Component Unmounted!");
    };

    render() {
        const subtitle="Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                    hasOption={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                        options={this.state.options}
                        handleRemove={this.handleRemove}
                        handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                        handleAdd={this.handleAdd}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleModalClose={this.handleModalClose}
                    />
            </div>
        );
    }
}

export default IndecisionApp;