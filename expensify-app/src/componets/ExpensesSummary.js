import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseSummary = ({  expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'despesa' : 'despesas';
    const formattedExpenseTotal = numeral(expensesTotal).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-conteiner">
                <h1 className="page-header__title">Mostrando <span>{expenseCount}</span> {expenseWord} totalizando <span>{formattedExpenseTotal}</span></h1>
                
                <div className="page-header__actions">
                    <Link className="button" to="/create">Adicionar Despesa</Link>
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesTotal: getExpensesTotal(visibleExpenses),
        expenseCount: (visibleExpenses).length
    }
}


export default connect(mapStateToProps)(ExpenseSummary);
