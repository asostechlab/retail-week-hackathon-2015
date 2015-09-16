import templateMarkup = require('text!./returnsMethod.html');
import ReturnsMethodModel = require("../../models/returnsMethodModel");

export class ReturnsMethod {
    
    constructor() {
        this.isDropOffPointSelected = ReturnsMethodModel.instance.isDropOffPointSelected;
        this.isCollectionSelected = ReturnsMethodModel.instance.isCollectionSelected;
    }

    selectDropOffPoint(): void {
        ReturnsMethodModel.instance.selectDropOffPoint();
    }

    selectCollection(): void {
        ReturnsMethodModel.instance.selectCollection();
    }

    isDropOffPointSelected: KnockoutComputed<boolean>;
    isCollectionSelected: KnockoutComputed<boolean>;
}

export {ReturnsMethod as viewModel, templateMarkup as template};
