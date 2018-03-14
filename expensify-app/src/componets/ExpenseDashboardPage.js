import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpensesListFilters'


const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        This is from my dashboard Component
        <ExpenseList/>
    </div>
);


export default ExpenseDashboardPage;