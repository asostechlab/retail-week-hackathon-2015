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
            AsosCodingStyleHub.SendMessage("Your return has been received!");

            return RedirectToAction("Index");
        }
    }
}