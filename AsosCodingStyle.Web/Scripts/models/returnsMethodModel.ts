import ko = require('knockout');
import OrderModel = require("./orderModel");
import DropOffPointApi = require("../apis/dropOffPointApi");

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
        this.dropOffDetails = ko.observable(null);

        // Subscriptions to keep the order model up to date
        this.collectionDate.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Date = new Date(newValue));
        this.addressLine1.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.AddressLine1 = newValue);
        this.addressLine2.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.AddressLine2 = newValue);
        this.city.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.City = newValue);
        this.postCode.subscribe(newValue => OrderModel.instance.order.ReturnCollect.Address.PostCode = newValue);

        // Computeds
        this.isDropOffPointSelected = ko.pureComputed(this.computeIsDropOffPointSelected, this);
        this.isCollectionSelected = ko.pureComputed(this.computeIsCollectionSelected, this);
    }

    selectDropOffPoint(): void {
        this.selectedReturnsMethod(ReturnMethodType.DropOffPoint);
        this.collectionDate(null);
        this.addressLine1(null);
        this.addressLine2(null);
        this.city(null);
        this.postCode(null);
        OrderModel.instance.order.ReturnCollect = null;
    }

    selectCollection(): void {
        this.selectedReturnsMethod(ReturnMethodType.Collection);
        this.dropOffDetails(null);
        OrderModel.instance.order.ReturnCollect = {
            Address: null,
            Date: null
        };
    }

    setDropOffPoint(location: string): void {
        DropOffPointApi.instance.getDropOffPoint(location).then(dropOffPoint => this.dropOffDetails(dropOffPoint));
    }

    private computeIsDropOffPointSelected(): boolean {
        return this.selectedReturnsMethod() === ReturnMethodType.DropOffPoint;
    }

    private computeIsCollectionSelected(): boolean {
        return this.selectedReturnsMethod() === ReturnMethodType.Collection;
    }

    selectedReturnsMethod: KnockoutObservable<ReturnMethodType>;
    collectionDate: KnockoutObservable<string>;
    addressLine1: KnockoutObservable<string>;
    addressLine2: KnockoutObservable<string>;
    city: KnockoutObservable<string>;
    postCode: KnockoutObservable<string>;
    dropOffDetails: KnockoutObservable<DropOffPointApi.IDropOffPoint>;
    isDropOffPointSelected: KnockoutComputed<boolean>;
    isCollectionSelected: KnockoutComputed<boolean>;
}

var instance = new ReturnsMethodModel();
export {instance}