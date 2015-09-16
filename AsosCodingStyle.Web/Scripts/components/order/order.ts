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

    private computeReturnSummaryText(): string {
        var numberOfItemsBeingReturned = OrderModel.instance.orderItemsToReturn().length;
        return `Returning ${numberOfItemsBeingReturned} item${numberOfItemsBeingReturned > 1 ? 's' : ''}`;
    }

    orderItems: AsosCodingStyle.Data.OrderItem[];
    isReturningItems: KnockoutComputed<boolean>;
    returnSummaryText: KnockoutComputed<string>;
}

export {Order as viewModel, templateMarkup as template};
