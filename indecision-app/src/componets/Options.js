import React from 'react';
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 class="widget-header__title">Your Options</h3>
            <button 
            onClick={props.handleRemove}
            className="button button--link"
            >Remove all</button>
        </div>
            { props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
                {
                props.options.map((option) => (
                    <Option 
                    key={option} optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />
            ))}
        </div>
);

export { Options as default}

