namespace AsosCodingStyle.Web
{
    using Microsoft.AspNet.SignalR;
    
    public class AsosCodingStyleHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }

        internal static void SendMessage(string message)
        {
            var context = GlobalHost.ConnectionManager.GetHubContext<AsosCodingStyleHub>();

            context.Clients.All.hello(message);

            Notifications.Notifications.Instance.Send(message).Wait();
        }
    }
}