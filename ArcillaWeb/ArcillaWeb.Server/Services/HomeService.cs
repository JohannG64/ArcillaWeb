using ArcillaWeb.Server.Models;

namespace ArcillaWeb.Server.Services
{
    public class HomeService
    {
        private ApplicationDbContext _context;
        public HomeService(ApplicationDbContext context) { 
            _context = context;
        }
    }
}
