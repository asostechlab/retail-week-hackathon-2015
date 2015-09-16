using System.Threading.Tasks;
using Microsoft.Azure.NotificationHubs;

namespace AsosCodingStyle.Web.Notifications
{
    public class Notifications
    {
        private const string NotificationHubConnectionString = "Endpoint=sb://asoscodingstyle-ns.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=1aHxtDcH6pV9DroRI8hNZ/I/LvDvbpqEpmqM0noxYh4=";
        private const string NotificationHubPath = "asoscodingstyle";

        public static Notifications Instance = new Notifications();

        public NotificationHubClient Hub { get; set; }

        private Notifications()
        {
            Hub = NotificationHubClient.CreateClientFromConnectionString(NotificationHubConnectionString, NotificationHubPath);
        }

        public async Task Send(string message)
        {
            var notificationMessage = "{ \"data\" : {\"message\":\"" + message + "\"}}";

            await Instance.Hub.SendGcmNativeNotificationAsync(notificationMessage);
        }
    }
}
