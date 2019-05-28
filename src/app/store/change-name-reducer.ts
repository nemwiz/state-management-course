import {ActionTypes, ChangeUserUnion} from './actions/change-user-name';
import {User} from '../models/user';

export const changeUserReducer = (state: User = {firstName: 'John', lastName: 'Doe'}, action: ChangeUserUnion) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FIRST_NAME:
      return Object.assign({}, state, {firstName: action.payload.firstName});
    case ActionTypes.CHANGE_LAST_NAME:
      return Object.assign({}, state, {lastName: action.payload.lastName});
    default:
      return state;
  }
};
