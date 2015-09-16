using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeLite;

namespace AsosCodingStyle.Data
{
    [TsClass]
    public class Address
    {
        public string AddressLine1 { get; set; }

        public string AddressLine2 { get; set; }

        public string City { get; set; }

        public string PostCode { get; set; }
    }
}
