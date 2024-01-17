using System.ComponentModel.DataAnnotations;

namespace Gumtree.Server.Models
{
    public class City
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public ICollection<Item> Items { get; set; }

        public bool IsDeleted { get; set; } = false;
    }
}
