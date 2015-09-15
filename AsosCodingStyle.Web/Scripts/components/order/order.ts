import templateMarkup = require('text!./order.html');
import ko = require('knockout');
import OrderModel = require("../../models/orderModel")

export class Order {

    constructor() {
        this.orderItems = OrderModel.instance.order.Items;
        this.returnSummaryText = ko.pureComputed(this.computeReturnSummaryText, this);
    }

    private computeReturnSummaryText():string {
        return '';
    }

    orderItems: AsosCodingStyle.Data.OrderItem[];
    returnSummaryText: KnockoutComputed<string>;
}

export {Order as viewModel, templateMarkup as template};
