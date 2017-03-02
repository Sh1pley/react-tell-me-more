import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from './components/Main';
import Home from './components/Home';
import PromptContainer from './containers/PromptContainer'
import './index.css';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path='login' header="Who in the hell are you?" component={PromptContainer}/>
      <Route path='signUp/:email' header="Who in the hell are you?" component={PromptContainer}/>
    </Route>
  </Router>
), document.getElementById('root'))

