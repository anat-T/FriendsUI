/* eslint-disable import/no-unresolved */
/* eslint-disable indent */
import Axios from 'axios';
import store from '../../stores/store';
import { baseURL } from '../../config';
import { formatKartoffelUser, formatADUser } from '../user';

/**
 * getUserByKartoffelId returns the user by the kartoffelId
 * @param kartoffelId is the user kartoffel id
 */
export async function getUserByKartoffelId(kartoffelId: string) {
    try {
        console.log('before res');
        const res = await Axios.get(`${baseURL}/api/users/kartoffel/${kartoffelId}`);
        console.log('after res');
        const user = formatKartoffelUser(res.data);
        // store.commit('addUserToictionary', user);
        // console.log(user);
        return user;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}

/**
 * getUserByDomainUser returns the user by the domain user
 * @param domainUser is the user domain user
 * */
export async function getUserByDomainUser(domainUser: string) {
    try {
        const res = await Axios.get(`${baseURL}/api/users/domainuser/${domainUser}`);
        const user = formatKartoffelUser(res.data);
        // store.commit('addUserToictionary', user);
        return user;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}

/**
 * searchUsersByName gets all the users with the received name
 * @param name is the name of the users
 */
export async function searchUsersByName(name: string) {
    try {
        const res = await Axios.get(`${baseURL}/api/users`, {
            params: { partialName: name },
        });
        const users = res.data
            ? res.data.filter((user: { id: any }) => {
                  return user.id !== store.getState().user.id;
              })
            : [];

        return Promise.all(users.map((user: any) => formatADUser(user)));
    } catch (err) {
        // store.dispatch('onError', err);
    }
    return null;
}

/**
 * isApprover checks if the user is an approver
 * */
export async function isApprover() {
    try {
        const res = await Axios.get(`${baseURL}/api/users/approver`);
        return res.data;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}

/**
 * isSuperUser checks if the user is admin
 * */
export async function isSuperUser() {
    try {
        const res = await Axios.get(`${baseURL}/api/users/super`);
        return res.data;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}

/**
 * searchApproverByName gets all the approvers with the received name
 * @param name is the name of the approver
 */
export async function searchApproverByName(groupType: string, name: string) {
    try {
        // return await searchUsersByName(name);
        // TODO: use this for real approvers
        const res = await Axios.get(`${baseURL}/api/users/approvers/${groupType}`, {
            params: { partialName: name },
        });
        const users = res.data
            ? res.data.filter((user: { id: any }) => {
                  return user.id !== store.getState().user.id;
              })
            : [];
        return Promise.all(users.map((user: any) => formatKartoffelUser(user)));
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}
