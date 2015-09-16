import $ = require('jquery');
import Order = AsosCodingStyle.Data.Order;

export class OrderApi {
    getOrder(orderId: string): Promise<Order> {
        var ajaxRequest = $.ajax('http://asos-coding-style-web-api.azurewebsites.net/customer/orders/' + orderId, {
            type: 'GET'
        });
        return Promise.resolve<Order>(ajaxRequest);
        //.then(o => {
        //    console.log(o);
        //    return o;
        //})
        //.catch(o => {
        //    debugger;
        //    return o;
        //});
    }
}

var instance = new OrderApi();
export { instance };