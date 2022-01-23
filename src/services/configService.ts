import axios from '../axios';
import { IConfigContext } from '../stores/config/config.interface';
import { trycatch } from '../utils/trycatch';

export class ConfigService {
    static getConfig = async () => {
        const { result, err } = await trycatch(() => axios.get('/api/config'));

        if (err) {
            throw err;
        }

        return result!.data as IConfigContext;
    };
}
