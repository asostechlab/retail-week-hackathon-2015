namespace AsosCodingStyle.WebApi.Infrastructure.JsonContent
{
    using System;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Net.Http.Formatting;
    using System.Net.Http.Headers;

    public class JsonContentNegotiator : IContentNegotiator
    {
        private readonly JsonMediaTypeFormatter jsonFormatter;

        public JsonContentNegotiator(JsonMediaTypeFormatter formatter)
        {
            jsonFormatter = formatter;
        }

        public ContentNegotiationResult Negotiate(
            Type type,
            HttpRequestMessage request,
            IEnumerable<MediaTypeFormatter> formatters)
        {
            return new ContentNegotiationResult(
                jsonFormatter,
                new MediaTypeHeaderValue("application/json"));
        }
    }
}