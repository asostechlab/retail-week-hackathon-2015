import ko = require('knockout');

export interface IEmployee {
    id: number;
    name: string;
    title: string;
}

class TestModel {

    constructor() {
        this.employees = ko.observableArray([
            { id: 1, name: 'Frank Spencer', title: 'Actor' },
            { id: 2, name: 'Russell Brand', title: 'Someone' },
            { id: 3, name: 'Nancy Lam', title: 'Chef' }
        ]);
    }

    employees: KnockoutObservableArray<IEmployee>;
}

var instance = new TestModel();
export {instance}