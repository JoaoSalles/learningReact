import React from 'react';
import { Link } from 'react-router-dom'


const PortifolioItem = (props) => {
    return (
        <div>
            <h3>Item with id: {props.match.params.id}</h3>
            <Link to='/portifolio'>Go Back</Link>
        </div>
    );
}


export default PortifolioItem;