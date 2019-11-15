using System;
namespace WebAPI.Models
{
    public class Doughnut
    {
        public string Name { get; set; }
        public string Filling { get; set; }
        public bool Iced { get; set; }
        public double Price { get; set; }
    }
}
