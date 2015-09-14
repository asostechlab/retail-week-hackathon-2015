export interface IEmployee {
    id: number;
    name: string;
    title: string;
}

class TestModel {

    constructor() {
        this.employees = [
            { id: 1, name: 'Frank Spencer', title: 'Actor' },
            { id: 2, name: 'Lily Savage', title: 'Someone' },
            { id: 3, name: 'Nancy Lamb', title: 'Chef' }
        ];
    }

    employees: IEmployee[];
}

var instance = new TestModel();
export {instance}