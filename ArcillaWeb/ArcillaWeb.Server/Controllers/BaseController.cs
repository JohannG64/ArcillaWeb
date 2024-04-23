using ArcillaWeb.Server.Models;
using ArcillaWeb.Server.Models.DbInitializer;
using ArcillaWeb.Server.Models.ParametersClasses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace ArcillaWeb.Server.Controllers
{
    public class BaseController : ControllerBase
    {
        public IOptions<ConnectionString> connectionString;
        public ApplicationDbContext context { get; set; }

        public BaseController(IOptions<ConnectionString> connectionString)
        {
            this.connectionString = connectionString;
            this.context = new DbInitializer(this.connectionString.Value.dbcontextstring);

        }
    }
}
