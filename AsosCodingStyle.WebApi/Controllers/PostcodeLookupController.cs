namespace AsosCodingStyle.WebApi.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Http;
    using Asos.Common.Address.Web.Api.Client;
    using Asos.Common.Address.Web.Api.Client.Contracts;
    using Asos.Common.Address.Web.Api.Client.ViewModels;
    using Asos.Framework.Extensions;
    using Asos.Identity.Http.Client.Factory;
    using Infrastructure.Logging;

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
        [Route("{postcode}/{numberOrName}")]
        public async Task<IHttpActionResult> Get(string postcode, string numberOrName = "")
        {
            var serviceResult = await postalCodeLookupService.SendAsync("GB", postcode);

            if (!serviceResult.Success) return BadRequest(serviceResult.Errors.ToString());

            if (numberOrName.IsNullOrEmpty())
            {
                return Ok(new PostcodeLookupResults(serviceResult.ViewModel));
            }

            var house =
                (from r in serviceResult.ViewModel
                    where r.Address1.ToUpperInvariant().Contains(numberOrName.ToUpperInvariant())
                    select r).ToList();

            return Ok(new PostcodeLookupResults(house));
        }
    }

    public class PostcodeLookupResults
    {
        public PostcodeLookupResults(IList<PostalCodeLookupItemViewModel> results)
        {
            Results = results;
            ResultCount = results.Count;
        }

        public IList<PostalCodeLookupItemViewModel> Results { get; private set; }

        public int ResultCount { get; private set; }
    }
}