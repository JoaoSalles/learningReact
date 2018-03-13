

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const sortByAmount = (text = '') => ({
    type: 'SET_SORT_AMOUNT',
})

export const sortByData = (text = '') => ({
    type: 'SET_SORT_DATA',
})


export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})


