using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace server_app.Controllers
{
    [Route("api/[controller]")]
    public class BusinessController : Controller
    {
        [HttpGet("[action]")]
        public void Do()
        {            
        }
    }
}
