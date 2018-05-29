import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { login, clearState } from "./actions/auth"
import { ConnectedRouter } from "react-router-redux";
import { history } from "./store";
import LoginForm from "./components/login";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {

  componentDidMount() {
    console.log("mounted ?")
  }

  render() {
    const { name, hasSuccess, login, clearState } = this.props;
    const obj = { name: "Matt", id: 1 }

    return (
      <div>
        <ConnectedRouter history={history}>
          <div className="App">
            <Switch>
              <Route
                exact path="/"
                render={() => (<div style={{ height: "100%" }}> <LoginForm /> </div> )}
              />
              {/* <Route path="/register" component={Register} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/reset/:token" component={Reset} /> */}
            </Switch>
          </div>
        </ConnectedRouter>
        </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    ...state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      login,
      clearState
    },
    dispatch
  );
};

 export default connect(mapStateToProps, mapDispatchToProps)(App);


 