import axios from '../axios';
import { IUserContext } from '../stores/index';
import { trycatch } from '../utils/trycatch';

export class UserService {
    static getUser = async () => {
        const { result, err } = await trycatch(() => axios.get('/api/user'));

        if (err) {
            throw err;
        }

        return result!.data as IUserContext;
    };
}
