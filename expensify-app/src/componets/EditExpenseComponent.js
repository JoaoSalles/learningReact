import React from 'react';

const EditExpenseComponent = (props) => (
    <div>
        Editing expense with id of {props.match.params.id}
    </div>
);



export default EditExpenseComponent