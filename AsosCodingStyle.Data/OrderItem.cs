using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeLite;

namespace AsosCodingStyle.Data
{
    [TsClass]
    public class OrderItem
    {
        public int OrderItemId { get; set; }

        public Product Product { get; set; }

        public int Quantity { get; set; }

        public double Price { get; set; }

        public OrderItemReturn Return { get; set; }

        public List<OrderItemFeedbackType> FeedbackTypes { get; set; }
    }
}
