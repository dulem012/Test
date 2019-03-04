import React, { Component, Fragment } from 'react';
import './App.css';
import ListViewPage from './pages/listViewPage';
import GridViewPage from './pages/gridViewPage';
import MapViewPage from './pages/mapViewPage';
import Header from './partials/header';
import Loader from './pages/loader/loader'
import { Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import { connect } from 'react-redux';
require('dotenv').config();

class App extends Component {
  render() {
    const {listOfOffices} = this.props
    return (
        <HashRouter>
          <Fragment>
            <Header />
          {listOfOffices.length === 0 ? <Loader /> :
              <Switch>
                <Route path='/list' component={ListViewPage} />
                <Route path='/grid' component={GridViewPage} />
                <Route path='/map'  component={MapViewPage} />
                <Route path='*' render={() => (<Redirect to={'/list'} />)} />
              </Switch>
          }
            </Fragment>
          </HashRouter>
    );
  }
}

const mapStateToProps = (state) => ({ ...state })

export default connect(mapStateToProps)(App);
