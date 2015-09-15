﻿namespace AsosCodingStyle.WebApi
{
    using System.Net.Http.Formatting;
    using System.Web.Http;
    using Infrastructure.JsonContent;

    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", new {id = RouteParameter.Optional});

            var jsonFormatter = new JsonMediaTypeFormatter();
            config.Services.Replace(typeof (IContentNegotiator), new JsonContentNegotiator(jsonFormatter));
        }
    }
}