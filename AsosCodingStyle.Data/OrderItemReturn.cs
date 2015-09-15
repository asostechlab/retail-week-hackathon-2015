using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AsosCodingStyle.Data
{
    public class OrderItemReturn
    {
        public ReturnReasonType Reason { get; set; }
        
        public string ExtraInformation { get; set; } 
    }
}
