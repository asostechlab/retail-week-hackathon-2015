/// <reference path="../../../AsosCodingStyle.Data/Scripts/TypeLite.Net4.d.ts" />
import ko = require('knockout');
import Order = AsosCodingStyle.Data.Order;
import OrderApi = require("../apis/orderApi");

export class OrderModel {

    // todo: implement the get method with a loading indicator
    constructor() {
        this.order = {
            DateCreated: new Date(),
            Id: "1",
            Items: [

            ]
        };

        this.orderItemsToReturn = ko.observableArray([]);
    }

    retrieveOrder(orderId: string): Promise<void> {
        return OrderApi.instance.getOrder(orderId).then(o => { this.order = o });
    }
    
    order: Order;
    orderItemsToReturn: KnockoutObservableArray<number>;
}

var instance = new OrderModel();
export {instance}