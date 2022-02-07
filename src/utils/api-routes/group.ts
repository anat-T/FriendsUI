/* eslint-disable no-console */
import Axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { baseURL } from '../../config';
import { ADGroup } from '../../interfaces/ADGroup';
import { Group } from '../../interfaces/FormatedRequests/Group';
import { User } from '../../interfaces/User';
import { formatGroup } from '../format-requests/group';
/**
 * searchGroups - search groups (distribution and security)
 * @param {string} partialName - partial name of the group
 * */
export async function searchGroups(partialName: string) {
    const searchDistributionGroups = async () => {
        const res = await Axios.get(`${baseURL}/api/ad/groups/distribution?partialName=${partialName}`);
        return res.data;
    };

    const searchSecurityGroups = async () => {
        const res = await Axios.get(`${baseURL}/api/ad/groups/security?partialName=${partialName}`);
        return res.data;
    };

    try {
        const [distributionGroups, securityGroups] = await Promise.all([searchDistributionGroups(), searchSecurityGroups()]);
        const groups = [...distributionGroups, ...securityGroups];
        groups.map((group) => formatGroup(group));

        return groups;
    } catch (error) {
        // TODO: Handle error
    }
    return null;
}

/**
 * getGroupById - get group by id (sAMAccountName)
 * @param {string} id - id of the group
 * */
export async function getGroupById(id: string) {
    try {
        const res = await Axios.get(`${baseURL}/api/ad/groups/${id}`);
        let group = res.data;
        group = formatGroup(group);
        return group;
    } catch (error) {
        // TODO: Handle error
    }
    return null;
}

/**
 * getUserGroups - get user groups
 * */
export async function getUserGroups(): Promise<Group[]> {
    try {
        const res = await Axios.get(`${baseURL}/api/ad/groups/user`);
        console.log('res', res);
        const groups = res.data;
        groups.map((group: ADGroup) => formatGroup(group));

        console.log('groups', groups);
        return groups;
    } catch (error) {
        // TODO: Handle error
    }
    return [];
}

/**
 * updateGroupOwner - update group owner
 * @param {string} groupId - id of the group
 * @param {string} owner - new owner
 * */
export async function updateGroupOwner(groupId: string, owner: string) {
    try {
        const res = await Axios.put(`${baseURL}/api/ad/group`, { groupId, owner });
        return res.data;
    } catch (error) {
        // TODO: Handle error
    }
    return null;
}

/**
 * updateGroupDisplayName - update group display name
 * @param {string} groupId - id of the group
 * @param {string} displayName - new display name
 * */
export async function updateGroupDisplayName(groupId: string, displayName: string) {
    try {
        const res = await Axios.put(`${baseURL}/api/ad/group`, {
            groupId,
            displayName,
        });
        return res.data;
    } catch (error) {
        // TODO: Handle error
        return null;
    }
}

/**
 * updateGroupName - update group name
 * @param {string} groupId - id of the group
 * @param {string} groupName - new display name
 * */
export async function updateGroupName(groupId: string, name: string) {
    try {
        const res = await Axios.put(`${baseURL}/api/ad/group`, { groupId, name });
        return res.data;
    } catch (error) {
        // TODO: Handle error
        return null;
    }
}

/**
 * updateGroup - update group name and display name
 * @param {string} groupId - id of the group
 * @param {{ groupId: string, displayName: string, name: string }} editedGroup - edited group
 * */
export async function updateGroup(groupId: string, editedGroup: { groupId: string; displayName: string; name: string }) {
    try {
        const res = await Axios.put(`${baseURL}/api/ad/group/${groupId}`, editedGroup); // TODO I WRITED THAT
        return res.data;
    } catch (error) {
        // TODO: Handle error
        return null;
    }
}

/**
 * addGroupMember - add group member
 * @param {string} groupId - id of the group
 * @param {string[]} users - new members (sAMAccountName)
 * */
export async function addGroupMember(groupId: string, users: string) {
    try {
        const res = await Axios.put(`${baseURL}/api/ad/groups/users`, {
            groupId,
            users,
        });
        return res.data;
    } catch (error) {
        // TODO: Handle error
    }
    return null;
}

/**
 * deleteGroupMember - delete group member
 * @param {string} groupId - id of the group
 * @param {string[]} users - members to delete (sAMAccountName)
 * */
export async function deleteGroupMember(groupId: string, users: User[]) {
    try {
        const res = await Axios.delete(`${baseURL}/api/ad/groups/users`, {
            params: {
                groupId,
                users,
            },
        });
        return res.data;
    } catch (error) {
        // TODO: Handle error
    }
    return null;
}

/**
 * deleteGroup - remove group
 * @param {string} groupId - id of the group
 * */
export async function deleteGroup(groupId: string) {
    try {
        const res = await Axios.delete(`${baseURL}/api/ad/group/${groupId}`);
        return res.data;
    } catch (error) {
        // TODO: Handle error
    }
    return null;
}
