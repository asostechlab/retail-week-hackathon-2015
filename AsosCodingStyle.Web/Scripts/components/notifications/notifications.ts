import templateMarkup = require('text!./notifications.html');
import ko = require('knockout');
import $ = require('jquery');
import OrderModel = require("../../models/orderModel")

export class Notification {

    constructor() {
        this.hasNotifications = ko.pureComputed(this.computeHasNotifications, this);
        this.notificationList = ko.pureComputed(this.computeNotificationList, this);

        let signalRConnection = (<any>$).connection;

        var chat = signalRConnection.asosCodingStyleHub;

        chat.client.returnedPackageReceived = notification => {
            console.log(notification);
            OrderModel.instance.addNotification(notification);
        };

        chat.client.SendPaymentMadeNotification = notification => {
            console.log(notification);
            OrderModel.instance.addNotification(notification);
        };

        signalRConnection.hub.start();

    }

    private computeHasNotifications(): boolean {
        return OrderModel.instance.notifications().length > 0;
    }

    private computeNotificationList(): AsosCodingStyle.Data.Notification[] {
        return OrderModel.instance.notifications();
    }

    hasNotifications: KnockoutObservable<boolean>;
    notificationList: KnockoutComputed<AsosCodingStyle.Data.Notification[]>;
}

export {Notification as viewModel, templateMarkup as template};  
