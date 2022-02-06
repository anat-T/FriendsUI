import jwtDecode from 'jwt-decode';
import cookies from 'js-cookie';
import axiosInstance from 'axios';
// import axios from '../axios';
import { environment } from '../globals';
import { IUserContext } from '../stores/user/user.interface';
import { baseURL } from '../config';

export class AuthService {
    static authAxios = axiosInstance.create({
        withCredentials: true,
        timeout: 5000,
    });

    static getUser = async () => {
        console.log(baseURL);
        // console.log(await axios.get('http://localhost:8080/api/users'));
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
        // eslint-disable-next-line no-undef
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
