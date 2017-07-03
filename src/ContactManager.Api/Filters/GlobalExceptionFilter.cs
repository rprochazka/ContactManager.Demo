using System;
using ContactManager.Common.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

namespace ContactManager.Api.Filters
{
    public partial class GlobalExceptionFilter : IExceptionFilter
    {
        private readonly ILogger _logger;
        private bool showFriendlyError;

        public GlobalExceptionFilter(ILoggerFactory logger, bool showFriendlyError = true)
        {
            this._logger = logger?.CreateLogger("Global Exception Filter") ?? throw new ArgumentNullException(nameof(logger));
            this.showFriendlyError = showFriendlyError;
        }

        public void OnException(ExceptionContext context)
        {
            var exception = context.Exception;

            IActionResult result;        
            if (exception is ResourceNotFoundException)
            {
                result = HandleResourceNotFoundException(exception);
            }
            else
            {
                result = HandleGenericException(exception);
            }

            context.Result = result;

            this._logger.LogError("GlobalExceptionFilter", context.Exception.InnerException ?? context.Exception);
        }

        private IActionResult HandleResourceNotFoundException(Exception exception)
        {
            return new ObjectResult(new ErrorResultModel {Message = exception.Message})
            {
                StatusCode = 404,
                DeclaredType = typeof(ErrorResultModel)
            };            
        }

        private IActionResult HandleGenericException(Exception ex)
        {
            var exception = ex.InnerException ?? ex;

            ErrorResultModel errorResultModel = null;
            if (showFriendlyError)
            {
                errorResultModel = new ErrorResultModel
                {
                    Message = "Internal server error"
                };                
            }
            else
            {
                errorResultModel = new ErrorResultModel()
                {
                    Message = exception.Message,
                    StackTrace = exception.StackTrace
                };
            }
            
            return new ObjectResult(errorResultModel)
            {
                StatusCode = 500,
                DeclaredType = typeof(ErrorResultModel)
            };
        }
    }    
}
