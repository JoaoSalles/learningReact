import React from 'react';

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            className="button button--link"
            >Remove
        </button>
    </div>
)


export {Option as default}