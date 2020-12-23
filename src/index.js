import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";
import { Provider } from "react-redux";

import { connect } from "react-redux";
import { filterByGroup } from "./actions";

const mapStateToProps = (state) => {
  return {
    group: state.group, // (1)
  };
};
const mapDispatchToProps = { filterByGroup }; // (2)

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App); // (3)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
