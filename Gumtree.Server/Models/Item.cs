using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gumtree.Server.Models
{
    public class Item
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public int Title { get; set; }

        [MaxLength(1000)]
        public string Description { get; set; }

        public int CityId { get; set; }
        [ForeignKey(nameof(CityId))]
        public City City { get; set; }

        [Required]
        [MaxLength(40)]
        public string Town { get; set; }

        public bool IsActive { get; set; } = false;

        public string UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public ApplicationUser User { get; set; }

        public int SubcategoryId { get; set; }
        [ForeignKey(nameof(SubcategoryId))]
        public Subcategory Subcategory { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set;}

        public ICollection<Image> Images { get; set; }

        [Range(0, int.MaxValue)]
        public int Views { get; set; }

        public bool IsDeleted { get; set; } = false;
    }
}
