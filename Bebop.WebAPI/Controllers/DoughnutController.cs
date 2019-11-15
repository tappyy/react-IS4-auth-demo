using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("doughnuts")]
    [Authorize]
    [ApiController]
    public class DoughnutsController : ControllerBase
    {
        private readonly List<Doughnut> Doughnuts = new List<Doughnut>()
        {
            new Doughnut
            {
                Name = "Holey Moley",
                Filling = "None",
                Iced = true,
                Price = 1.99
            },
            new Doughnut
            {
                Name = "Berry Nice",
                Filling = "Raspberry",
                Iced = false,
                Price = 2.99
            },
            new Doughnut
            {
                Name = "Chip Off The Old Choc",
                Filling = "Chocolate",
                Iced = false,
                Price = 2.99
            },
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Doughnuts);
        }
    }
}
