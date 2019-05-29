import { observable, computed, action } from 'mobx-angular';
import { NotificationType } from '../models/notificationType';
import { Notification } from '../models/notifications';
import { notifications } from '../services/notifications';


export class NotificationStore{
    @observable notifications: Notification[];

    @computed
    get productNotifications(): Notification[] {
        return this.notifications.filter(n => n.type === NotificationType.PRODUCT);
    }

    @computed
    get messageNotifications(): Notification[] {
        return this.notifications.filter(n => n.type === NotificationType.MESSAGE);
    }

    @computed
    get allNotifications(): Notification[] {
        return this.notifications;
    }

    @action
    loadNotifications(){
        // or inject service and do api call
        this.notifications = notifications;
    }
    
    @action
    removeNotification(notificationId: number) {
        const index = this.notifications.indexOf(this.notifications.find(n => n.id === notificationId));
        if (index > -1) {
            this.notifications.splice(index, 1);
        }
      }
}