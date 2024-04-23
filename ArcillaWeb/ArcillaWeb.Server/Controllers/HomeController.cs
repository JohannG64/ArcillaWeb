using ArcillaWeb.Server.Models;
using ArcillaWeb.Server.Models.ParametersClasses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace ArcillaWeb.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : BaseController
    {
        public ConnectionString connectionString;
        private readonly string HOME_CATEGORY = "HomePage";
        public HomeController(IOptions<ConnectionString> connectionString) : base(connectionString)
        {
            this.connectionString = connectionString.Value;
        }


        // POST: HomeController/Delete/5
        //Se obtiene la lista de imagenes de la base de datos de la Home Page
        [HttpGet("[action]")]
        public ActionResult<List<string>> GetListImages()
        {
            try
            {
                List<string> linksImages = new List<string>();
                foreach (Image img in context.Images)
                {
                    if (img.Category == this.HOME_CATEGORY)
                    {
                        linksImages.Add(img.Link);
                    }

                }
                return linksImages;
            }catch (Exception ex)
            {
                throw new ApplicationException(ex.Message);
            }            
        }

        
    }
}
