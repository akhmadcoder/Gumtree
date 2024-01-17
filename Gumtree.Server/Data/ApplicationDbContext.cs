using Gumtree.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Gumtree.Server.Data
{
    public class ApplicationDbContext : IdentityUserContext<ApplicationUser>
    {
        public DbSet<Item> Items { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Subcategory> Subcategories { get; set; }
        public DbSet<City> Cities { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Soft-delete configuration
            modelBuilder.Entity<ApplicationUser>().HasQueryFilter(u => !u.IsDeleted);
            modelBuilder.Entity<Item>().HasQueryFilter(i => !i.IsDeleted);
            modelBuilder.Entity<Image>().HasQueryFilter(img => !img.IsDeleted);
            modelBuilder.Entity<Category>().HasQueryFilter(cat => !cat.IsDeleted);
            modelBuilder.Entity<Subcategory>().HasQueryFilter(sub => !sub.IsDeleted);
            modelBuilder.Entity<City>().HasQueryFilter(city => !city.IsDeleted);

            // Data seeding
            SeedData(modelBuilder);
        }

        private void SeedData(ModelBuilder modelBuilder)
        {
            //seed superadmin user
            ApplicationUser user = new ApplicationUser()
            {
                Id = "02174cf0–9412–4cfe-afbf-59f706d72cf6",
                UserName = "superadmin",
                Email = "superadmin@gumtree.uz",
                EmailConfirmed = true
            };

            PasswordHasher<ApplicationUser> passwordHasher = new PasswordHasher<ApplicationUser>();
            passwordHasher.HashPassword(user, "Admin!1");
            modelBuilder.Entity<ApplicationUser>().HasData(user);

            // Seed initial data for Cities
            modelBuilder.Entity<City>().HasData(
                new City { Id = 1, Name = "Tashkent" },
                new City { Id = 2, Name = "Sirdarya" },
                new City { Id = 3, Name = "Jizzakh" },
                new City { Id = 4, Name = "Samarkand" },
                new City { Id = 5, Name = "Urganch" },
                new City { Id = 6, Name = "Nukus" }
            );

            // Seed initial data for Categories
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Cars & Vehicles" },
                new Category { Id = 2, Name = "For Sale" },
                new Category { Id = 3, Name = "Property" },
                new Category { Id = 4, Name = "Jobs" },
                new Category { Id = 5, Name = "Services" },
                new Category { Id = 6, Name = "Community" },
                new Category { Id = 7, Name = "Pets" }
            );

            // Seed initial data for Subcategories
            modelBuilder.Entity<Subcategory>().HasData(
                new Subcategory { Id = 1, CategoryId = 1, Name = "Cars" },
                new Subcategory { Id = 2, CategoryId = 1, Name = "Motorbikes & Scooters" },
                new Subcategory { Id = 3, CategoryId = 1, Name = "Trucks" },
                new Subcategory { Id = 4, CategoryId = 1, Name = "Other Vehicles" },
                new Subcategory { Id = 5, CategoryId = 1, Name = "Accessories" },

                new Subcategory { Id = 6, CategoryId = 2, Name = "Computers & Software" },
                new Subcategory { Id = 7, CategoryId = 2, Name = "Phones & Accessories" },
                new Subcategory { Id = 8, CategoryId = 2, Name = "Men's Wear" },
                new Subcategory { Id = 9, CategoryId = 2, Name = "Woman's Wear" }

            );

            // Add more seed data as needed
        }
    }
}
