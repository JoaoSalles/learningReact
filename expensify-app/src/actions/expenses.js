import uuid from 'uuid'
import database from '../firebase/firebase';

const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref('expenses').push(expense).then( (ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        });
    };
};


// remove expense

const removeExpense =  ({id} = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id: id
    }
};


const startRemoveExpenses = ({id} = {}) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).remove().then( () => {
            dispatch(removeExpense({id}));
        });
    }
};
// edit expense

const editExpense = (id, updates) => {
    debugger;
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
}

const startEditExpenses = (id, expenseUpdated) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update({
            amount: expenseUpdated.amount,
            createdAt: expenseUpdated.createdAt,
            description: expenseUpdated.description,
            note: expenseUpdated.note
        }).then( () =>
            {
            dispatch(editExpense(id, expenseUpdated));
        });
    }
}

// set expenses

const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});


const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then( (snapshot) => {
            const expenses = [];
            snapshot.forEach( (childSnapshot) => {
                expenses.push( {
                  id: childSnapshot.key,
                  ...childSnapshot.val()
                });
              });
            dispatch(setExpenses(
                expenses
            ))
        });
    };
}


export {addExpense, removeExpense, editExpense, startAddExpense , setExpenses, startSetExpenses , startRemoveExpenses, startEditExpenses}