import { Action } from '@ngrx/store';

export enum ActionTypes {
  CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME',
  CHANGE_LAST_NAME = 'CHANGE_LAST_NAME'
}

export class ChangeFirstName implements Action {
  readonly type = ActionTypes.CHANGE_FIRST_NAME;

  constructor(public payload: { firstName: string}) {}
}

export class ChangeLastName implements Action {
  readonly type = ActionTypes.CHANGE_LAST_NAME;

  constructor(public payload: { lastName: string}) {}
}

export type ChangeUserUnion = ChangeFirstName | ChangeLastName;
