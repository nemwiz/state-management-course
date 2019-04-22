import {Notification} from '../models/notifications';
import {NotificationType} from '../models/notificationType';


export const notifications: Notification[] = [
    {id: 1, type: NotificationType.MESSAGE},
    {id: 3, type: NotificationType.PRODUCT},
    {id: 4, type: NotificationType.PRODUCT},
    {id: 5, type: NotificationType.MESSAGE},
    {id: 6, type: NotificationType.MESSAGE},
    {id: 7, type: NotificationType.MESSAGE},
];
