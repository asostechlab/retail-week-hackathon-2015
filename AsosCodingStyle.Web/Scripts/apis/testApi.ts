import $ = require('jquery');
import EmployeeRecord = AsosCodingStyle.Web.Models.EmployeeRecord;

export class TestApi {
    getEmployeeRecords(company: string): Promise<EmployeeRecord[]> {
        var ajaxRequest = $.ajax('someApiUrl?company=' + company, {
            type: 'GET'
        });
        return Promise.resolve<EmployeeRecord[]>(ajaxRequest);
    }

    saveEmployeeRecords(employeeRecords: EmployeeRecord[]): Promise<void> {
        var ajaxRequest = $.ajax('someApiUrl', {
            type: 'PUT',
            data: JSON.stringify(employeeRecords),
            contentType: 'application/json'
        });
        return Promise.resolve<void>(ajaxRequest);
    }
}

var instance = new TestApi();
export {instance};