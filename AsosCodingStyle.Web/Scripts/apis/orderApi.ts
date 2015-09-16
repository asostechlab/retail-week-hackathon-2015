import $ = require('jquery');
import Order = AsosCodingStyle.Data.Order;

export class OrderApi {
    getOrder(orderId: string): Promise<Order> {
        var ajaxRequest = $.ajax('http://asos-coding-style-web-api.azurewebsites.net/customer/orders/' + orderId, {
            type: 'GET'
        });
        return Promise.resolve<Order>(ajaxRequest);
    }

    saveOrder(order: Order): Promise<void> {
        var ajaxRequest = $.ajax('http://asos-coding-style-web-api.azurewebsites.net/customer/orders/save', {
            type: 'POST',
            data: JSON.stringify(order),
            contentType: 'application/json'
        });
        return Promise.resolve<void>(ajaxRequest);
    }
}

var instance = new OrderApi();
export { instance };