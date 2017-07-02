using System;
using Microsoft.Extensions.DependencyInjection;

namespace ContactManager.Data.EfCore
{
    public static class Bootstrapper
    {
        public static void Init(IServiceCollection serviceCollection)
        {
            if (serviceCollection == null)
            {
                throw new ArgumentNullException(nameof(serviceCollection));
            }
            serviceCollection.AddTransient<IContactDbContextFactory, ContactDbContextFactory>();
        }
    }
}
