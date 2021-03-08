import { createReducer, on, Action } from '@ngrx/store';

import { addUser, retrievedUserList } from './users.actions';
import { User } from './../models/user.model';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(retrievedUserList, (state, { User }) => [...User]),
  on(addUser, (state, { user }) => {
    if (state.indexOf(user) > -1) return state;
    return [...state, user];
  })
);