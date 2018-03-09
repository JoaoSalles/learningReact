import React from 'react';

const Action = (props) => (
        <div>
            <button 
            disabled={!props.hasOption}
            onClick={props.handlePick}
            className="big-button"
            >
            What Should I do
            </button>
        </div>
    )

export {Action as default}