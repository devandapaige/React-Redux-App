import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//redux imports needed to create store, provider (with thunk and logger for async) and reducer.
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { stateReducer } from "./reducers/stateReducer";

//create the store with applyMiddleware (with thunk and logger parameter.)
const store = createStore(stateReducer, applyMiddleware(thunk, logger)); //** Logger always needs to be the last parameter in the applyMiddleware function since nothing will run after logger is ran. */
//normal rendering with the Provider surrounding the App Component.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
