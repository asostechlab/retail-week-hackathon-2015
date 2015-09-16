namespace AsosCodingStyle.WebApi.Controllers
{
    using System.Threading.Tasks;
    using System.Web.Http;
    using Asos.Common.Address.Web.Api.Client;
    using Asos.Common.Address.Web.Api.Client.Contracts;
    using Asos.Identity.Http.Client.Factory;
    using WebApi.Infrastructure.Logging;

    [RoutePrefix("postcode/lookup")]
    public class PostcodeLookupController : ApiController
    {
        private readonly IPostalCodeLookupService postalCodeLookupService;

        public PostcodeLookupController()
        {
            var logger = new NullLogger();

            var httpClientFactory = new HttpClientFactory(new HttpClientSettings(), logger);

            var postalcodeLookupSettings = new PostalCodeLookupSettings();

            postalCodeLookupService = new PostalCodeLookupService(httpClientFactory, postalcodeLookupSettings, logger);
        }

        [Route("{postcode}")]
        public async Task<IHttpActionResult> Get(string postcode)
        {
            var result = await postalCodeLookupService.SendAsync("GB", postcode);

            if (result.Success)
            {
                return Ok(result.ViewModel);
            }

            return BadRequest(result.Errors.ToString());
        }
    }
}