namespace AsosCodingStyle.WebApi
{
    using System.Web;
    using System.Web.Http;
    using Asos.Framework.Configuration.Providers;

    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            ConfigurationSettingsProvider.Current = new AppSettingsConfigurationSettingsProvider();

            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}