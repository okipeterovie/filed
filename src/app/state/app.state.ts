import { User } from './../models/user.model';

export interface AppState {
  users: ReadonlyArray<User>;
  usercollection: ReadonlyArray<string>;
}