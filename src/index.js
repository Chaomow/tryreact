import React from "react";
import ReactDOM from "react-dom";
import Demo from "./Demo";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Reducer";

import "./styles/index.css";

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Demo />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
