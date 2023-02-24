import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

{/* <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script> */}


import { allReducers } from "./reducers/allreducers";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
