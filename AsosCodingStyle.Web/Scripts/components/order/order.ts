import templateMarkup = require('text!./order.html');
import ko = require('knockout');
import OrderModel = require("../../models/orderModel")
import ReturnsMethodModel = require("../../models/returnsMethodModel");

export class Order {

    constructor() {
        this.isLoading = ko.observable(true);
        this.hasSubmitted = ko.observable(false);
        this.isSubmitting = ko.observable(false);
        const orderIdToLoad = "1"; // consider picking this up off the URL
        OrderModel.instance.retrieveOrder(orderIdToLoad).then(() => {
            this.isLoading(false);
        });

        this.isShowOrderItems = ko.pureComputed(this.computeIsShowOrderItems, this);
        this.isReturningItems = ko.pureComputed(this.computeIsReturningItems, this);
        this.returnSummaryText = ko.pureComputed(this.computeReturnSummaryText, this);
        this.isShowSubmitButton = ko.pureComputed(this.computeIsShowSubmitButton, this);
        this.hasSelectedReturnsMethod = ko.pureComputed(this.computeHasSelectedReturnsMethod, this);
    }

    submit(): void {
        this.isSubmitting(true);
        OrderModel.instance.saveOrder().then(() => {
            this.isSubmitting(false);
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

    private computeIsShowOrderItems(): boolean {
        return this.isLoading() === false &&
            this.isSubmitting() === false &&
            this.hasSubmitted() === false;
    }

    private computeIsShowSubmitButton(): boolean {
        if (OrderModel.instance.orderItemsToReturn().length > 0) {
            return this.hasSelectedReturnsMethod();
        }
        return OrderModel.instance.orderItemsForFeedback().length > 0;
    }

    private computeHasSelectedReturnsMethod(): boolean {
        if (ReturnsMethodModel.instance.selectedReturnsMethod() === ReturnsMethodModel.ReturnMethodType.Collection) {
            return ReturnsMethodModel.instance.collectionDate() !== null && this.hasCollectionAddress();
        }
        if (ReturnsMethodModel.instance.selectedReturnsMethod() === ReturnsMethodModel.ReturnMethodType.DropOffPoint) {
            return ReturnsMethodModel.instance.dropOffDetails() !== null;
        }
        return false;
    }

    private hasCollectionAddress(): boolean {
        return ReturnsMethodModel.instance.addressLine1() !== null && ReturnsMethodModel.instance.postCode() !== null;
    }

    isReturningItems: KnockoutComputed<boolean>;
    returnSummaryText: KnockoutComputed<string>;
    isLoading: KnockoutObservable<boolean>;
    isSubmitting: KnockoutObservable<boolean>;
    isShowSubmitButton: KnockoutComputed<boolean>;
    hasSelectedReturnsMethod: KnockoutComputed<boolean>;
    hasSubmitted: KnockoutObservable<boolean>;
    isShowOrderItems: KnockoutComputed<boolean>;
}

export {Order as viewModel, templateMarkup as template};
