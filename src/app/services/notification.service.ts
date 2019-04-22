import {Injectable} from '@angular/core';
import { notifications } from './notifications';
import { NotificationType } from '../models/notificationType';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }

  get productNotificationNumber(): number {
    return notifications.filter(n => n.type === NotificationType.PRODUCT).length;
  }

  get messageNotificationNumber(): number {
    return notifications.filter(n => n.type === NotificationType.MESSAGE).length;
  }

}
