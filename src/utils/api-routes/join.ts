/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-shadow */
import Axios from 'axios';
import store from '../../stores/store';
import { baseURL } from '../../config';
import { formatJoinRequests } from '../format-requests/join';
import { getUserByKartoffelId, getUserByDomainUser } from './user';
import { getGroupById } from './group';
import { JoinGroupRequest } from '../../interfaces/FormatedRequests/JoinGroupRequest';

/**
 * createJoinRequest for joining group
 * @param {string} groupId - group id
 * @param {string} approverId - approver id
 * @param {string} joinReason - join reason
 * */
export async function createJoinRequest(groupId: string, approverId: string, joinReason: string) {
    let user = { fullName: 'null' };
    if (approverId != null) user = await getUserByDomainUser(approverId);

    const group = await getGroupById(groupId);

    let groupType = '';
    if (group.type === 'Security Group') {
        groupType = 'security';
    } else if (group.type === 'Distribution Groups') {
        groupType = 'distribution';
    }

    try {
        const res = await Axios.post(`${baseURL}/api/join/request`, {
            groupId,
            creator: store.getState().user.id,
            joinReason,
            type: groupType,
            displayName: group.displayName,
            approver: user.fullName,
        });
        return res.data;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}

/**
 * getJoinRequestsByCreator - get join requests by creator
 * */
export async function getJoinRequestByCreator() {
    try {
        const res = await Axios.get(`${baseURL}/api/join/requests/creator`);
        const requestsDetail = res.data.requests ? await formatJoinRequests(res.data.requests) : [];
        return requestsDetail;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}

/**
 * getJoinRequestByApprover - get join requests by approver
 * */
export async function getJoinRequestByApprover(): Promise<JoinGroupRequest[]> {
    try {
        const res = await Axios.get(`${baseURL}/api/join/requests/approver`);
        const requestsDetail = res.data.requests ? await formatJoinRequests(res.data.requests) : [];
        await Promise.allSettled(
            requestsDetail.map(async (request, index) => {
                const res = await getUserByKartoffelId(request.creator);
                requestsDetail[index].creator = res.fullName;
            }),
        );
        return requestsDetail;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return [];
}

/**
 * denyJoinRequest - deny join request
 * @param {string} joinReqId - join request id
 * */
export async function denyJoinRequest(joinReqId: string) {
    try {
        const res = await Axios.put(`${baseURL}/api/join/request/deny/${joinReqId}`);
        return res.data;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}

/**
 * approveJoinRequest - approve join request
 * @param {string} joinReqId - join request id
 * */
export async function approveJoinRequest(joinReqId: string) {
    try {
        const res = await Axios.put(`${baseURL}/api/join/request/approve/${joinReqId}`);
        return res.data;
    } catch (error) {
        // store.dispatch('onError', error);
    }
    return null;
}
