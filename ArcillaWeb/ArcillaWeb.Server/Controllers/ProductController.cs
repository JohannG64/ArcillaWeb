using ArcillaWeb.Server.Models;
using ArcillaWeb.Server.Models.ParametersClasses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace ArcillaWeb.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : BaseController
    {
        public ProductController(IOptions<ConnectionString> connectionString) : base(connectionString)
        {
        }

        // POST: HomeController/Delete/5
        //Se obtiene la lista de imagenes de la base de datos de la Home Page
        [HttpGet("[action]")]
        public ActionResult<List<Product>> GetListProducts()
        {
            try
            {
                List<Product> products = context.Products.ToList();
                return products;
            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message);
            }
        }

        [HttpGet("[action]")]
        public ActionResult<List<Use>> GetListUses()
        {
            try
            {
                List<Use> uses = context.Uses.ToList();
                return uses;
            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message);
            }
        }

        [HttpGet("[action]")]
        public ActionResult<List<Material>> GetListMaterials()
        {
            try
            {
                List<Material> materials = context.Materials.ToList();
                return materials;
            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message);
            }
        }

        [HttpGet("[action]")]
        public ActionResult<List<Color>> GetListColors()
        {
            try
            {
                List<Color> colors = context.Colors.ToList();
                return colors;
            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message);
            }
        }

        [HttpGet("[action]/{reference}")]
        public ActionResult<Product> GetProduct(string reference)
        {
            try
            {
                Product product = context.Products.FirstOrDefault(x => x.Reference == reference);
                return product;
            }
            catch (Exception ex)
            {
                throw new ApplicationException(ex.Message);
            }
        }
    }
}
