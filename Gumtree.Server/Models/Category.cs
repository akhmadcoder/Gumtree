using System.ComponentModel.DataAnnotations;

namespace Gumtree.Server.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public ICollection<Subcategory> Subcategories { get; set; }

        public bool IsDeleted { get; set; } = false;
    }
}
