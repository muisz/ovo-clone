import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Home from './Home';
import TopUp from './TopUp/TopUp';

export default function(props){
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={Home} />
            <Route path={`${path}topup`} component={TopUp} />
        </Switch>
    );
}