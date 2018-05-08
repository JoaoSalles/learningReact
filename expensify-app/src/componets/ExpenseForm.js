import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format('MMM/Do/YYYY'));

class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState( () => {
            return {
                description
            }
        })
    }
    onamountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState( () => ({amount}))
        }
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ( {note} ) )
    }
    onDateChange = (created) => {
        const createdAt = created;
        if (createdAt) {
            this.setState( () => ({ createdAt }) )
        }
    }
    onFocusChange = ({focused}) => {
        this.setState( () => ({calenderFocused: focused}) )  
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount){
            this.setState( () => ({ error: "Adicione descricao e valor" }))
        } else {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf(),
                id: this.props.expense ? this.props.expense.id : undefined
            });
            this.setState( () => ({ error: "", description: "", amount: "", note: "", createdAt: moment()}))
        }
    };
    render(){
        return (
            <form  
            className="form"
            onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p> }
                <input type="text" 
                className="text-input"
                placeholder="Descricao" 
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
                />
                <input 
                type="text" 
                className="text-input"
                placeholder="Valor"
                value={this.state.amount}
                onChange={this.onamountChange}
                />
                <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange} 
                focused={this.state.calenderFocused} 
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={(day) => false}
                />
                <textarea placeholder="Adicionar nota (Optinal)"
                className="textarea"
                value={this.state.note}
                onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button" type="submit">Adicinar Despesa</button>
                </div>
            </form>
        );
    }
}


export default ExpenseForm; 