import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "Router";
import { persistedStore, store } from "redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
