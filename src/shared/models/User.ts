import { makeAutoObservable, toJS } from "mobx";
import AppStore from "../stores/AppStore";

export const defaultUser: IUser = {
  uid: "",
  firstName: "",
  lastName: "",
  email: "",
  displayName: "",
  phoneNumber: "",
  emailVerified: false,
  userVerified: false,
  isAnonymous: false,
  photoURL: "",
  createdAt: "",
  lastLoginAt: "",
  jobTitle: null,
  department: "",
  supervisor: "none",
  role: "Employee",
  password: ""
};

export interface IUser {
  uid: string;
  firstName: string | null;
  lastName: string | null;
  displayName: string | null;
  email: string;
  phoneNumber: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  userVerified: boolean;
  isAnonymous: boolean;
  createdAt: string | null;
  lastLoginAt: string | null;
  department: string;
  supervisor: string;
  role: string;
  jobTitle: string | null;
  devUser?: boolean;
  password: string;
}

export default class User {
  private _user: IUser;

  constructor(private store: AppStore, user: IUser) {
    makeAutoObservable(this);
    this._user = user;
  }

  get asJson(): IUser {
    return toJS(this._user);
  }

}
