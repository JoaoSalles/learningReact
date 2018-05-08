import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByData, sortByAmount, setStartDate, setEndDate } from './../actions/filters'
import { DateRangePicker } from 'react-dates';


class ExpensesListFilter extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calendarFocused) => {
        this.setState( () => ({calendarFocused}));
    }
    render() {
        return (
            <div className="content-conteiner">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text"
                        className="text-input"
                        value={this.props.filters.text}
                        onChange={ (e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                        }}/>
                    </div>
                    <div className="input-group__item">
                        <select 
                        className="select" 
                        value={this.props.filters.sortBy} 
                        onChange={ (e) => {
                            if (e.target.value === 'date'){
                                this.props.dispatch(sortByData());
                            }else if (e.target.value === 'amount'){
                                this.props.dispatch(sortByAmount());
                            }
                        }}>
                            <option value="date">Data</option>
                            <option value="amount">Valor</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                        onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                        numberOfMonths={1}
                        isOutsideRange={ () => false}
                        showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}


export default connect(mapStateToProps)(ExpensesListFilter);