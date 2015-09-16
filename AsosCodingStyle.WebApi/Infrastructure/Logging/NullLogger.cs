namespace AsosCodingStyle.WebApi.Infrastructure.Logging
{
    using System.Collections.Generic;
    using Asos.Framework.Logging;

    public class NullLogger : ILogger
    {
        public void Write(string sourceName, int id)
        {            
        }

        public void Write(string sourceName, int id, List<object> args)
        {
        }
    }
}