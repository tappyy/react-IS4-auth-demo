// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4.Models;
using System.Collections.Generic;
using IdentityServer4.Test;
using IdentityServer4;

namespace IdentityServer
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };
        }

        public static IEnumerable<ApiResource> GetApis()
        {
            return new List<ApiResource>
            {
                // test api that will authenticate via shared secret only
                new ApiResource("bebopclientapi", "Bebop Test Client API")
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "webappsecret",

                    // no user logon (just client) - use shared secret for authentication
                    AllowedGrantTypes = GrantTypes.ClientCredentials,

                    // secret used for authentication
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },

                    // resources this client is allowed access too
                    AllowedScopes =
                    {
                        "bebopclientapi"
                    }
                },
                new Client
                {
                    ClientId = "usernamepassword",

                    // logon using username and password
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

                    // secret used for authentication
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },

                    // resources this client is allowed access too
                    AllowedScopes =
                    {
                        "bebopclientapi"
                    }
                },
                // OpenID Connect implicit flow client (MVC)
                new Client
                {
                    ClientId = "oidcclient",
                    ClientName = "OpenID Connect Client",
                    AllowedGrantTypes = GrantTypes.Implicit,

                    // where to redirect to after login
                    RedirectUris = { "http://localhost:3000/signin-oidc" },

                    // where to redirect to after logout
                    PostLogoutRedirectUris = { "http://localhost:3000/signout-callback-oidc" },

                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "bebopclientapi"
                    }
                }
            };
        }

        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "1",
                    Username = "andy",
                    Password = "password1"
                },
                new TestUser
                {
                    SubjectId = "2",
                    Username = "spooner",
                    Password = "password2"
                }
            };
        }
    }
}