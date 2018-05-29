import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { login } from "./actions/auth"

class App extends Component {

  render() {
    const { name, hasSuccess, login } = this.props;
    const obj = { name: "Matt", id: 1 }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={() => login(obj)}>hey</button>
        </header>
        <p className="App-intro">
          {hasSuccess === true && name.name}
        </p>
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
      login
    },
    dispatch
  );
};

 export default connect(mapStateToProps, mapDispatchToProps)(App);

 