import templateMarkup = require('text!./packingDetails.html');
import ReturnsMethodModel = require("../../models/returnsMethodModel");
import $ = require('jquery');

export class PackingDetails {

    constructor() {
        this.isDropOffPointSelected = ReturnsMethodModel.instance.isDropOffPointSelected;
        $('body').scrollTop(0);
    }

    isDropOffPointSelected: KnockoutComputed<boolean>;
}

export {PackingDetails as viewModel, templateMarkup as template};
