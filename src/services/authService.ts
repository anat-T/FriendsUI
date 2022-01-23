import jwtDecode from 'jwt-decode';
import cookies from 'js-cookie';
import axiosInstance from 'axios';
import { environment } from '../globals';
import { IUserContext } from '../stores/user/user.interface';

export class AuthService {
    static authAxios = axiosInstance.create({
        withCredentials: true,
        timeout: 5000,
    });

    static getUser = () => {
        const accessToken = cookies.get(environment.accessTokenName);

        if (!accessToken) {
            AuthService.logout();
            return null;
        }

        const decodedToken = AuthService.parseUserToken(accessToken);

        if (!decodedToken) {
            AuthService.logout();
            return null;
        }

        return decodedToken;
    };

    static logout = () => {
        cookies.remove(environment.accessTokenName);
        window.location.replace(environment.api.login);
    };

    static parseUserToken = (token: string) => {
        try {
            return jwtDecode(token) as IUserContext & { exp: number; iat: number };
        } catch (error) {
            return null;
        }
    };
}
