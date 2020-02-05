import React from 'react';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './home/Home.jsx';
import { Header } from './header/Header.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/home' component={Home} />
        // Route List of Characters
      </Switch>
    </Router>
  )
}
  