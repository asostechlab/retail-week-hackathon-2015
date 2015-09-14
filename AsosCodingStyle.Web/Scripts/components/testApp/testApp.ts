import templateMarkup = require('text!./testApp.html');
import ko = require('knockout');

export class TestApp {

    isShowContactForm: KnockoutObservable<boolean>;

    constructor() {
        this.isShowContactForm = ko.observable(false);
    }

    private toggleContactForm() {
        this.isShowContactForm(!this.isShowContactForm());
    }
}

export {TestApp as viewModel, templateMarkup as template};
