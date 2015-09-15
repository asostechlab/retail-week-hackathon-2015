import templateMarkup = require('text!./testContactForm.html');
import ko = require('knockout');

class TestContactForm {

    constructor() {
        this.firstName = ko.observable('');
        this.lastName = ko.observable('');
        this.fullName = ko.pureComputed<string>(() => this.firstName() + ' ' + this.lastName());
        this.isShowFullName = ko.pureComputed<boolean>(() => this.firstName() + this.lastName() !== '');
    }

    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    fullName: KnockoutComputed<string>;
    isShowFullName: KnockoutComputed<boolean>;
}

export {TestContactForm as ContactForm, TestContactForm as viewModel, templateMarkup as template};
