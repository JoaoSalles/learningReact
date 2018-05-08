import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpenses, startRemoveExpenses } from './../actions/expenses'



const EditExpenseComponent = (props) => (
    <div>
        <div className="page-header">
            <div className="content-conteiner">
                <h1 class="page-header__title">Editar Despesa</h1>
            </div>
        </div>
        <div className="content-conteiner">
            <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(startEditExpenses(expense.id, expense));  
                props.history.push('/');
            }}
            />
            <button 
            className="button button--secondary"
            onClick={ () => {
                props.dispatch(startRemoveExpenses({id: props.expense.id}));
                props.history.push('/');
            }}>
            Remover Despesa
            </button>
        </div>
    </div>
);

const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find( (expense) => expense.id === props.match.params.id)
    };
}


export default connect(mapStateToProps)(EditExpenseComponent);
