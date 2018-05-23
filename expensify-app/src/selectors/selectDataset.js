
import moment from 'moment';

const selectDataset = (expenses, dateRange) => {
    orderByDate(expenses);
    if ( expenses.length === 0 ) {
        return expenses;
    }
    if (dateRange < 10 ) {
        return groupByDay(expenses);
    } else {
        if (dateRange < 70) {
            return groupByWeek(expenses);
        } else {
            return groupByMonth(expenses);
        }
    }
}


const groupByMonth = (expenses) => {
    return expenses.reduce(function (groupedExpense, expense) {
        if ("mes: " + (moment(expense.createdAt).month() + 1) in groupedExpense) {
            groupedExpense["mes: " + (moment(expense.createdAt).month() + 1)] += expense.amount;
        } else {
            groupedExpense["mes: " + (moment(expense.createdAt).month() + 1)] = expense.amount;
        }
        return groupedExpense;
    }, {});
}

const groupByWeek = (expenses) => {
    return expenses.reduce(function (groupedExpense, expense) {
        if ("semana iniciada em: " +  moment(expense.createdAt).startOf('week').format('l') in groupedExpense) {
            groupedExpense["semana iniciada em: " + moment(expense.createdAt).startOf('week').format('l')] += expense.amount;
        } else {
            groupedExpense["semana iniciada em: " + moment(expense.createdAt).startOf('week').format('l')] = expense.amount;
        }
        return groupedExpense;
    }, {});
}


const groupByDay = (expenses) => {
    return expenses.reduce(function (groupedExpense, expense) {
        if (moment(expense.createdAt).format('DD/MM/YY') in groupedExpense) {
            groupedExpense[moment(expense.createdAt).format('DD/MM/YY')] += expense.amount;
        } else {
            groupedExpense[moment(expense.createdAt).format('DD/MM/YY')] = expense.amount;
        }
        return groupedExpense;
    }, {});
}



const orderByDate = (expenses) => {
    expenses.sort( (a, b)  => {
        if (a.createdAt < b.createdAt){
            return -1;
        }
        if (a.createdAt > b.createdAt){
            return 1;
        } 
        return 0;
    })
};

export default selectDataset;