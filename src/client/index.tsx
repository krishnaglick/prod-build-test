import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import { loadableReady } from "@loadable/component";

import { Provider, trackComponents } from "mobx-react";
import { syncHistoryWithStore } from "mobx-react-router";

import App from "./components/App";

import { Store } from "./stores";

loadableReady(async () => {
  const browserHistory = createBrowserHistory();
  const store = new Store();
  const history = syncHistoryWithStore(browserHistory, store.router);
  trackComponents();

  ReactDOM.hydrate(
    <Provider store={store} {...store}>
      <Router history={history}>
        <React.Fragment>
          <Route component={App} />
        </React.Fragment>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
});
