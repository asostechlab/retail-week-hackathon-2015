using System;
using AsosCodingStyle.Data;

namespace AsosCodingStyle.Web
{
    using Microsoft.AspNet.SignalR;

    public class AsosCodingStyleHub : Hub
    {
        public static void SendReturnedPackageReceivedNotification()
        {
            GetHubContext().Clients.All.returnedPackageReceived(new Notification
            {
                 Message = "Your package with returned goods for order 123112 has been received. Your refund payment will be made within 2 working days.", DateTime = DateTime.Now
            });
        }

        public static void SendPaymentMadeNotification()
        {
            GetHubContext().Clients.All.returnedPackageReceived(new Notification
            {
                 Message = "A refund of £92.50 for your order 123112 has been made into your account", DateTime = DateTime.Now
            });
        }

        private static IHubContext GetHubContext()
        {
            return GlobalHost.ConnectionManager.GetHubContext<AsosCodingStyleHub>();
        }
    }
}