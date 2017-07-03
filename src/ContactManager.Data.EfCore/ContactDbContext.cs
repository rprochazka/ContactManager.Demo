using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ContactManager.Data.EfCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Logging;

namespace ContactManager.Data.EfCore
{   
    public class ContactDbContext :  BaseDbContext
    {        
        readonly string connectionString;
        private readonly ILoggerFactory loggerFactory;        

        public ContactDbContext(string connectionString, ILoggerFactory loggerFactory) 
        {
            if (string.IsNullOrWhiteSpace(connectionString))
            {
                throw new ArgumentNullException(nameof(connectionString));
            }
            
            this.connectionString = connectionString;
            this.loggerFactory = loggerFactory ?? throw new ArgumentNullException(nameof(loggerFactory));            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(connectionString);
            optionsBuilder.UseLoggerFactory(loggerFactory);               
        }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            foreach (var relationship in modelbuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            base.OnModelCreating(modelbuilder);
        }


        private void OnSaveChanges()
        {            
            //var entities = this.ChangeTracker.Entries().Where(x => x.State == EntityState.Added || x.State == EntityState.Modified);

            //foreach (var entity in entities)
            //{
            //    foreach (var objectProperty in entity.Entity.GetType().GetProperties())
            //    {
                    
            //    }
            //}
        }

        public override int SaveChanges()
        {
            this.OnSaveChanges();
            return base.SaveChanges();            
        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            this.OnSaveChanges();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
        {
            this.OnSaveChanges();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            this.OnSaveChanges();
            return base.SaveChangesAsync(cancellationToken);
        }
        
    }
}
