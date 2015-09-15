import templateMarkup = require('text!./orderItem.html');
import ko = require('knockout');

export class OrderItem {

    constructor(params: { data: AsosCodingStyle.Data.OrderItem}) {
        this.orderItem = params.data;
        this.orderReturnsTextualFeedback = ko.observable('');
        // todo: update this once Scott has the new properties...
        this.orderReturnsTextualFeedback.subscribe(newValue => this.orderItem.OtherReturnsFeedback = newValue);


    }

    getSummary(): string {
        return `Colour: ${this.orderItem.Product.Colour}, Size: ${this.orderItem.Product.Size}, Quantity: ${this.orderItem.Quantity}`;
    }

    computeIsShowPositiveFeedback
    orderItem: AsosCodingStyle.Data.OrderItem;
    orderReturnsTextualFeedback: KnockoutObservable<string>;
}

export {OrderItem as viewModel, templateMarkup as template};
