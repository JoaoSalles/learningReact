import moment from "moment";


export default ( expenses, {text, sortBy, startDate, endDate, note}) => {
    
    return  expenses.filter( (expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        const noteMatch = expense.note.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && ( textMatch || noteMatch) 
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