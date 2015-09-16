import templateMarkup = require('text!./orderItems.html');
import OrderModel = require("../../models/orderModel");

export class OrderItems {
    constructor() {
        this.orderItems = OrderModel.instance.order.Items;
    }

    orderItems: AsosCodingStyle.Data.OrderItem[];
}

export {OrderItems as viewModel, templateMarkup as template};
