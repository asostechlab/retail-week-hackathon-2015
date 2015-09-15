using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HtmlAgilityPack;
using Newtonsoft;
using Newtonsoft.Json;
using System.IO;

namespace AsosCodingStyle.Data.Scraper
{
    class Program
    {
        static void Main(string[] args)
        {
            var page = new HtmlDocument();
            page.Load(@"C:\Src\Retail Week Hackathon 2015\AsosCodingStyle.Data.Scraper\Product.html");

            var sourceProducts = page.DocumentNode.SelectNodes("//a[@class='productImage']");
            var products = new List<Product>();

            var id = 1;
            foreach (var sourceProduct in sourceProducts)
            {
                var description = sourceProduct.SelectSingleNode("img").Attributes["alt"].Value;
                products.Add(new Product { ProductId = id, Colour = "Blue", Size = "Large", Description=description, ImageUrl = sourceProduct.Attributes["href"].Value });
                id++;
            }

            using (var data = new StreamWriter(@"C:\Src\Retail Week Hackathon 2015\AsosCodingStyle.Data.Scraper\Data.html", false))
            {
                data.Write(JsonConvert.SerializeObject(products));
            }
        }
    }
}
