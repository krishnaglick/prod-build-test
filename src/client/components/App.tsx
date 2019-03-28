import React, { Component } from "react";
import loadable from "@loadable/component";

import { inject, observer } from "mobx-react";
import { Store } from "../stores";
const Thing = loadable(() => import("./thing"));

interface AppProps {
    store: Store;
}

@inject("store")
@observer
export default class App extends Component<AppProps> {
    componentDidMount() {
        setInterval(() => this.props.store.addToPotato(Date.now().toString()), 100);
    }
    public render() {
        return (
            <React.Suspense fallback={<div>Loading</div>}>
                <Thing potato={this.props.store.potato} />
            </React.Suspense>
        );
    }
}
