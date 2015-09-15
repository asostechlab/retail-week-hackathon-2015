using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AsosCodingStyle.Data;
using AsosCodingStyle.DataAccess;

namespace AsosCodingStyle.WebApi.Controllers
{
    [RoutePrefix("customer/orders")]
    public class OrdersController : ApiController
    {
        [HttpGet]
        [Route("{orderId}")]
        public async Task<Order> Get(int orderId)
        {
            // return await new OrderRepository().GetOrder(orderId.ToString()); ;

            var orderItems = new List<OrderItem>();
            var products = Store.Products;
            var prices = new List<double> { 69.99, 49.99, 90.00, 75.00, 39.99, 28.50 };

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

            return new Order { Id = 1.ToString(), DateCreated = DateTime.UtcNow, Items = orderItems };
        }

        [HttpPost]
        [Route("save")]
        public async Task Save([FromBody] Order order)
        {
            try
            {
                await new OrderRepository().SaveOrder(order);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debugger.Break();   
            }
            
        }

    }
}