using Microsoft.Extensions.DependencyInjection;
using System;
using ContactManager.Common.Configs;

namespace ContactManager.Common
{
    public static class Bootstrapper
    {
        public static void Init(IServiceCollection serviceCollection)
        {
            if (serviceCollection == null)
            {
                throw new ArgumentNullException(nameof(serviceCollection));
            }            
            serviceCollection.AddScoped<IApplicationConfig, ApplicationConfig>();
        }
    }
}
