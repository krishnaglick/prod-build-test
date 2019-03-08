import { RouterStore } from "mobx-react-router";

export class Store {
  public router: RouterStore;
  constructor() {
    this.router = new RouterStore();
  }
}
