const paginationReducer = (state = {}, action) => {
    switch (action.type){
        case 'INITIALIZE':
            return {
                ...state,
                pagination: 1
            }
        case 'NEXT':
            return {
                ...state,
                pagination: state.pagination + 1
            }
        case 'PREV':
            if (state.pagination - 1 < 1) {
                return {
                    ...state,
                    pagination: 1
                }
            }
            return {
                ...state,
                pagination: state.pagination - 1
            }
        case 'PAGINATION_SIZE':
            return {
                ...state,
                size: action.size
            }
        default:
            return state;
    }
}

export default paginationReducer