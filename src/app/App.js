import React, { Component } from 'react';
import './App.css';
import ListViewPage from './pages/listViewPage'
import GridViewPage from './pages/gridViewPage'
import MapViewPage from './pages/mapViewPage'
import { Switch, Route, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Switch>
          <Route path='/list' component={ListViewPage} />
          <Route path='/grid' component={GridViewPage} />
          <Route path='/map' component={MapViewPage} />
          <Route path='*' render={() => (<Redirect to={'/list'} />)} />
        </Switch>
    );
  }
}

export default App;
