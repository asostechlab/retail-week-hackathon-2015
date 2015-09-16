import templateMarkup = require('text!./order.html');
import ko = require('knockout');
import OrderModel = require("../../models/orderModel")

export class Order {

    constructor() {
        this.hasLoaded = ko.observable(false);
        this.hasSubmitted = ko.observable(false);
        const orderIdToLoad = "1"; // consider picking this up off the URL
        OrderModel.instance.retrieveOrder(orderIdToLoad).then(() => {
            this.orderItems = OrderModel.instance.order.Items;
            this.hasLoaded(true);       
        });
        
        this.isReturningItems = ko.pureComputed(this.computeIsReturningItems, this);
        this.returnSummaryText = ko.pureComputed(this.computeReturnSummaryText, this);
    }

    submitRefund(): void {
        OrderModel.instance.saveOrder().then(() => {
            this.hasSubmitted(true);
        });
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
    hasLoaded: KnockoutObservable<boolean>;
    hasSubmitted: KnockoutObservable<boolean>;
}

export {Order as viewModel, templateMarkup as template};
