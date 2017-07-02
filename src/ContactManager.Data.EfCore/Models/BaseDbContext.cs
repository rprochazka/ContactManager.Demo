using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ContactManager.Data.EfCore.Models
{
    public partial class BaseDbContext : DbContext
    {
        public virtual DbSet<Contact> Contact { get; set; }
        public virtual DbSet<ContactGroup> ContactGroup { get; set; }
        public virtual DbSet<ContactsContactGroups> ContactsContactGroups { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=ContactManager;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=True;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>(entity =>
            {
                entity.Property(e => e.City).HasMaxLength(100);

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.PhoneNumber).HasMaxLength(10);

                entity.Property(e => e.Street).HasColumnType("nchar(100)");

                entity.Property(e => e.ZipCode).HasMaxLength(50);
            });

            modelBuilder.Entity<ContactGroup>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<ContactsContactGroups>(entity =>
            {
                entity.HasOne(d => d.ContactGroup)
                    .WithMany(p => p.ContactsContactGroups)
                    .HasForeignKey(d => d.ContactGroupId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_ContactContactGroup_ContactGroup");

                entity.HasOne(d => d.Contact)
                    .WithMany(p => p.ContactsContactGroups)
                    .HasForeignKey(d => d.ContactId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_ContactContactGroup_Contact");
            });
        }
    }
}