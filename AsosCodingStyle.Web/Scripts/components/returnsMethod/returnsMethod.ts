import templateMarkup = require('text!./returnsMethod.html');
import ko = require('knockout');
import ReturnsMethodModel = require("../../models/returnsMethodModel");
import OrderModel = require("../../models/orderModel");

export class ReturnsMethod {
    
    constructor() {
        this.isDropOffPointSelected = ko.pureComputed(this.computeIsDropOffPointSelected, this);
        this.isCollectionSelected = ko.pureComputed(this.computeIsCollectionSelected, this);
    }

    selectDropOffPoint(): void {
        ReturnsMethodModel.instance.selectedReturnsMethod(ReturnsMethodModel.ReturnMethodType.DropOffPoint);
        OrderModel.instance.order.ReturnCollect = null;
    }

    selectCollection(): void {
        ReturnsMethodModel.instance.selectedReturnsMethod(ReturnsMethodModel.ReturnMethodType.Collection);
        OrderModel.instance.order.ReturnCollect = {
            Address: null,
            Date: null
        };
    }

    computeIsDropOffPointSelected(): boolean {
        return ReturnsMethodModel.instance.selectedReturnsMethod() === ReturnsMethodModel.ReturnMethodType.DropOffPoint;
    }

    computeIsCollectionSelected(): boolean {
        return ReturnsMethodModel.instance.selectedReturnsMethod() === ReturnsMethodModel.ReturnMethodType.Collection;
    }

    isDropOffPointSelected: KnockoutComputed<boolean>;
    isCollectionSelected: KnockoutComputed<boolean>;
}

export {ReturnsMethod as viewModel, templateMarkup as template};
