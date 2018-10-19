import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Home from '../exampleJS/Home'
import Main from '../exampleJS/Main';
import Lists from '../exampleJS/Lists.js';
import PutArtical from '../exampleJS/PutArtical.js';
import AboutMe from '../exampleJS/AboutMe.js';
import Detile from '../exampleJS/Detile.js';


class SystemRoute extends Component {
    componentDidMount() {}
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact component={Home} />
                <Route exact path="/list" component={Lists} />
                <Route exact path="/input" component={PutArtical} />
                <Route exact path="/about" component={AboutMe} />
                <Route exact path="/detile/:id" component={Detile} />
            </Switch>
        )
    }
}

export default SystemRoute;