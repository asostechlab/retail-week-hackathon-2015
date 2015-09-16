import templateMarkup = require('text!./collection.html');
import ko = require('knockout');
import OrderModel = require("../../models/orderModel");
import ReturnsMethodModel = require("../../models/returnsMethodModel")

export class Collection {

    private UseDeliveryAddress = 'UseDeliveryAddress';
    private EnterANewAddress = 'EnterANewAddress';

    constructor() {
        // Local observables
        this.collectionMethod = ko.observable(null);
        this.collectionDate = ReturnsMethodModel.instance.collectionDate;
        this.addressLine1 = ReturnsMethodModel.instance.addressLine1;
        this.addressLine2 = ReturnsMethodModel.instance.addressLine2;
        this.city = ReturnsMethodModel.instance.city;
        this.postCode = ReturnsMethodModel.instance.postCode;

        // Computeds for the view
        this.isShowAddressEntry = ko.pureComputed(this.computeIsShowAddressEntry, this);
        this.addressSummary = ko.pureComputed(this.computeAddressSummary, this);
    }

    useMyDeliveryAddress(): void {
        if (this.collectionMethod() === this.UseDeliveryAddress) {
            this.clearCollectionMethod();
        } else {
            this.clearCollectionMethod();
            this.setupEmptyAddressOnModel();
            this.addressLine1(OrderModel.instance.order.OrderAddress.AddressLine1);
            this.addressLine2(OrderModel.instance.order.OrderAddress.AddressLine2);
            this.city(OrderModel.instance.order.OrderAddress.City);
            this.postCode(OrderModel.instance.order.OrderAddress.PostCode);
            this.collectionMethod(this.UseDeliveryAddress);
        }
    }

    enterANewAddress(): void {
        if (this.collectionMethod() === this.EnterANewAddress) {
            this.clearCollectionMethod();
        } else {
            this.clearCollectionMethod();
            this.setupEmptyAddressOnModel();
            this.collectionMethod(this.EnterANewAddress);
        }
    }

    addToCalendar(): void {
        console.error('not implemented...');
    }

    private computeIsShowAddressEntry(): boolean {
        return this.collectionMethod() === this.EnterANewAddress;
    }

    private computeAddressSummary(): string {
        var lines = [
            this.addressLine1(),
            this.addressLine2(),
            this.city(),
            this.postCode()
        ];
        return _.filter(lines, l => !!l).join(', ');
    }

    private clearCollectionMethod(): void {
        this.collectionMethod(null);
        this.addressLine1(null);
        this.addressLine2(null);
        this.city(null);
        this.postCode(null);
        OrderModel.instance.order.ReturnCollect.Address = null;
    }

    private setupEmptyAddressOnModel(): void {
        OrderModel.instance.order.ReturnCollect.Address = {
            AddressLine1: null,
            AddressLine2: null,
            City: null,
            PostCode: null
        };
    }

    collectionMethod: KnockoutObservable<string>;
    collectionDate: KnockoutObservable<string>;
    addressLine1: KnockoutObservable<string>;
    addressLine2: KnockoutObservable<string>;
    city: KnockoutObservable<string>;
    postCode: KnockoutObservable<string>;
    isShowAddressEntry: KnockoutComputed<boolean>;
    addressSummary: KnockoutComputed<string>;
}

export {Collection as viewModel, templateMarkup as template};
