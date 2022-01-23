import { useState } from 'react';
import { searchUsersByName } from '../../../utils/api-routes/user';

const useSearch = () => {
    const [ownersOptions, setOwnersOptions] = useState<any>([]);
    const [usersOptions, setUsersOptions] = useState<any>([]);

    const onUserChange = async (string: string) => {
        if (string) {
            const users = await searchUsersByName(string);
            setUsersOptions(users);
        }
    };

    const onOwnerChange = async (string: string) => {
        if (string) {
            const users = await searchUsersByName(string);
            setOwnersOptions(users);
        }
    };

    return {
        ownersOptions,
        usersOptions,
        onUserChange,
        onOwnerChange,
    };
};

export default useSearch;
