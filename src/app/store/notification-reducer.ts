import { MarkAsRead, ActionTypes, NotificationActionUnion } from './actions/notification-actions';
import { NotificationType } from '../models/notificationType';
import { Notification } from '../models/notifications';

export const NotificationReducer = (state: Notification[] = [
  {id: 1, type: NotificationType.MESSAGE},
  {id: 3, type: NotificationType.PRODUCT},
  {id: 4, type: NotificationType.PRODUCT},
  {id: 5, type: NotificationType.MESSAGE},
  {id: 6, type: NotificationType.MESSAGE},
  {id: 7, type: NotificationType.MESSAGE}
],  action: NotificationActionUnion ) => {
  switch (action.type) {
    case ActionTypes.MARK_AS_READ:
        return state.filter(s => s.id !== action.payload.id);
    case ActionTypes.INIT_NOTIFICATIONS:
         return [...action.payload.notifications];
        default:
            return state;
  }
}
