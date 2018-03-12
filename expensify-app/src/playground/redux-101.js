import { createStore } from 'redux'

// const incrementCount = ({ incrementBy = 1}) => {
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     };
// }

const incrementCount = ({ incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    };
}


const decrementCount = ( {decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    };
}

const setCount = ( {count} ) => {
    return {
        type: 'SET',
        count
    }
};


const resetCount = () => {
    return {
        type: 'RESET'
    }
}

// 
// Reducers
// 1. Reducers are pure functions, pure functions does not deal with things outside it scope, just it input and itown scope block
// 2. Never change state or action

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: (action.count || state.count)
            }
        default:
            return state
    }
}

const store = createStore(countReducer);

// sent a function which will be called everytime the store changes
const watching = store.subscribe( () => {
    console.log(store.getState());
});

// creating action and sending it to store, type is required bu we can add other variables
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy : 5
// });
store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

// remove the watching function
// watching();

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101}));
