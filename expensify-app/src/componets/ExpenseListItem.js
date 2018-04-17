import React from 'react'
import {Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
// <p>{props.description} - {props.amount} - {props.createdAt} </p> 
const ExpenseListItem = ({ id, description, amount, createdAt}) => {
    return (
        <div>
            <h3><Link to={ `/edit/${id}` } style={{ textDecoration: 'none', color: 'black'}}>{description}</Link></h3>
            <p>
            {numeral(amount).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        </div>
    );
}

export default ExpenseListItem;
