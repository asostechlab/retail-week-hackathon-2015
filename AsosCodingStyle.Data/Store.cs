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
        public static List<Product> Products
        {
            get
            {
                var products = JsonConvert.DeserializeObject<List<Product>>(Resources.Data);
//                products.Add(new Product { ProductId = 1, Colour = "Black", Size = "L", Description = "Diesel Larkee 8Xr Straight Fit Jeans", ImageUrl = "" });
                return products;
            }
        }
    }
}
