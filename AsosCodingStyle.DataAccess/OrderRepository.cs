using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AsosCodingStyle.Data;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;

namespace AsosCodingStyle.DataAccess
{
    public class OrderRepository {
        private const string EndpointUrl = "https://asos-codingstyle-hackathon.documents.azure.com:443/";
        private const string AuthorizationKey = "vTsjSQ2x2UDKhGFl4dumk/cZ3N8+xv5iM0kdZqU4bwtecYyGhslYxF26fCkCjwL9K/Hf3NzChiiBo6oBPWoFHg==";
        private const string DatabaseId = "hackathon";
        private DocumentClient _client;

        public async Task<Order> GetOrder(string orderId)
        {
            using (_client = new DocumentClient(new Uri(EndpointUrl), AuthorizationKey))
            {
                var dbQuery = _client.CreateDatabaseQuery().Where(c => c.Id == DatabaseId);
                var database = dbQuery.ToArray().FirstOrDefault() ?? await _client.CreateDatabaseAsync(new Database { Id = DatabaseId });

                var collection = await GetOrCreateCollectionAsync(database, "Order");

                return _client.CreateDocumentQuery<Order>(collection.SelfLink).FirstOrDefault(order => order.Id == orderId);
            }
        }

        public async Task SaveOrder(Order orderToSave)
        {
            using (_client = new DocumentClient(new Uri(EndpointUrl), AuthorizationKey))
            {
                var dbQuery = _client.CreateDatabaseQuery().Where(c => c.Id == DatabaseId);
                var database = dbQuery.ToArray().FirstOrDefault() ?? await _client.CreateDatabaseAsync(new Database { Id = DatabaseId });

                var collection = await GetOrCreateCollectionAsync(database, "Order");

               var existingOrder =_client.CreateDocumentQuery<Order>(collection.SelfLink).FirstOrDefault(order => order.Id == orderToSave.Id);
                dynamic doc = _client.CreateDocumentQuery<Document>(collection.SelfLink).Where(d => d.Id == orderToSave.Id).AsEnumerable().FirstOrDefault();


                //if (existingOrder != null)
                //{
                //    Document updatedOrder = await _client.ReplaceDocumentAsync();
                //}
                //else
                //{
                    
                //}


                // return _client.CreateDocumentQuery<Order>(collection.SelfLink).FirstOrDefault(order => order.Id == orderId);
            }

        }

        private async Task<DocumentCollection> GetOrCreateCollectionAsync(Database db, string id)
        {
            using (_client = new DocumentClient(new Uri(EndpointUrl), AuthorizationKey))
            {
                DocumentCollection collection = _client.CreateDocumentCollectionQuery(db.SelfLink).Where(c => c.Id == id).ToArray().FirstOrDefault();

                if (collection == null)
                {
                    IndexingPolicy optimalQueriesIndexingPolicy = new IndexingPolicy();
                    optimalQueriesIndexingPolicy.IncludedPaths.Add(new IncludedPath
                    {
                        Path = "/*",
                        Indexes = new System.Collections.ObjectModel.Collection<Index>()
                        {
                            new RangeIndex(DataType.Number) {Precision = -1},
                            new RangeIndex(DataType.String) {Precision = -1}
                        }
                    });

                    DocumentCollection collectionDefinition = new DocumentCollection {Id = id};
                    collectionDefinition.IndexingPolicy = optimalQueriesIndexingPolicy;

                    collection = await CreateDocumentCollectionAsync(db, collectionDefinition);
                }

                return collection;
            }
        }

        public async Task<DocumentCollection> CreateDocumentCollectionAsync(
            Database database,
            DocumentCollection collectionDefinition,
            string offerType = "S1")
        {
            return await _client.CreateDocumentCollectionAsync(
                database.SelfLink,
                collectionDefinition,
                new RequestOptions
                {
                    OfferType = offerType
                });
        }
    }
}
