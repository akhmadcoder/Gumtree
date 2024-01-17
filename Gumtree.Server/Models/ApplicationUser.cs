using Gumtree.Server.Enums;
using Microsoft.AspNetCore.Identity;

namespace Gumtree.Server.Models
{
    public class ApplicationUser : IdentityUser
    {
        public Role Role { get; set; }
        public bool IsDeleted { get; set; } = false;
        public bool IsActive { get; set; } = true;

    }
}
