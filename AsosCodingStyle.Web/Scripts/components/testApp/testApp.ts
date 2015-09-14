import templateMarkup = require('text!./testApp.html');
import ko = require('knockout');
import TestModel = require("../../models/testModel");

class TestApp {

    isShowContactForm: KnockoutObservable<boolean>;

    constructor() {
        this.isShowContactForm = ko.observable(false);
        this.employees = ko.observableArray(TestModel.instance.employees);
        this.employeeId = ko.observable<number>();
        this.employeeName = ko.observable<string>();
        this.employeeTitle = ko.observable<string>();
    }

    private toggleContactForm() {
        this.isShowContactForm(!this.isShowContactForm());
    }

    private addEmployee() {
        this.employees.push({
            id: this.employeeId(),
            name: this.employeeName(),
            title: this.employeeTitle()
        });
        this.employeeId(null);
        this.employeeName(null);
        this.employeeTitle(null);
        window.alert('Employee successfully added!');
    }

    employees: KnockoutObservableArray<TestModel.IEmployee>;
    employeeId: KnockoutObservable<number>;
    employeeName: KnockoutObservable<string>;
    employeeTitle: KnockoutObservable<string>;
}

export {TestApp as TestApp, TestApp as viewModel, templateMarkup as template};
