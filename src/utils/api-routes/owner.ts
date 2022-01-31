import Axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { baseURL } from '../../config';
import { GroupManageRequest } from '../../interfaces/FormatedRequests/GroupManageRequest';
import { formatOwnerRequests } from '../format-requests/owner';

/**
 * createOwnerRequest for change owner to group
 * @param {string} groupId - group id
 * @param {string} ownerId - new owner id
 * */
export async function createOwnerRequest(groupId: string, ownerId: string) {
    try {
        const res = await Axios.post(`${baseURL}/api/owner/request`, {
            groupId,
            approver: ownerId,
        });
        return res.data;
    } catch (error) {
        // todo: handle error
    }
    return null;
}

/**
 * getOwnerRequestByCreator - get owner requests by creator
 * */
export async function getOwnerRequestByCreator(): Promise<GroupManageRequest[]> {
    try {
        const res = await Axios.get(`${baseURL}/api/owner/requests/creator`);
        const requestsFormatted = res.data.requests ? await formatOwnerRequests(res.data.requests) : [];
        return requestsFormatted;
    } catch (error) {
        // todo
    }
    return [];
}

/**
 * getOwnerRequestByApprover - get owner requests by approver
 * */
export async function getOwnerRequestByApprover(): Promise<GroupManageRequest[]> {
    try {
        const res = await Axios.get(`${baseURL}/api/owner/requests/approver`);
        const requestsFormatted = res.data.requests ? await formatOwnerRequests(res.data.requests) : [];
        // const user = await getUserByKartoffelId(request.approver);
        // requestsFormatted.
        return requestsFormatted;
    } catch (error) {
        // todo
    }
    return [];
}

/**
 * denyOwnerRequest - deny owner request
 * @param {string} ownerReqId - owner request id
 * */
export async function denyJoinRequest(ownerReqId: string) {
    try {
        const res = await Axios.put(`${baseURL}/api/owner/request/deny/${ownerReqId}`);
        return res.data;
    } catch (error) {
        // todo
    }
    return null;
}

/**
 * approveOwnerRequest - approve owner request
 * @param {string} ownerReqId - owner request id
 * */
export async function approveOwnerRequest(ownerReqId: string) {
    try {
        const res = await Axios.put(`${baseURL}/api/owner/request/approve/${ownerReqId}`);
        return res.data;
    } catch (error) {
        // todo
    }
    return null;
}
