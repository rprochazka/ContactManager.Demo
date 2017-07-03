using System;
using ContactManager.Common.Configs;
using Microsoft.Extensions.Logging;

namespace ContactManager.Data.EfCore
{
    public class ContactDbContextFactory : IContactDbContextFactory
    {
        private readonly ApplicationConfig appConfig;
        private readonly ILoggerFactory loggerFactory;        

        public ContactDbContextFactory(Microsoft.Extensions.Options.IOptions<ApplicationConfig> appConfig, ILoggerFactory loggerFactory)
        {
            this.appConfig = appConfig.Value ?? throw new ArgumentNullException(nameof(appConfig));
            this.loggerFactory = loggerFactory ?? throw new ArgumentNullException(nameof(loggerFactory));            
        }

        public ContactDbContext Create()
        {           
            var context = new ContactDbContext(appConfig.SqlDbConnectionString, loggerFactory);
            //context.Database.EnsureCreated();

            return context;
        }      
    }
}
