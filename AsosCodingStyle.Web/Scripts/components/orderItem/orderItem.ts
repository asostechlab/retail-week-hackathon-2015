import templateMarkup = require('text!./orderItem.html');
import ko = require('knockout');
import ReasonsModel = require("../../models/reasonsModel");

export class OrderItem {

    private PositiveFeedbackType = 'POSITIVE';
    private ReturnsFeedbackType = 'RETURNS';

    constructor(params: { data: AsosCodingStyle.Data.OrderItem}) {
        this.orderItem = params.data;
        this.orderReturnsTextualFeedback = ko.observable('');
        
        this.orderReturnsTextualFeedback.subscribe(newValue => this.orderItem.Return.ExtraInformation = newValue);
        this.feedbackType = ko.observable(null);
        this.isShowPositiveFeedback = ko.pureComputed(this.computeIsShowPositiveFeedback, this);
        this.isShowReturnsFeedback = ko.pureComputed(this.computeIsShowReturnsFeedback, this);

        this.returnReasons = ReasonsModel.returnReasons;
        this.feedbackTypes = ReasonsModel.feedbackTypes;
    }

    getSummary(): string {
        return `Colour: ${this.orderItem.Product.Colour}, Size: ${this.orderItem.Product.Size}, Quantity: ${this.orderItem.Quantity}`;
    }

    onSelectPositiveFeedback():void {
        this.feedbackType(this.PositiveFeedbackType);
    }

    onSelectReturnsFeedback(): void {
        this.feedbackType(this.ReturnsFeedbackType);
    }

    private computeIsShowPositiveFeedback(): boolean {
        return this.feedbackType() === this.PositiveFeedbackType;
    }

    private computeIsShowReturnsFeedback(): boolean {
        return this.feedbackType() === this.ReturnsFeedbackType;
    }

    orderItem: AsosCodingStyle.Data.OrderItem;
    orderReturnsTextualFeedback: KnockoutObservable<string>;
    feedbackType: KnockoutObservable<string>;
    isShowPositiveFeedback: KnockoutComputed<boolean>;
    isShowReturnsFeedback: KnockoutComputed<boolean>;
    returnReasons: ReasonsModel.IRefundReason[];
    feedbackTypes: ReasonsModel.IFeedbackType[];
}

export {OrderItem as viewModel, templateMarkup as template};
