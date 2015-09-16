using System;
using AsosCodingStyle.Data;

namespace AsosCodingStyle.Web
{
    using Microsoft.AspNet.SignalR;

    public class AsosCodingStyleHub : Hub
    {
        public static void SendReturnedPackageReceivedNotification()
        {
            var message = "Your package with returned goods for order 123112 has been received. Your refund payment will be made within 2 working days.";

            GetHubContext().Clients.All.returnedPackageReceived(new Notification
            {
                 Message = message, DateTime = DateTime.Now
            });

            // Notifications.Notifications.Instance.Send(message).Wait();
        }

        public static void SendPaymentMadeNotification()
        {
            var message = "A refund of £92.50 for your order 123112 has been made into your account";
            GetHubContext().Clients.All.returnedPackageReceived(new Notification
            {
                 Message = message, DateTime = DateTime.Now
            });

            // Notifications.Notifications.Instance.Send(message).Wait();
        }

        private static IHubContext GetHubContext()
        {
            return GlobalHost.ConnectionManager.GetHubContext<AsosCodingStyleHub>();
        }
    }
}