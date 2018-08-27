import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// 1. import createStore
//6. import combineReducers for passing multiple reducers as a single one
import { combineReducers, createStore } from "redux";
//13. import providers to give app access to store
import { Provider } from "react-redux";

import productsReducer from "./reducers/products-reducer";
import userReducer from "./reducers/user-reducer";

// 3. declare reducer which needs to be passed to store
//5. reducers have 2 params: initial state of the reducer and the actions
// reducers listen to every single action
//to act upon the dispatched action, check action type and update the state
// const reducer = (state, action) => {
// if(action.type === 'changedState'){
//  return action.payload.newState;
//}
//   return state;
// };

//7. Set up a new reduer for produts
// const productsReducer = (state = [], action) => {
//   return state;
// };

//8. Set up a new reduer for user
// 12. switch statements are default for reducers
// const userReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case "updateUser":
//       return payload;
//   }
//   return state;
// };

//9.Combine both reducers
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});
// 2. create the store
//10. Set initial state by passing another param
const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Michael"
  },
  window.devToolsExtension && window.devToolsExtension()
);

//shows state of our store
// console.log(store.getState());

//4. create an action
// const actiono = {
//   type: "changedState",
//   payload: {
//     newState: "new State"
//   }
// };

//11. Create new action to update user
// const updateUserAction = {
//   type: "updateUser",
//   payload: {
//     user: "John"
//   }
// };

//5.dispatch an action
// store.dispatch(actiono);
//12.dispatch user action
// store.dispatch(updateUserAction);

//shows state of our updated store
console.log(store.getState());
//14. wrap
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
