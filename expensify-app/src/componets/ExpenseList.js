import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ChartComponent from './ChartComponent';
import selectExpenses from '../selectors/expenses';
import selectDataset from '../selectors/selectDataset';
import selectDateRange from '../selectors/selectDateRange';
import PaginationComponent from './PaginationComponent';

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
        <PaginationComponent/>
        <ChartComponent
        label={props.label}
        dataset={props.dataset}
        />
    </div>
)


const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    const dateRange = selectDateRange(expenses);
    // sortByData
    const dataset = selectDataset(expenses, dateRange);
    let label;
    if (dateRange < 10 ){
        label = "por dia";
    } else {
        if (dateRange < 70) {
            label = "por semana";
        } else {
            label = "por mes";
        }
    }
    const totalExpense = expenses.length
    return {
        expenses: expenses,
        dataset: dataset,
        label: label
    }
}


export default connect(mapStateToProps)(ExpenseList);
