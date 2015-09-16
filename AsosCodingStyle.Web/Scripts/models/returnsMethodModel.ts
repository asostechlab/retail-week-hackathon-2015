import ko = require('knockout');
import OrderModel = require("./orderModel");

export enum ReturnMethodType {
    DropOffPoint,
    Collection
}

export class ReturnsMethodModel {

    constructor() {
        this.selectedReturnsMethod = ko.observable(null);
        this.collectionDate = ko.observable(null);
        this.addressLine1 = ko.observable(null);
        this.addressLine2 = ko.observable(null);
        this.city = ko.observable(null);
        this.postCode = ko.observable(null);

        // Subscriptions to keep the order model up to date
        this.collectionDate.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Date = new Date(newValue));
        this.addressLine1.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.AddressLine1 = newValue);
        this.addressLine2.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.AddressLine2 = newValue);
        this.city.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.City = newValue);
        this.postCode.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.PostCode = newValue);
    }

    selectedReturnsMethod: KnockoutObservable<ReturnMethodType>;
    collectionDate: KnockoutObservable<string>;
    addressLine1: KnockoutObservable<string>;
    addressLine2: KnockoutObservable<string>;
    city: KnockoutObservable<string>;
    postCode: KnockoutObservable<string>;
}

var instance = new ReturnsMethodModel();
export {instance}