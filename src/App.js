import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { updateUser, apiRequest } from "./actions/user-actions";
import { bindActionCreators } from "redux";

class App extends Component {
  onUpdateUser = e => {
    e.preventDefault();
    this.props.onUpdateUser(e.target.value);
  };
  componentDidMount() {
    this.props.onApiRequest();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.randomProp}`
  };
};

// const mapActionsToProps = (dispatch, props) => {
//   return bindActionCreators({ onUpdateUser: updateUser }, dispatch);
// };

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
