import React from 'react';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './home/Home.jsx';
import Header from './header/Header.jsx';
import List from './list/List.jsx';
import Details from './details/Details.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/characters/:characterId' component={Details} />
        <Route path='/characters' component={List} />
      </Switch>
    </Router>
  )
}
  