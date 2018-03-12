import React from 'react';
import { Link} from 'react-router-dom'

const Portifolio = () => (
    <div>
        <h3>My work</h3>
        <p>Check out things that I have done</p>
        <ul>
            <li><Link to='/portifolio/1'>Thing 1</Link></li>
            <li><Link  to='/portifolio/2'>Thing 2</Link></li>
        </ul>
    </div>
);




export default Portifolio