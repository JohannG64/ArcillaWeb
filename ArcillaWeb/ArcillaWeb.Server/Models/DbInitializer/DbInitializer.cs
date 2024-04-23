using Microsoft.EntityFrameworkCore;

namespace ArcillaWeb.Server.Models.DbInitializer
{
    public class DbInitializer: ApplicationDbContext
    {
        public string connectionString { get; set; }
        public DbInitializer(string ConnectionString)
        {
            this.connectionString = ConnectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (this.connectionString != null)
            {
                optionsBuilder.UseSqlServer(this.connectionString);
            }
            else
            {
                throw new InvalidOperationException("Error");
            }
        }
    }
}
