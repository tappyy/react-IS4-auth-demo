// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityModel;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;

namespace IdentityServer4.Quickstart.UI
{
    public class TestUsers
    {
        public static List<TestUser> Users = new List<TestUser>
        {
            new TestUser{SubjectId = "1234", Username = "spiderman", Password = "spiderman", 
                Claims = 
                {
                    new Claim(JwtClaimTypes.Name, "Peter Parker"),
                    new Claim(JwtClaimTypes.GivenName, "Peter"),
                    new Claim(JwtClaimTypes.FamilyName, "Parker"),
                    new Claim(JwtClaimTypes.Email, "imspiderman@avengers.com"),
                    new Claim(JwtClaimTypes.EmailVerified, "true", ClaimValueTypes.Boolean),
                    new Claim(JwtClaimTypes.WebSite, "http://avengers.com")                    
                }
            }
        };
    }
}