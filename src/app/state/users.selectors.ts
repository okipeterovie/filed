import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { User } from './../models/user.model';

export const selectUsers = createSelector(
  (state: AppState) => state.users,
  (users: Array<User>) => users
);
