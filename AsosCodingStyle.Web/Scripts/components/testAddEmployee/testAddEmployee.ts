import templateMarkup = require('text!./testAddEmployee.html');
import ko = require('knockout');
import TestModel = require("../../models/testModel");
import _ = require('lodash');

export class TestAddEmployee {

    constructor() {
        this.employeeName = ko.observable<string>();
        this.employeeTitle = ko.observable<string>();
    }

    private addEmployee() {
        if (!this.employeeName() || !this.employeeTitle()) {
            window.alert('You need to enter a name and title');
            return;
        }

        var lastId = _.max(TestModel.instance.employees(), employee => employee.id).id;
        TestModel.instance.employees.push({
            id: ++lastId,
            name: this.employeeName(),
            title: this.employeeTitle()
        });
        this.employeeName(null);
        this.employeeTitle(null);
    }

    employeeName: KnockoutObservable<string>;
    employeeTitle: KnockoutObservable<string>;
}

export {TestAddEmployee as viewModel, templateMarkup as template};
 