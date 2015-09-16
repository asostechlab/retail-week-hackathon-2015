import templateMarkup = require('text!./collection.html');
import ko = require('knockout');
import OrderModel = require("../../models/orderModel");

export class Collection {

    private UseDeliveryAddress = 'UseDeliveryAddress';
    private EnterANewAddress = 'EnterANewAddress';

    constructor() {
        // Local observables
        this.collectionDate = ko.observable(null);
        this.collectionMethod = ko.observable(null);
        this.addressLine1 = ko.observable(null);
        this.addressLine2 = ko.observable(null);
        this.city = ko.observable(null);
        this.postCode = ko.observable(null);
        this.isCalendarReminderSelected = ko.observable(false);
        this.isEmailReminderSelected = ko.observable(false);
        this.isMobileReminderSelected = ko.observable(false);

        // Subscriptions to keep the model up to date
        this.collectionDate.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Date = new Date(newValue));
        this.addressLine1.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.AddressLine1 = newValue);
        this.addressLine2.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.AddressLine2 = newValue);
        this.city.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.City = newValue);
        this.postCode.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.PostCode = newValue);

        // todo, store the reminder settings on the model

        // Computeds for the view
        this.isShowAddressEntry = ko.pureComputed(this.computeIsShowAddressEntry, this);
        this.addressSummary = ko.pureComputed(this.computeAddressSummary, this);
    }

    useMyDeliveryAddress(): void {
        if (this.collectionMethod() === this.UseDeliveryAddress) {
            this.clearCollectionMethod();
        } else {
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
            this.setupEmptyAddressOnModel();
            this.collectionMethod(this.EnterANewAddress);
        }
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
        var formattedAddress = _.filter(lines, l => !!l).join(', ');
        if (formattedAddress) {
            return 'Your items will be collected from ' + formattedAddress;
        } else {
            return '';
        }
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

    collectionDate: KnockoutObservable<string>;
    collectionMethod: KnockoutObservable<string>;
    isShowAddressEntry: KnockoutComputed<boolean>;
    addressLine1: KnockoutObservable<string>;
    addressLine2: KnockoutObservable<string>;
    city: KnockoutObservable<string>;
    postCode: KnockoutObservable<string>;
    isCalendarReminderSelected: KnockoutObservable<boolean>;
    isEmailReminderSelected: KnockoutObservable<boolean>;
    isMobileReminderSelected: KnockoutObservable<boolean>;
    addressSummary: KnockoutComputed<string>;
}

export {Collection as viewModel, templateMarkup as template};
