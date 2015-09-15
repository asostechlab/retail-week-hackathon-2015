/// <reference path="../../../AsosCodingStyle.Data/Scripts/TypeLite.Net4.d.ts" />
import ko = require('knockout');
import Order = AsosCodingStyle.Data.Order;

export class OrderModel {

    // todo: implement the get method with a loading indicator
    constructor() {
        this.order = {
            DateCreated: new Date(),
            Id: "1",
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
                    Price: 95.00,
                    FeedbackTypes: [],
                    Return: {
                        ExtraInformation: null,
                        Reason: null
                    }
                }
            ]
        };
    }

    order: Order;
}

var instance = new OrderModel();
export {instance}