import React from 'react';
import { connect } from 'react-redux';
import { nextPage, prevPage, setPageSize} from './../actions/pagination'




const PaginationComponent = (props) =>{ 

    let setPage5 = () => {
        props.setPageSize(5);
    }

    let setPage10 = () => {
        props.setPageSize(10);
    }

    let setPageAll = () => {
        props.setPageSize(0);
    }


    let pagi5 = props.pageSize === 5 ? "active" : "";
    let pagi10 = props.pageSize === 10 ? "active" : "";
    let pagiAll = props.pageSize === 0 ? "active" : "";

    return (
        <nav className="list-footer">
            <button onClick={props.prev} disabled={(props.pagination <= 1) ||  props.pageSize == 0}><i className="fas fa-angle-double-left"></i></button>
            <div>
                <nav>
                    <button className={pagi5}
                    onClick={setPage5}
                    >5</button>
                    <span>-</span>
                    <button className={pagi10}
                    onClick={setPage10}
                    >10</button>
                    <span>-</span>
                    <button className={pagiAll}
                    onClick={setPageAll}
                    >ALL</button>
                </nav>
            </div>
            <button onClick={props.next} disabled={(props.totalExpense+1 <= props.pagination*props.pageSize) ||  props.pageSize == 0}><i className="fas fa-angle-double-right"></i></button>
        </nav>
    )
}


const mapStateToProps = (state) => {
    return {
        pagination: state.pagination.pagination,
        pageSize: state.pagination.size
    }
}

const mapDispatchToProps = (dispatch) => ({
    next: () => dispatch(nextPage()),
    prev: () => dispatch(prevPage()),
    setPageSize: (size) => dispatch(setPageSize(size)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);