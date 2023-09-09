import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from '../containers/home/home';

export const MainAppRootDom = (props) => {
    const {routerBase} = props;

    return (
        <BrowserRouter>
            <div id='main-app-root-dom'>
                <Switch>
                    <Route path={`${routerBase}/home`}>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};
