import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
        /*state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}*/
        />
      </Provider>
    </React.StrictMode>
  );
};
renderEntireTree();
store.subscribe(() => {
  renderEntireTree();
});
reportWebVitals();
