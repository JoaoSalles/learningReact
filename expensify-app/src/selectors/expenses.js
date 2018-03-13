


export default ( expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt < endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort( (a, b)  => {
        if (sortBy === 'date'){
            if (a.createdAt < b.createdAt){
                return -1
            }
            if (a.createdAt > b.createdAt){
                return 1
            } 
            return 0
        }else{
            if (a.amount < b.amount){
                return -1
            }
            if (a.amount > b.amount){
                return 1
            } 
            return 0
        }
    });
}