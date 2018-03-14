import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from './../actions/filters'

const ExpensesListFilter = ( props ) => {
    return (
        <div>
            <input type="text" value={props.filters.text} onChange={ (e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}/>
        <select onChange={ (e) => {
            console.log(e.target.value);
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}


export default connect(mapStateToProps)(ExpensesListFilter);