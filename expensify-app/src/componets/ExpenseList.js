import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ChartComponent from './ChartComponent';
import selectExpenses from '../selectors/expenses';
import selectDataset from '../selectors/selectDataset';
import selectDateRange from '../selectors/selectDateRange';
import PaginationComponent from './PaginationComponent';
import { nextPage, prevPage } from './../actions/pagination'
import { startSetPayExpenses } from './../actions/expenses'



class ExpenseList extends React.Component {

    constructor() {
        super();
        this.checkDespesa = this.checkDespesa.bind(this);
    }

    _handleKeyDown(e) {
        if (e.code == "ArrowLeft"){
            if (this.props.pagination.pagination > 1 && this.props.pageSize != 0){
                this.props.prev();
            }
        }

        if (e.code == "ArrowRight"){
            if ( this.props.totalExpense + 1 > this.props.pagination.pagination*this.props.pageSize && this.props.pageSize != 0){
                this.props.next();
            }
        }
    }

    componentWillMount() {
        document.addEventListener("keydown", this._handleKeyDown.bind(this));
    }


    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown.bind(this));
    }

    checkDespesa(id, payed)   {
        this.props.pay(id, payed);
    }

    render() { 
        return (
            <div className="content-conteiner">
            <div className="list-header">
                <div className="show-mobile"> Despesas </div>
                <div className="show-desktop"> Despesa </div>
                <div className="show-desktop"> Valor </div>
            </div>
            <div className="list-body">
                {this.props.expenses.length === 0 ?
                (
                    <div className="list-item list-item--message">
                        <span>Sem Despesas</span>
                    </div>
                ) : ( 
                    this.props.expenses.map( ({id, description, amount, createdAt, payed = false}) => {
                    return (<ExpenseListItem
                    key={id}
                    id={id}
                    description={description}
                    amount={amount}
                    createdAt={createdAt}
                    payed={payed}
                    payExpense={this.checkDespesa}
                    />)
                }))}
            </div>
            <PaginationComponent
            totalExpense={this.props.totalExpense}
            />
            <ChartComponent
            label={this.props.label}
            dataset={this.props.dataset}
            />
            </div>
        )
    }

}



const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    
    const dateRange = selectDateRange(expenses);
    const totalExpense = expenses.length;
    const auxPag = state.pagination.pagination;
    const pageSize = state.pagination.size;
    let expensesSlice;
    if (pageSize == 0){
        expensesSlice = expenses;
    } else {
        expensesSlice = expenses.slice((auxPag - 1)*pageSize, auxPag*pageSize);
    }
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


    return {
        totalExpense: expenses.length,
        pagination: state.pagination,
        expenses: expensesSlice,
        dataset: dataset,
        pageSize: pageSize,
        label: label
    }
}

const mapDispatchToProps = (dispatch) => ({
    pay: (id, payed) => dispatch(startSetPayExpenses(id, payed)),
    next: () => dispatch(nextPage()),
    prev: () => dispatch(prevPage())
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
