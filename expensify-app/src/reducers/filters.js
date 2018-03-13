

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
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}


export default filterReducer