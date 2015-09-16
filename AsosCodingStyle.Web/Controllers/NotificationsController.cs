namespace AsosCodingStyle.Web.Controllers
{
    using System.Web.Mvc;

    public class NotificationsController : Controller
    {
        // GET: Notifications
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SendReturnReceivedMessage()
        {
            AsosCodingStyleHub.SendReturnedPackageReceivedNotification();

            return RedirectToAction("Index");
        }

        public ActionResult SendPaymentMadeMessage()
        {
            AsosCodingStyleHub.SendPaymentMadeNotification();

            return RedirectToAction("Index");
        }

    }
}