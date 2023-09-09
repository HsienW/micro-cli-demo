import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {SubOne} from '../containers/sub-one/sub-one';

export const SubAppRootDom = (props) => {
    const {routerBase} = props;

    return (
        <BrowserRouter>
            <div id='sub-app-root-dom'>
                <Switch>
                    <Route path={`${routerBase}/sub-one`}>
                        <SubOne/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};
