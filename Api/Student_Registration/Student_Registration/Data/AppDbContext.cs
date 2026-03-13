using Microsoft.EntityFrameworkCore;
using Student_Registration.Model.Domain;

namespace Student_Registration.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Admin> Admins { get; set; }    

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            
            modelBuilder.Entity<Admin>().HasData(
                new Admin
                {
                    Id = 1,
                    Name = "Admin",
                    Email = "admin@admin.com",
                    Password = "admin" 
                }
            );
        }
    }
}
