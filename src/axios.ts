import axiosInstance from 'axios';
import faker from 'faker';
import MockAdapter from 'axios-mock-adapter';

const axios = axiosInstance.create({
    withCredentials: true,
    timeout: 5000,
});

const mock = new MockAdapter(axios, { delayResponse: 500 });

const ranks = ['mega', 'rookie'];

const units = ['nitro unit', 'noUnit'];

const generateUser = () => {
    return {
        name: faker.name.findName(),
        id: faker.datatype.uuid(),
        adfsId: faker.datatype.uuid(),
        displayName: faker.name.findName(),
        unit: faker.random.arrayElement(units),
        rank: faker.random.arrayElement(ranks),
    };
};

mock.onGet('/api/user').reply(() => [200, generateUser()]);
mock.onGet('/api/config').reply(() => [
    200,
    {
        contactByMailLink: 'mailAdr@gmail.com',
        contactByChatLink: 'http://chat.com',
    },
]);

export default axios;
