namespace AsosCodingStyle.WebApi.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Web.Http;
    using Data;

    [RoutePrefix("customer/orders")]
    public class OrdersController : ApiController
    {
        [HttpGet]
        [Route("{orderId}")]
        public Order Get(int orderId)
        {
            var orderItems = new List<OrderItem>();
            var products = Store.Products;
            var prices = new List<double> {69.99, 49.99, 90.00, 75.00, 39.99, 28.50};

            for (var i = 0; i < 6; i++)
            {
                orderItems.Add(new OrderItem
                {
                    OrderItemId = i,
                    Product = products[i],
                    Quantity = 1,
                    Price = prices[new Random().Next(5)]
                });
            }

            return new Order {OrderId = 1, DateCreated = DateTime.UtcNow, Items = orderItems};
        }

        [HttpPost]
        public void Save([FromBody] Order order)
        {
        }
    }
}