import axiosInstance from 'axios';
// import faker from 'faker';
// import MockAdapter from 'axios-mock-adapter';
import cookies from 'js-cookie';
import { environment } from './globals';

const axios = axiosInstance.create({
    withCredentials: true,
    timeout: 5000,
    baseURL: '/',
});

// const mock = new MockAdapter(axios, { delayResponse: 500 });

// const ranks = ['mega', 'rookie'];

// const units = ['nitro unit', 'noUnit'];

// const generateUser = () => {
//     return {
//         name: faker.name.findName(),
//         id: faker.datatype.uuid(),
//         adfsId: faker.datatype.uuid(),
//         displayName: faker.name.findName(),
//         unit: faker.random.arrayElement(units),
//         rank: faker.random.arrayElement(ranks),
//     };
// };

// mock.onGet('/api/user').reply(() => [200, generateUser()]);
// mock.onGet('/api/config').reply(() => [
//     200,
//     {
//         contactByMailLink: 'mailAdr@gmail.com',
//         contactByChatLink: 'http://chat.com',
//     },
// ]);

axios.interceptors.request.use(
    async (config) => {
        const accessToken = cookies.get(environment.accessTokenName);

        if (accessToken) {
            // eslint-disable-next-line no-param-reassign
            config.headers.authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

export default axios;
