import { Action } from '@ngrx/store';
import { Notification } from 'src/app/models/notifications';

export enum ActionTypes {
  MARK_AS_READ = 'MARK_AS_READ',
  INIT_NOTIFICATIONS = 'INIT_NOTIFICATIONS',
}

export class MarkAsRead implements Action {
  readonly type = ActionTypes.MARK_AS_READ;

  constructor(public payload: { id: number}) {}
}

export class InitNotifications implements Action {
  readonly type = ActionTypes.INIT_NOTIFICATIONS;

  constructor(public payload: { notifications: Notification[]}) {}
}

export type NotificationActionUnion = MarkAsRead | InitNotifications;
