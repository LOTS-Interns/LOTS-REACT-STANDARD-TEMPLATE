  //TODO: Check all the stores and clean up
import AuthStore from "./AuthStore";
import UserStore from "./UserStore";
import { MainApp } from "../models/App";
// import InstrumentStore from "./InstrumentStore";









export default class AppStore {
  app: MainApp;

  //! Started by Werner, but not fully tested
  auth = new AuthStore(this);
  user = new UserStore(this);

  //* What I added



;

 


  constructor(app: MainApp) {
    this.app = app;
  }
}
