import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div className="content-conteiner">
        <div className="list-header">
            <div className="show-mobile"> Despesas </div>
            <div className="show-desktop"> Despesa </div>
            <div className="show-desktop"> Valor </div>
        </div>
        <div className="list-body">
            {props.expenses.length === 0 ?
            (
                <div className="list-item list-item--message">
                    <span>Sem Despesas</span>
                </div>
            ) : ( 
                props.expenses.map( ({id, description, amount, createdAt}) => {
                return (<ExpenseListItem
                key={id}
                id={id}
                description={description}
                amount={amount}
                createdAt={createdAt}
                />)
            }))}
        </div>
    </div>
)


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}


export default connect(mapStateToProps)(ExpenseList);
