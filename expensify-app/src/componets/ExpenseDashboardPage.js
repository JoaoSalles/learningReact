import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpensesListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters />
        This is from my dashboard Component
        <ExpenseList/>
    </div>
);


export default ExpenseDashboardPage;