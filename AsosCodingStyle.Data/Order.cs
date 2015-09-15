using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeLite;

namespace AsosCodingStyle.Data
{
    [TsClass]
    public class Order
    {
        public string Id { get; set; }

        public List<OrderItem> Items { get; set; }

        public DateTime DateCreated { get; set; }
    }
}
