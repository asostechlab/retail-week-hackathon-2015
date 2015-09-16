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
        this.isCalendarReminderSelected = ko.observable(false);
        this.isEmailReminderSelected = ko.observable(false);
        this.isMobileReminderSelected = ko.observable(false);
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

    dropOffPointPostcode: KnockoutObservable<string>;
    dropOffDetails: KnockoutObservable<DropOffPointApi.IDropOffPoint>;
    isLocationReminderSelected: KnockoutObservable<boolean>;
    isTimeReminderSelected: KnockoutObservable<boolean>;
    isCalendarReminderSelected: KnockoutObservable<boolean>;
    isEmailReminderSelected: KnockoutObservable<boolean>;
    isMobileReminderSelected: KnockoutObservable<boolean>;
    dropOffPointLocationMethod: KnockoutObservable<string>;
}

export {DropOffPoint as viewModel, templateMarkup as template};
