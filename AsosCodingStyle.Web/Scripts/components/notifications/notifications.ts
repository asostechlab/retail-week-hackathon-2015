import templateMarkup = require('text!./notifications.html');
import ko = require('knockout');
import $ = require('jquery');
import OrderModel = require("../../models/orderModel")

export class Notification {

    constructor() {
        this.notificationList = ko.pureComputed(this.computeNotificationList, this);

        var signalRConnection = (<any>$).connection;
        var chat = signalRConnection.asosCodingStyleHub;

        chat.client.returnedPackageReceived = notification => this.handleNotification(notification);
        chat.client.SendPaymentMadeNotification = notification => this.handleNotification(notification);

        signalRConnection.hub.start();
    }

    private computeNotificationList(): AsosCodingStyle.Data.Notification[] {
        return OrderModel.instance.notifications();
    }

    private handleNotification(notification): void {
        OrderModel.instance.notifications.push(notification);
    }

    hasNotifications: KnockoutObservable<boolean>;
    notificationList: KnockoutComputed<AsosCodingStyle.Data.Notification[]>;
}

export {Notification as viewModel, templateMarkup as template};  
