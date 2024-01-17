using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gumtree.Server.Models
{
    public class Image
    {
        [Key]
        public int Id { get; set; }
        public int ItemId { get; set; }
        [ForeignKey(nameof(ItemId))]
        public Item Item { get; set; }

        public string Name { get; set; }

        public bool IsDeleted { get; set; } = false;
    }
}
