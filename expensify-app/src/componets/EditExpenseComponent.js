import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpenses, startRemoveExpenses } from './../actions/expenses'



const EditExpenseComponent = (props) => (
    <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
            props.dispatch(startEditExpenses(expense.id, expense));  
            props.history.push('/');
        }}
        />
        <button 

        onClick={ () => {
            props.dispatch(startRemoveExpenses({id: props.expense.id}));
            props.history.push('/');
        }}>
        Remove
        </button>
    </div>
);

const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find( (expense) => expense.id === props.match.params.id)
    };
}


export default connect(mapStateToProps)(EditExpenseComponent);
