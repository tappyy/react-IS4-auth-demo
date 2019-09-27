import { oidcConfig } from '../utils/oidcEndpoints'
import { UserManager, User, Log, WebStorageStateStore } from 'oidc-client'

export default class AuthService {
    UserManager;

    constructor() {
        const settings = {
            authority: 'https://localhost:5001',
            client_id: 'oidcclient',
            redirect_uri: "http://localhost:3000/signin-oidc/",
            silent_redirect_uri: "http://localhost:3000/silentrenew-oidc/",
            post_logout_redirect_uri: "http://localhost:3000/",
            response_type: "id_token token",
            scope: "openid profile bebopclientapi"
        }

        this.UserManager = new UserManager(
            {
                ...settings,
                userStore: new WebStorageStateStore({ store: window.localStorage })
            })

        Log.logger = console
        Log.level = Log.INFO
        this.UserManager.events.addUserLoaded(user => {
            this.accessToken = user.access_token;
            localStorage.setItem("access_token", user.access_token);
            localStorage.setItem("id_token", user.id_token);
            this.setUserInfo({
                accessToken: this.accessToken,
                idToken: user.id_token
            });
            if (window.location.href.indexOf("signin-oidc") !== -1) {
                this.navigateToScreen();
            }
        });
        this.UserManager.events.addSilentRenewError(e => {
            console.log("silent renew error", e.message);
        });

        this.UserManager.events.addAccessTokenExpired(() => {
            console.log("token expired");
            this.signinSilent();
        });
    }

    getUser() {
        return this.UserManager.getUser()
    }

    signinRedirect() {
        return this.UserManager.signinRedirect()
    }

    silentRenew() {
        return this.UserManager.signinSilent()
    }

    signoutRedirect() {
        return this.UserManager.signoutRedirect()
    }

}
