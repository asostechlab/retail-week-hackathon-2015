﻿using System;
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
        static string OutputFolderPath = @"C:\ASOS\RH2\AsosCodingStyle.Data.Scraper";

        static void Main(string[] args)
        {
            ScrapeProducts();
        }

        static void ScrapeProducts()
        {
            var page = new HtmlDocument();
            page.Load(Path.Combine(OutputFolderPath, "Product.html"));

            var sourceProducts = page.DocumentNode.SelectNodes("//a[@class='productImage']");
            var products = new List<Product>();

            var id = 1;
            foreach (var sourceProduct in sourceProducts)
            {
                var imgNode = sourceProduct.SelectSingleNode("img");
                var description = imgNode.Attributes["alt"].Value;
                products.Add(new Product { ProductId = id, Colour = "Blue", Size = "Large", Description = description, ImageUrl = imgNode.Attributes["src"].Value });
                id++;
            }

            using (var data = new StreamWriter(Path.Combine(OutputFolderPath, "Data.html"), false))
            {
                data.Write(JsonConvert.SerializeObject(products));
            }
        }

        static void GenerateOrder()
        {
            var orderItems = new List<OrderItem>();
            var products = Store.Products;
            var prices = new List<double>() { 69.99, 49.99, 90.00, 75.00, 39.99, 28.50 };

            for (var i = 0; i < 6; i++)
            {
                orderItems.Add(new OrderItem { OrderItemId = i, Product = products[i], Quantity = 1, Price = prices[new Random().Next(5)] });
            }

            var order = new Order { Id = 1.ToString(), DateCreated = DateTime.UtcNow, Items = orderItems };

            using (var data = new StreamWriter(Path.Combine(OutputFolderPath, "Order.txt"), false))
            {
                data.Write(JsonConvert.SerializeObject(order));
            }
        }
    }
}
