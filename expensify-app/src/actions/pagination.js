
const initialize = () => ({
    type: 'INITIALIZE',
})

const nextPage = () => ({
    type: 'NEXT',
})

const prevPage = () => ({
    type: 'PREV',
})

const setPageSize = (size) => ({
    type: 'PAGINATION_SIZE',
    size: size
})

export { initialize, nextPage, prevPage, setPageSize}