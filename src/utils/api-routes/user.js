import Axios from 'axios';
import store from '@/store';
import { baseURL } from '@/config';
import { formatKartoffelUser, formatADUser } from '@/utils/user';

/**
 * getUserByKartoffelId returns the user by the kartoffelId
 * @param kartoffelId is the user kartoffel id
 */
export async function getUserByKartoffelId(kartoffelId) {
    try {
        console.log('before res');
        const res = await Axios.get(`${baseURL}/api/users/kartoffel/${kartoffelId}`).catch((err) => console.log('errrrr', err));
        console.log('after res');
        const user = formatKartoffelUser(res.data);
        store.commit('addUserToictionary', user);
        console.log(user);
        return user;
    } catch (error) {
        store.dispatch('onError', error);
    }
}

/**
 * getUserByDomainUser returns the user by the domain user
 * @param domainUser is the user domain user
 * */
export async function getUserByDomainUser(domainUser) {
    try {
        const res = await Axios.get(`${baseURL}/api/users/domainuser/${domainUser}`);
        const user = formatKartoffelUser(res.data);
        store.commit('addUserToictionary', user);
        return user;
    } catch (error) {
        store.dispatch('onError', error);
    }
}

/**
 * searchUsersByName gets all the users with the received name
 * @param name is the name of the users
 */
export async function searchUsersByName(name) {
    try {
        const res = await Axios.get(`${baseURL}/api/users`, {
            params: { partialName: name },
        });
        const users = res.data
            ? res.data.filter((user) => {
                  return user.id !== store.state.auth.user.id;
              })
            : [];

        return Promise.all(users.map((user) => formatADUser(user)));
    } catch (err) {
        store.dispatch('onError', err);
    }
}

/**
 * isApprover checks if the user is an approver
 * */
export async function isApprover() {
    try {
        const res = await Axios.get(`${baseURL}/api/users/approver`);
        return res.data;
    } catch (error) {
        store.dispatch('onError', error);
    }
}

/**
 * isSuperUser checks if the user is admin
 * */
export async function isSuperUser() {
    try {
        const res = await Axios.get(`${baseURL}/api/users/super`);
        return res.data;
    } catch (error) {
        store.dispatch('onError', error);
    }
}

/**
 * searchApproverByName gets all the approvers with the received name
 * @param name is the name of the approver
 */
export async function searchApproverByName(groupType, name) {
    try {
        // return await searchUsersByName(name);
        // TODO: use this for real approvers
        const res = await Axios.get(`${baseURL}/api/users/approvers/${groupType}`, {
            params: { partialName: name },
        });
        const users = res.data
            ? res.data.filter((user) => {
                  return user.id !== store.state.auth.user.id;
              })
            : [];
        return Promise.all(users.map((user) => formatKartoffelUser(user)));
    } catch (error) {
        store.dispatch('onError', error);
    }
}
