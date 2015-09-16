import templateMarkup = require('text!./dropOffPoint.html');
import ko = require('knockout');
import DropOffPointApi = require("../../apis/dropOffPointApi");

export class DropOffPoint {

    constructor() {
        this.dropOffPointPostcode = ko.observable(null);
        this.dropOffDetails = ko.observable(null);
        this.isLocationReminderSelected = ko.observable(false);
        this.isTimeReminderSelected = ko.observable(false);
        this.isCalendarReminderSelected = ko.observable(false);
        this.isEmailReminderSelected = ko.observable(false);
        this.isMobileReminderSelected = ko.observable(false);
    }

    postCodeKeyUp(d, e): void {
        if (e.keyCode === 13) { // User has pressed enter
            DropOffPointApi.instance.getDropOffPoint(this.dropOffPointPostcode()).then(dropOffPoint => this.dropOffDetails(dropOffPoint));
        }
    }

    useMyLocation(d, e): void {
        DropOffPointApi.instance.getDropOffPoint('location').then(dropOffPoint => this.dropOffDetails(dropOffPoint));
        this.dropOffPointPostcode(null);
    }

    dropOffPointPostcode: KnockoutObservable<string>;
    dropOffDetails: KnockoutObservable<DropOffPointApi.IDropOffPoint>;
    isLocationReminderSelected: KnockoutObservable<boolean>;
    isTimeReminderSelected: KnockoutObservable<boolean>;
    isCalendarReminderSelected: KnockoutObservable<boolean>;
    isEmailReminderSelected: KnockoutObservable<boolean>;
    isMobileReminderSelected: KnockoutObservable<boolean>;
}

export {DropOffPoint as viewModel, templateMarkup as template};
