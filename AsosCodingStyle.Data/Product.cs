using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeLite;

namespace AsosCodingStyle.Data
{
    [TsClass]
    public class Product
    {
        public int ProductId { get; set; }

        public string Description { get; set; }

        public string Size { get; set; }

        public string Colour { get; set; }

        public string ImageUrl { get; set; }

    }
}
