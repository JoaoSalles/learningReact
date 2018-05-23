
import moment from 'moment';

const selectDateRange = (expenses) => {
    orderByDate(expenses);
    let dateRange = 0;
    if ( expenses.length > 0 ) {
        let auxEndDate = moment(expenses[expenses.length - 1].createdAt);
        let auxStartDate = moment(expenses[0].createdAt);
        dateRange = auxEndDate.diff(auxStartDate, 'days');
    } 
    return dateRange;
}


const orderByDate = (expenses) => {
    expenses.sort( (a, b)  => {
        if (a.createdAt < b.createdAt){
            return -1;
        }
        if (a.createdAt > b.createdAt){
            return 1;
        } 
        return 0;
    })
};

export default selectDateRange;