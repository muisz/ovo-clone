import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Home from './Home';

export default function(props){
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={path} component={Home} />
        </Switch>
    );
}