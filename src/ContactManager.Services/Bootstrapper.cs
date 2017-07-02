using System;
using Microsoft.Extensions.DependencyInjection;

namespace ContactManager.Services
{
    public static class Bootstrapper
    {
        public static void Init(IServiceCollection serviceCollection)
        {
            if (serviceCollection == null)
            {
                throw new ArgumentNullException(nameof(serviceCollection));
            }            
            serviceCollection.AddScoped<IContactService, ContactService>();
        }
    }
}
