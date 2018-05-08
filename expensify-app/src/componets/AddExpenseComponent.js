import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from './../actions/expenses'



const AddExpenseComponent = (props) => (
    <div>
        <div className="page-header">
            <div className="content-conteiner">
                <h1 class="page-header__title">Adicionar Despesa</h1>
            </div>
        </div>
        <div className="content-conteiner">
            <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(startAddExpense(expense));
                props.history.push('/');
            }}
            />
        </div>
    </div>
);


export default connect()(AddExpenseComponent);