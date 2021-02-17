import { environment } from './environments/environment';

export const Auth = {
    identityPoolId: environment.authData.IdentityPoolId,
    region: environment.authData.Region,
    identityPoolRegion: environment.authData.Region,
    userPoolId: environment.authData.UserPoolId,
    UserPoolWebClientId: environment.authData.UserPoolWebClientId
}