import { UserManager } from 'oidc-client';

const config = {
  authority: "https://localhost:5001",
  client_id: "spa",
  redirect_uri: "http://localhost:3000/callback",
  response_type: "id_token token",
  scope: "openid profile",
  post_logout_redirect_uri: "http://localhost:3000",
};

const userManager = new UserManager(config)

export default userManager