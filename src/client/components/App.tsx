import React, { Component } from "react";
import loadable from "@loadable/component";

import { inject, observer } from "mobx-react";
const Thing = loadable(() => import("./thing"));

@inject("store")
@observer
export default class App extends Component {
  public render() {
    return <Thing />;
  }
}
