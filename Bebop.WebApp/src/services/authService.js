import {oidcConfig} from '../utils/oidcEndpoints'
import {UserManager, User, Log} from 'oidc-client'

export default class AuthService {
    userManager;

    constructor() {
        const settings = {
            authority: 'http://localhost:5000',
            client_id: 'oidcclient',
            redirect_uri: "http://localhost:3000/signin-oidc", 
            silent_redirect_uri: "http://localhost:3000/silentrenew-oidc", 
            post_logout_redirect_uri: "http://localhost:3000", 
            response_type: "code",
            scope: "openid profile bebopclientapi"
        }

        this.userManager = new UserManager(settings)
        Log.logger = console
        Log.level = Log.INFO
    }

    getUser() {
        return this.userManager.getUser()
    }

    login() {
        return this.userManager.signinRedirect()
    }

    renewToken() {
        return this.userManager.signinSilent()
    }

    logout() {
        return this.userManager.signoutRedirect()
    }

}
