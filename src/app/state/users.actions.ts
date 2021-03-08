import { createAction, props } from '@ngrx/store';

export const addUser = createAction(
  '[User List] Add User',
  props<{ user }>()
);

export const retrievedUserList = createAction(
  '[User List/API] Retrieve User Success',
  props<{ User }>()
);