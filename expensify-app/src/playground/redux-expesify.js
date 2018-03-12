import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


const addExpense = ( {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
    } = {}
) => {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}



// remove expense

const removeExpense =  ({id} = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id: id
    }
};

// edit expense

const editExpense = (id, updates) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
}


// edit filter

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = (text = '') => ({
    type: 'SET_SORT_AMOUNT',
})

const sortByData = (text = '') => ({
    type: 'SET_SORT_DATA',
})


const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})


// remember states does not change state, so we concat do not push
// we can use the spread operation as well
const expensesReducer = (state = [], action) => {
    switch (action.type){
        case 'ADD_EXPENSE': 
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter( (expense) => ( expense.id !== action.id))
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
        default:
            return state;
    }
}

// Filter Reducers

const filterReducer = (state = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined}, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_SORT_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_SORT_DATA':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_SORT_DATA':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                sorstartDatetBy: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                sorstartDatetBy: action.date
            }
        default:
            return state;
    }
}

const store = createStore( 
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

const watch = store.subscribe( () => {
    console.log(store.getState());
})

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 300}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByData());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'audnasdnqwneapsne',
        description: 'January Rent',
        note: 'Tgis was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};