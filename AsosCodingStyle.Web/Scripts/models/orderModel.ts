/// <reference path="../../../AsosCodingStyle.Data/Scripts/TypeLite.Net4.d.ts" />
import ko = require('knockout');
import Order = AsosCodingStyle.Data.Order;
import OrderApi = require("../apis/orderApi");

export class OrderModel {

    constructor() {
        this.notifications = ko.observableArray([]);
        this.orderItemsToReturn = ko.observableArray([]);
        this.orderItemsForFeedback = ko.observableArray([]);
        this.notifications.subscribe(value => this.order.Notifications = value);
    }

    retrieveOrder(orderId: string): Promise<void> {
        return OrderApi.instance.getOrder(orderId).then(o => {
            this.order = o;
            this.notifications(o.Notifications || []);
        });
    }
    
    saveOrder(): Promise<void> {
        return OrderApi.instance.saveOrder(this.order);
    }

    order: Order;
    orderItemsToReturn: KnockoutObservableArray<number>;
    orderItemsForFeedback: KnockoutObservableArray<number>;
    notifications: KnockoutObservableArray<AsosCodingStyle.Data.Notification>;
}


var instance = new OrderModel();
export {instance}