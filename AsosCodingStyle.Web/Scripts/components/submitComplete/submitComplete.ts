import templateMarkup = require('text!./submitComplete.html');
import ko = require('knockout');
import OrderModel = require("../../models/orderModel")

export class SubmitComplete {

    constructor() {
        this.isReturningItems = ko.pureComputed(this.computeIsReturningItems, this);
    }

    private computeIsReturningItems(): boolean {
        return OrderModel.instance.orderItemsToReturn().length > 0;
    }

    isReturningItems: KnockoutComputed<boolean>;
}

export {SubmitComplete as viewModel, templateMarkup as template};
