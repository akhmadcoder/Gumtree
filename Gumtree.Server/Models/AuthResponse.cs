﻿namespace Gumtree.Server.Models
{
    public class AuthResponse
    {
        public string Email { get; set; } = null!;
        public string Username { get; set; }
        public string Token { get; set; } = null!;
    }
}
