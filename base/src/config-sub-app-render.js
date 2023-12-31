import React from 'react';
import ReactDOM from 'react-dom';

function SubAppViewport(props) {
    const {loading} = props;

    return (
        <>
            {loading ? <h4>Loading...</h4> : null}
            <div id='sub-app-viewport' className={'sub-app-display-container'}/>
        </>
    );
}

function configSubAppRender({loading}) {
    const container = document.getElementById('sub-app-container');
    ReactDOM.render(<SubAppViewport loading={loading}/>, container);
}

export {
    configSubAppRender,
};
