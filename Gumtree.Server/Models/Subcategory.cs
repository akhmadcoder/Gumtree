using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gumtree.Server.Models
{
    public class Subcategory
    {
        [Key]
        public int Id { get; set; }

        public int CategoryId { get; set; }
        [ForeignKey(nameof(CategoryId))]
        public Category Category { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public ICollection<Item> Items { get; set; }

        public bool IsDeleted { get; set; } = false;
    }
}
