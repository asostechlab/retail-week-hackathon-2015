namespace AsosCodingStyle.Web
{
    using System.Web;
    using System.Web.Http;
    using System.Web.Routing;

    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}