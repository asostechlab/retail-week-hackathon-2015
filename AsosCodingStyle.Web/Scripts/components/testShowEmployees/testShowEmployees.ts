import templateMarkup = require('text!./testShowEmployees.html');
import ko = require('knockout');
import TestModel = require("../../models/testModel");
import _ = require('lodash');

export class TestShowEmployees {

    constructor() {
        this.employees = TestModel.instance.employees;
    }

    private removeEmployee(employee: TestModel.IEmployee) {
        TestModel.instance.employees.remove(employee);
    }

    employees: KnockoutObservableArray<TestModel.IEmployee>;
}

export {TestShowEmployees as viewModel, templateMarkup as template};
 