using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeLite;

namespace AsosCodingStyle.Data
{
    [TsClass]
    public class ReturnCollect
    {
        public Address Address { get; set; }

        public DateTime Date { get; set; }
    }
}
