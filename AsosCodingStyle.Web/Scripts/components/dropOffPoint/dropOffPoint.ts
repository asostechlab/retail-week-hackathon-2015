import templateMarkup = require('text!./dropOffPoint.html');
import ko = require('knockout');
import ReturnsMethodModel = require("../../models/returnsMethodModel");
import DropOffPointApi = require("../../apis/dropOffPointApi");

export class DropOffPoint {

    private PostCodeMethod = 'PostCodeMethod';
    private UseMyLocationMethod = 'UseMyLocationMethod';

    constructor() {
        this.dropOffPointLocationMethod = ko.observable(null);
        this.dropOffPointPostcode = ko.observable(null);
        this.dropOffDetails = ReturnsMethodModel.instance.dropOffDetails;
        this.isLocationReminderSelected = ko.observable(false);
        this.isTimeReminderSelected = ko.observable(false);
    }

    postCodeKeyUp(d, e): void {
        if (e.keyCode === 13) { // User has pressed enter
            this.dropOffPointLocationMethod(this.PostCodeMethod);
            ReturnsMethodModel.instance.setDropOffPoint(this.dropOffPointPostcode());
        }
    }

    useMyLocation(d, e): void {
        this.dropOffPointLocationMethod(this.UseMyLocationMethod);
        ReturnsMethodModel.instance.setDropOffPoint('location');
        this.dropOffPointPostcode(null);
    }

    dropOffPointLocationMethod: KnockoutObservable<string>;
    dropOffPointPostcode: KnockoutObservable<string>;
    dropOffDetails: KnockoutObservable<DropOffPointApi.IDropOffPoint>;
    isLocationReminderSelected: KnockoutObservable<boolean>;
    isTimeReminderSelected: KnockoutObservable<boolean>;
}

export {DropOffPoint as viewModel, templateMarkup as template};
