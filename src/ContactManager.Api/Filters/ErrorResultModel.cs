using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;

namespace ContactManager.Api.Filters
{
    public partial class GlobalExceptionFilter : IExceptionFilter
    {
        public class ErrorResultModel
        {
            public string Message { get; set; }

            [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
            public string StackTrace { get; set; }
        }        
    }    
}
