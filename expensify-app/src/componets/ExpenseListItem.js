import React from 'react'
import {Link } from 'react-router-dom';

// <p>{props.description} - {props.amount} - {props.createdAt} </p> 
const ExpenseListItem = ({ id, description, amount, createdAt}) => {
    return (
        <div>
            <h3><Link to={ `/edit/${id}` } style={{ textDecoration: 'none', color: 'black'}}>{description}</Link></h3>
            <p>{amount} - {createdAt}</p>
        </div>
    );
}

export default ExpenseListItem;
