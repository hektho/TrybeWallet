import React from "react";
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Wallet from './pages/Wallet';

class App extends React.Component {
  
  render() {
    return (
      <Switch>
        <Route 
          exact
          path='/' 
          component={ Login }
        />
        <Route exact path='/carteira' component={ Wallet } />
      </Switch>

    )
  }
}

const mapStateToProps = (state) => ({
  myFirstState: state.userReducer.state,
});

export default connect(mapStateToProps, null)(App);