import AppStore from "../stores/AppStore";


import { mailApiEndpoint } from "../config/mail-api-config";

import AuthApi from "./AuthApi";
import UserApi from "./UserApi";





export default class AppApi {
  auth: AuthApi;
  user: UserApi;
  /**
   * ! added by Werner, not fully tested
   * */


 


  constructor(store: AppStore) {
    /**
     * ! added by Werner, not fully tested
     * */

 
    this.auth = new AuthApi(this, store);

    this.user = new UserApi(this, store);
   


}
}
