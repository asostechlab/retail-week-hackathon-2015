import templateMarkup = require('text!./returnsMethod.html');
import ko = require('knockout');
import OrderModel = require("../../models/orderModel");

export class ReturnsMethod {
    private DropOffPoint = 'DropOffPoint';
    private Collection = 'Collection';

    constructor() {
        this.selectedReturnsMethod = ko.observable(null);
        this.isDropOffPointSelected = ko.pureComputed(this.computeIsDropOffPointSelected, this);
        this.isCollectionSelected = ko.pureComputed(this.computeIsCollectionSelected, this);
    }

    selectDropOffPoint(): void {
        this.selectedReturnsMethod(this.DropOffPoint);
        OrderModel.instance.order.ReturnCollect = null;
    }

    selectCollection(): void {
        this.selectedReturnsMethod(this.Collection);
        OrderModel.instance.order.ReturnCollect = {
            Address: null,
            Date: null
        };
    }

    computeIsDropOffPointSelected(): boolean {
        return this.selectedReturnsMethod() === this.DropOffPoint;
    }

    computeIsCollectionSelected(): boolean {
        return this.selectedReturnsMethod() === this.Collection;
    }

    selectedReturnsMethod: KnockoutObservable<string>;
    isDropOffPointSelected: KnockoutComputed<boolean>;
    isCollectionSelected: KnockoutComputed<boolean>;
}

export {ReturnsMethod as viewModel, templateMarkup as template};
