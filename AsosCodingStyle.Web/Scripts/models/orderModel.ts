/// <reference path="../../../AsosCodingStyle.Data/Scripts/TypeLite.Net4.d.ts" />
import ko = require('knockout');
import Order = AsosCodingStyle.Data.Order;

export class OrderModel {
    
    // todo: implement the get method with a loading indicator
    constructor() {
        this.order = {
            DateCreated: new Date(),
            OrderId: 1,
            Items: [
                {
                    OrderItemId: 1,
                    Product: {
                        ProductId: 1,
                        Colour: 'Red',
                        Description: 'Superdry Polar Jacket with Hood',
                        ImageUrl: 'http://images.asos-media.com/inv/media/7/5/5/6/5676557/black/image1xxl.jpg',
                        Size: 'Small'
                    },
                    Quantity: 1,
    // todo: Scott will give me a price at some time...
                    Price: 95.00,
                    OtherReturnsFeedback: null
                }
            ]
        };
    }

    order: Order;

    // todo: wire this up to the strongly typed shizzle...
    static RefundReasons: any[] = ['Quality', 'Sizing', 'Damaged', 'Didn\'t Like', 'Other'];
}

var instance = new OrderModel();
export {instance}