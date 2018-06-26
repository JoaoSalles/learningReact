

const expensesReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_EXPENSE': 
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter( (expense) => ( expense.id !== action.id))
        case 'PAY_EXPENSE': 
            return state.map( (expense) => {
                if (expense.id == action.id){
                    expense.payed = action.payed
                    return {
                        ...expense
                    }
                } else {
                    return expense;
                }
            });
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if (expense.id == action.id){
                    return {
                        ...expense,
                        // using spread object, the override of objects is way easier
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
}

export default expensesReducer