import React from 'react'
import {Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({ id, description, amount, createdAt, payExpense, payed = false}) => {
    
    const payExpenseCheck = function(e){
        e.stopPropagation();
            payExpense(id, !payed);
    };
    
    return (
        <Link
        className={"list-item "  + (payed ? 'payed' : '')}
        to={ `/edit/${id}` } style={{ textDecoration: 'none', color: 'black'}}
        >
            <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format('DD/MM/YY')}</span>
            </div>
            <div>
                <h3 className="list-item__data">
                    {numeral(amount).format('$0,0.00')}
                </h3>
                <label class="switch">
                    <input type="checkbox" onClick={payExpenseCheck} checked={payed}/>
                    <span class="slider round" onClick={payExpenseCheck} checked={payed}></span>
                </label>
            </div>
        </Link>
    );
}

export default ExpenseListItem;
