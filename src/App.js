import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { login } from "./actions/auth"
import { ConnectedRouter } from "react-router-redux";
import { history } from "./store";


class App extends Component {

  componentDidMount() {
    console.log("mounted ?")
  }

  render() {
    const { name, hasSuccess, login } = this.props;
    const obj = { name: "Matt", id: 1 }

    return (
        <ConnectedRouter history={history}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
              <button onClick={() => login(obj)}>hey</button>
            </header>
              <p className="App-intro">
              {hasSuccess === true && name.name}
              </p>
          </div>
        </ConnectedRouter>
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
      login
    },
    dispatch
  );
};

 export default connect(mapStateToProps, mapDispatchToProps)(App);


 