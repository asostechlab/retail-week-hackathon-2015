import $ = require('jquery');
import EmployeeRecord = AsosCodingStyle.Web.Models.EmployeeRecord;

export class TestApi {
    getEmployeeRecords(company: string): Promise<EmployeeRecord[]> {
        var ajaxRequest = $.ajax('someApiUrl?company=' + company, {
            method: 'GET',
            dataType: 'application/json'
        });
        return Promise.resolve<EmployeeRecord[]>(<any>ajaxRequest);
    }
}

var instance = new TestApi();
export {instance}