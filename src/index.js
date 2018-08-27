import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// 1. import createStore
import { createStore } from "redux";

// 3. declare reducer which needs to be passed to store
//5. reducers have 2 params: initial state of the reducer and the actions
// reducers listen to every single action
//to act upon the dispatched action, check action type and update the state
const reducer = (state, action) => {
  if (action.type === "changedState") {
    return action.payload.newState;
  }
  return "State";
};

// 2. create the store
const store = createStore(reducer);

//shows state of our store
console.log(store.getState());

//4. create an action
const actiono = {
  type: "changedState",
  payload: {
    newState: "new State"
  }
};

//5.dispath an action
store.dispatch(actiono);

//shows state of our updated store
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
