// export const IDENTITY_CONFIG = {
//     authority: "http://localhost:5000", //(string): The URL of the OIDC provider.
//     client_id: "oidcclient", //(string): Your client application's identifier as registered with the OIDC provider.
//     redirect_uri: process.env.REACT_APP_REDIRECT_URL, //The URI of your client application to receive a response from the OIDC provider.
//     login: process.env.REACT_APP_AUTH_URL + "/login",
//     automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
//     loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
//     silent_redirect_uri: process.env.REACT_APP_SILENT_REDIRECT_URL, //(string): The URL for the page containing the code handling the silent renew.
//     post_logout_redirect_uri: process.env.REACT_APP_LOGOFF_REDIRECT_URL, // (string): The OIDC post-logout redirect URI.
//     audience: "http://example.com", //is there a way to specific the audience when making the jwt
//     responseType: "id_token token", //(string, default: 'id_token'): The type of response desired from the OIDC provider.
//     grantType: "password",
//     scope: "openid example.api", //(string, default: 'openid'): The scope being requested from the OIDC provider.
//     webAuthResponseType: "id_token token"
// };

// export const METADATA_OIDC = {
//     issuer: "http://identityserver",
//     jwks_uri: process.env.REACT_APP_AUTH_URL + "/.well-known/openid-configuration/jwks",
//     authorization_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/authorize",
//     token_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/token",
//     userinfo_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/userinfo",
//     end_session_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/endsession",
//     check_session_iframe: process.env.REACT_APP_AUTH_URL + "/connect/checksession",
//     revocation_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/revocation",
//     introspection_endpoint: process.env.REACT_APP_AUTH_URL + "/connect/introspect"
// };

export const oidcConfig = {
    authority: 'http://localhost:5000',
    client_id: 'oidcclient',
    redirect_uri: "http://localhost:3000/signin-oidc", // frontend endpoint to handle the response from OIDC provider
    response_type: "code",
    scope: "openid profile bebopclientapi"
}