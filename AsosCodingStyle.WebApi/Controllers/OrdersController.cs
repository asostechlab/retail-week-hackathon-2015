namespace AsosCodingStyle.WebApi.Controllers
{
    using System.Threading.Tasks;
    using System.Web.Http;
    using Data;
    using DataAccess;

    [RoutePrefix("customer/orders")]
    public class OrdersController : ApiController
    {
        [HttpGet]
        [Route("{orderId}")]
        public async Task<Order> Get(int orderId)
        {
            return await new OrderRepository().GetOrder(orderId.ToString());
        }

        [HttpPost]
        [Route("save")]
        public async Task Save([FromBody] Order order)
        {
            await new OrderRepository().SaveOrder(order);
        }
    }
}