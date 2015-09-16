import templateMarkup = require('text!./collection.html');
import ko = require('knockout');

export class Collection {

    private UseDeliveryAddress = 'UseDeliveryAddress';
    private EnterANewAddress = 'EnterANewAddress';

    constructor() {
        this.collectionDate = ko.observable(null);
        this.collectionMethod = ko.observable(null);
        this.isShowAddressEntry = ko.pureComputed(this.computeIsShowAddressEntry, this);
        this.addressLine1 = ko.observable(null);
        this.addressLine2 = ko.observable(null);
        this.city = ko.observable(null);
        this.postCode = ko.observable(null);
        //this.isCalendarReminderSelected
    }

    useMyDeliveryAddress(): void {
        if (this.collectionMethod() === this.UseDeliveryAddress) {
            this.clearCollectionMethod();
        } else {
            this.collectionMethod(this.UseDeliveryAddress);
        }
    }

    enterANewAddress(): void {
        if (this.collectionMethod() === this.EnterANewAddress) {
            this.clearCollectionMethod();
        } else {
            this.collectionMethod(this.EnterANewAddress);
        }
    }

    private computeIsShowAddressEntry(): boolean {
        return this.collectionMethod() === this.EnterANewAddress;
    }

    private clearCollectionMethod(): void {
        this.collectionMethod(null);
        this.addressLine1(null);
        this.addressLine2(null);
        this.city(null);
        this.postCode(null);
    }

    collectionDate: KnockoutObservable<string>;
    collectionMethod: KnockoutObservable<string>;
    isShowAddressEntry: KnockoutComputed<boolean>;
    addressLine1: KnockoutObservable<string>;
    addressLine2: KnockoutObservable<string>;
    city: KnockoutObservable<string>;
    postCode: KnockoutObservable<string>;
}

export {Collection as viewModel, templateMarkup as template};
