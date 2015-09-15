using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace AsosCodingStyle.Data
{
    public class Store
    {
        public static List<OrderItemFeedback> OrderItemFeedbackOptions
        {
            get { return new[] { new OrderItemFeedback { FeedbackType = OrderItemFeedbackType.LoveTheColour, Description = "Love the colour" }, new OrderItemFeedback { FeedbackType = OrderItemFeedbackType.LoveTheSize, Description = "Love the size" }, new OrderItemFeedback { FeedbackType = OrderItemFeedbackType.LoveTheFeel, Description = "Love the feel" } }.ToList(); }
        }

        public static List<Product> Products
        {
            get
            {
                var products = JsonConvert.DeserializeObject<List<Product>>(Resources.Data);
                return products;
            }
        }
    }
}
