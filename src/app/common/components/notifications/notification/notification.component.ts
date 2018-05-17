import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Notification } from 'models/notification.model';
import {
  notificationActionsEnum, notificationTypesEnum,
  notificationUserTypesEnum
} from 'models/enum/notifications.enum';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() notification: Notification;
  @Input() notificationUserTypesEnum: notificationUserTypesEnum;
  @Input() notificationTypesEnum: notificationTypesEnum;
  @Input() notificationActionsEnum: notificationActionsEnum;
  @Output() onDismissNotification: EventEmitter<Notification> = new EventEmitter();

  dismissNotification() {
    this.onDismissNotification.emit(this.notification);
  }

  performNotificationAction(notificationAction) {
      return this.dismissNotification();
  }
}
