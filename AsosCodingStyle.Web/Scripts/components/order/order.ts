import templateMarkup = require('text!./order.html');
import ko = require('knockout');
import OrderModel = require("../../models/orderModel")

export class Order {

    constructor() {
        this.orderItems = OrderModel.instance.order.Items;
        this.isReturningItems = ko.pureComputed(this.computeIsReturningItems, this);
        this.returnSummaryText = ko.pureComputed(this.computeReturnSummaryText, this);
    }

    private computeIsReturningItems(): boolean {
        return OrderModel.instance.orderItemsToReturn().length > 0;
    }

    private computeReturnSummaryText():string {
        return `Returning ${OrderModel.instance.orderItemsToReturn().length} items`;
    }

    orderItems: AsosCodingStyle.Data.OrderItem[];
    isReturningItems: KnockoutComputed<boolean>;
    returnSummaryText: KnockoutComputed<string>;
}

export {Order as viewModel, templateMarkup as template};
