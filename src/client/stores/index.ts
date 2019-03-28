import { RouterStore } from "mobx-react-router";
import { observable, action } from "mobx";

export class Store {
    public router: RouterStore;
    @observable
    potato: string[] = [];
    constructor() {
        this.router = new RouterStore();
    }

    @action
    addToPotato(thing: string) {
        this.potato.push(thing);
    }
}
