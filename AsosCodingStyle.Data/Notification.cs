using System;
using TypeLite;

namespace AsosCodingStyle.Data
{
    [TsClass]
    public class Notification
    {
        public string Message { get; set; }

        public DateTime DateTime { get; set; }

        public string FormattedDateTime
        {
            get
            {
                // yes, yes.. I know.. I deserve to be shot.. but it is 18 hours in to the hackathon, and I have absolutely no inclination to setup a nice date formatting library in Javascript
                return DateTime.ToString("f");
            }
        }

    }
}