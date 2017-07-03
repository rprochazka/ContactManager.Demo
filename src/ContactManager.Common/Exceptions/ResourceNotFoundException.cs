using System;

namespace ContactManager.Common.Exceptions
{
    public class ResourceNotFoundException : Exception
    {
        public string ErrorMessage { get; set; }

        public ResourceNotFoundException(string errorMessage) : base(errorMessage)
        {

        }
    }
}
