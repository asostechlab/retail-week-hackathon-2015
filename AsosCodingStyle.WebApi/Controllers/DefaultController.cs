namespace AsosCodingStyle.WebApi.Controllers
{
    using System.Web.Http;

    [RoutePrefix("")]
    public class DefaultController : ApiController
    {
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(new {Text = "This is the default endpoint"});
        }
    }
}