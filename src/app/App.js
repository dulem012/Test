import React, { Component } from 'react';
import './App.css';
import Header from './partials/header'
import ListViewPage from './pages/listViewPage'
import GridViewPage from './pages/gridViewPage'
import { Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Switch>
          <Route path='/list' component={ListViewPage} />
          <Route path='/grid' component={GridViewPage} />
          <Route path='*' render={() => (<Redirect to={'/list'} />)} />
        </Switch>
    );
  }
}

export default App;
