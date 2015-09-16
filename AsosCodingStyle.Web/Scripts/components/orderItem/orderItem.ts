/// <reference path="../../../../AsosCodingStyle.Data/Scripts/Enums.ts" />
import templateMarkup = require('text!./orderItem.html');
import ko = require('knockout');
import ReasonsModel = require("../../models/reasonsModel");
import OrderModel = require("../../models/orderModel");
import _ = require('lodash');

export class OrderItem {

    private PositiveFeedbackType = 'POSITIVE';
    private ReturnsFeedbackType = 'RETURNS';

    constructor(params: { data: AsosCodingStyle.Data.OrderItem}) {
        this.orderItem = params.data;

        // Local observables for 2 way data binding
        this.feedbackMethod = ko.observable(null);
        this.feedbackTypes = ko.observableArray<AsosCodingStyle.Data.OrderItemFeedbackType>([]);
        this.returnReason = ko.observable<AsosCodingStyle.Data.ReturnReasonType>(null);
        this.otherReturnReasonText = ko.observable(null);

        // Writing the data back to the model as the user interacts with it...
        this.feedbackMethod.subscribe(newValue => {
            if (newValue !== this.ReturnsFeedbackType) {
                OrderModel.instance.orderItemsToReturn.remove(this.orderItem.OrderItemId);
            } else {
                OrderModel.instance.orderItemsToReturn.push(this.orderItem.OrderItemId);
            }
        });
        this.feedbackTypes.subscribe(newValue => this.orderItem.FeedbackTypes = newValue);
        this.returnReason.subscribe(newValue => this.orderItem.Return = { Reason: newValue, ExtraInformation: null });
        this.otherReturnReasonText.subscribe(newValue => this.orderItem.Return.ExtraInformation = newValue);

        // Computeds for the view
        this.isShowPositiveFeedback = ko.pureComputed(this.computeIsShowPositiveFeedback, this);
        this.isShowReturnsFeedback = ko.pureComputed(this.computeIsShowReturnsFeedback, this);
        this.isShowReturnsOtherFeedback = ko.pureComputed(this.computeIsShowReturnsOtherFeedback, this);

        // References to "select list" static data
        this.returnReasons = ReasonsModel.returnReasons;
        this.positiveFeedbackTypes = ReasonsModel.positiveFeedbackTypes;
    }

    getSummary(): string {
        return `Colour: ${this.orderItem.Product.Colour}, Size: ${this.orderItem.Product.Size}, Quantity: ${this.orderItem.Quantity}`;
    }

    selectPositiveFeedback(): void {
        if (this.feedbackMethod() === this.PositiveFeedbackType) {
            this.clearFeedbackMethod();
        } else {
            this.feedbackMethod(this.PositiveFeedbackType);
            this.otherReturnReasonText(null);
            this.returnReason(null);
        }
    }

    selectReturnsFeedback(): void {
        if (this.feedbackMethod() === this.ReturnsFeedbackType) {
            this.clearFeedbackMethod();
        } else {
            this.feedbackMethod(this.ReturnsFeedbackType);
            this.feedbackTypes([]);
        }
    }

    toggleFeedbackType(feedbackType: ReasonsModel.IFeedbackType): void {
        if (this.feedbackTypes.indexOf(feedbackType.value) > -1) {
            this.feedbackTypes.remove(feedbackType.value);
        } else {
            this.feedbackTypes.push(feedbackType.value);
        }
    }

    selectReturnReason(returnReason: ReasonsModel.IReturnReason): void {
        this.returnReason(returnReason.value);
        if (returnReason.value !== AsosCodingStyle.Data.ReturnReasonType.Other) {
            this.otherReturnReasonText(null);
        }
    }

    isFeedbackTypeSelected(feedbackType: ReasonsModel.IFeedbackType): boolean {
        return _.any(this.feedbackTypes(), x => x === feedbackType.value);
    }

    isReturnReasonSelected(returnReason: ReasonsModel.IReturnReason): boolean {
        return this.returnReason() === returnReason.value;
    }

    private computeIsShowPositiveFeedback(): boolean {
        return this.feedbackMethod() === this.PositiveFeedbackType;
    }

    private computeIsShowReturnsFeedback(): boolean {
        return this.feedbackMethod() === this.ReturnsFeedbackType;
    }

    private computeIsShowReturnsOtherFeedback(): boolean {
        return this.returnReason() === AsosCodingStyle.Data.ReturnReasonType.Other;
    }

    private clearFeedbackMethod(): void {
        this.feedbackMethod(null);
        this.feedbackTypes([]);
        this.returnReason(null);
        this.otherReturnReasonText(null);
    }

    orderItem: AsosCodingStyle.Data.OrderItem;
    otherReturnReasonText: KnockoutObservable<string>;
    feedbackMethod: KnockoutObservable<string>;
    isShowPositiveFeedback: KnockoutComputed<boolean>;
    isShowReturnsFeedback: KnockoutComputed<boolean>;
    returnReasons: ReasonsModel.IReturnReason[];
    positiveFeedbackTypes: ReasonsModel.IFeedbackType[];
    isShowReturnsOtherFeedback: KnockoutComputed<boolean>;
    returnReason: KnockoutObservable<AsosCodingStyle.Data.ReturnReasonType>;
    feedbackTypes: KnockoutObservableArray<AsosCodingStyle.Data.OrderItemFeedbackType>;
}

export {OrderItem as viewModel, templateMarkup as template};
