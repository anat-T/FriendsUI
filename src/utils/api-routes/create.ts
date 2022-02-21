/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-shadow */
import axios from '../../axios';
import store from '../../stores/store';
import { baseURL } from '../../config';
import { formatCreateRequests } from '../format-requests/create';
import { getUserByKartoffelId, getUserByDomainUser } from './user';
import { CreateGroupRequest } from '../../interfaces/FormatedRequests/CreateGroupRequest';
/**
 * createGroupRequest for creating group
 * @param {string} approverId - approver id
 * @param {string} groupName - group name
 * @param {string} type - group type (distribution or security)
 * @param {string} hierarchy - group hierarchy
 * @param {string} displayName - group display name
 * @param {string} classification - group classification
 * @param {string[]} members - group members
 * @param {string} owner - group owner
 *  * */
export async function createCreateRequest(
    approverId: string,
    groupName: string,
    hierarchy: string,
    type: string,
    displayName: string,
    classification: string,
    members: string[],
    owner: string,
) {
    try {
        const createRequest = {
            approver: approverId || store.getState().user.id,
            creator: store.getState().user.id,
            group: {
                groupName,
                displayName,
                classification,
                type,
                hierarchy: hierarchy || `${displayName}`,
                members: members || [],
                owner,
            },
        };
        const res = await axios.post(`${baseURL}/api/create/request`, createRequest);
        return res.data;
    } catch (error) {
        // store.dispatch('onError', error);
        // throw new Error(error);
    }
    return null;
}

/**
 * getGroupRequestByCreator - get group request by creator
 * */
export async function getCreateRequestByCreator() {
    try {
        const res = await axios.get(`${baseURL}/api/create/requests/creator`);
        const requestsFormatted = res.data.requests ? formatCreateRequests(res.data.requests) : [];
        await Promise.allSettled(
            requestsFormatted.map(async (request, index) => {
                const res = await getUserByKartoffelId(request.approver);
                requestsFormatted[index].approver = res.fullName;
            }),
        );
        return requestsFormatted;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}

/**
 * getGroupRequestByApprover - get group requests by approver
 * */
export async function getCreateRequestByApprover(): Promise<CreateGroupRequest[]> {
    try {
        const res = await axios.get(`${baseURL}/api/create/requests/approver`);
        const requestsFormatted = res.data.requests ? formatCreateRequests(res.data.requests) : [];
        await Promise.allSettled(
            requestsFormatted.map(async (request, index) => {
                const res = await getUserByDomainUser(`${request.owner}`);
                requestsFormatted[index].owner = res.fullName;
            }),
        );
        return requestsFormatted;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return [];
}

/**
 * denyGroupRequest - deny group create request
 * @param {string} createReqId - create request id
 * */
export async function denyCreateRequest(createReqId: string) {
    try {
        const res = await axios.put(`${baseURL}/api/create/request/deny/${createReqId}`);
        return res.data;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}

/**
 * approveGroupRequest - approve group create request
 * @param {string} createReqId - create request id
 * */
export async function approveCreateRequest(createReqId: string) {
    try {
        const res = await axios.put(`${baseURL}/api/create/request/approve/${createReqId}`);
        return res.data;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}
