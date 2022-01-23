/* eslint-disable prettier/prettier */
import Axios from 'axios';
import { baseURL } from '../../config';
import store from '../../stores/store';
import { IUserContext } from '../../stores/user/user.interface';
// import { formatADUser } from '@/utils/user';

// /**
//  * getUserByKartoffelId returns the user by the kartoffelId
//  * @param kartoffelId is the user kartoffel id
//  */
// export async function getUserByKartoffelId(kartoffelId) {
//     try {
//         console.log('before res');
//         const res = await Axios.get(`${baseURL}/api/users/kartoffel/${kartoffelId}`).catch((err) => console.log('errrrr', err));
//         console.log('after res');
//         const user = formatKartoffelUser(res.data);
//         store.commit('addUserToictionary', user);
//         console.log(user);
//         return user;
//     } catch (error) {
//         store.dispatch('onError', error);
//     }
// }

// /**
//  * getUserByDomainUser returns the user by the domain user
//  * @param domainUser is the user domain user
//  * */
// export async function getUserByDomainUser(domainUser) {
//     try {
//         const res = await Axios.get(`${baseURL}/api/users/domainuser/${domainUser}`);
//         const user = formatKartoffelUser(res.data);
//         store.commit('addUserToictionary', user);
//         return user;
//     } catch (error) {
//         store.dispatch('onError', error);
//     }
// }

export async function searchUsersByName(name: string): Promise<IUserContext[]> {
    try {
        const res = await Axios.get(`${baseURL}/api/users`, {
            params: { partialName: name },
        });
        const users = res.data ? res.data.filter((user: IUserContext) => {
            return user.id !== (store.getState().user as IUserContext)?.id;
        }) : [];
        return Promise.all(users);
    } catch (err) {
        store.dispatch({ type: 'onError' as any, payload: err as any });
        return [];
    }
}

// /**
//  * isApprover checks if the user is an approver
//  * */
// export async function isApprover() {
//     try {
//         const res = await Axios.get(`${baseURL}/api/users/approver`);
//         return res.data;
//     } catch (error) {
//         store.dispatch('onError', error);
//     }
// }

// /**
//  * isSuperUser checks if the user is admin
//  * */
// export async function isSuperUser() {
//     try {
//         const res = await Axios.get(`${baseURL}/api/users/super`);
//         return res.data;
//     } catch (error) {
//         store.dispatch('onError', error);
//     }
// }

// /**
//  * searchApproverByName gets all the approvers with the received name
//  * @param name is the name of the approver
//  */
// export async function searchApproverByName(groupType, name) {
//     try {
//         // return await searchUsersByName(name);
//         // TODO: use this for real approvers
//         const res = await Axios.get(`${baseURL}/api/users/approvers/${groupType}`, {
//             params: { partialName: name },
//         });
//         const users = res.data
//             ? res.data.filter((user) => {
//                   return user.id !== store.state.auth.user.id;
//               })
//             : [];
//         return Promise.all(users.map((user) => formatKartoffelUser(user)));
//     } catch (error) {
//         store.dispatch('onError', error);
//     }
// }
