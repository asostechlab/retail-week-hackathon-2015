namespace AsosCodingStyle.Web
{
    using System.Web;
    using System.Web.Http;
    using Asos.Framework.Configuration.Providers;

    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}