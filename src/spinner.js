import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active inline dimmer">
            <div className="ui mini text loader">{props.message || 'Loading'}</div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading....'
}

export default Spinner;