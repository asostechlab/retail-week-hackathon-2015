namespace AsosCodingStyle.DataAccess
{
    using System.Linq;
    using System.Threading.Tasks;
    using Data;
    using MongoDB.Bson;
    using MongoDB.Driver;

    public class OrderRepository
    {
        private const string ConnectionString =
            "mongodb://asoscodingstyle:asoscodingstyle1@ds051851.mongolab.com:51851/asoscodingstyle";

        private const string OrderCollection = "orders";
        private readonly IMongoCollection<Order> orderCollection;

        public OrderRepository()
        {
            var client = new MongoClient(ConnectionString);
            var database = client.GetDatabase("asoscodingstyle");

            orderCollection = database.GetCollection<Order>(OrderCollection);
        }

        public async Task<Order> GetOrder(string orderId)
        {
            var list = await orderCollection.Find(new BsonDocument("Id", orderId))
                .ToListAsync();

            return list.FirstOrDefault();
        }

        public async Task SaveOrder(Order orderToSave)
        {
            var filter = Builders<Order>.Filter.Eq(s => s.Id, orderToSave.Id);

            var result = await orderCollection.FindOneAndReplaceAsync(filter, orderToSave);

            if (result == null)
            {
                await orderCollection.InsertOneAsync(orderToSave);
            }
        }
    }
}