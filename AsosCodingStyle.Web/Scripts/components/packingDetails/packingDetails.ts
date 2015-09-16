import templateMarkup = require('text!./packingDetails.html');
import ReturnsMethodModel = require("../../models/returnsMethodModel");

export class PackingDetails {

    constructor() {
        this.isDropOffPointSelected = ReturnsMethodModel.instance.isDropOffPointSelected;
    }

    isDropOffPointSelected: KnockoutComputed<boolean>;
}

export {PackingDetails as viewModel, templateMarkup as template};
