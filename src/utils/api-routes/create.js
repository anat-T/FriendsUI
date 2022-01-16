import Axios from "axios";
import store from "@/store";
import { baseURL } from "@/config";
import { formatCreateRequests } from "@/utils/create";
import { getUserByKartoffelId, getUserByDomainUser } from './user'
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
 *  **/
export async function createGroupRequest({
  approverId,
  groupName,
  hierarchy,
  type,
  displayName,
  classification,
  members,
  owner
}) {
  try {
    const createRequest = {
      approver: approverId || store.state.auth.user.id,
      creator: store.state.auth.user.id,
      group: {
        groupName,
        displayName,
        classification,
        type,
        hierarchy: hierarchy ? hierarchy : "" + displayName,
        members: members ? members : [],
        owner
      }
    };
    const res = await Axios.post(`${baseURL}/api/create/request`, createRequest);
    return res.data;
    } catch (error) {
      store.dispatch("onError", error);
      throw new Error(error);
    }
  }

/**
 * getGroupRequestByCreator - get group request by creator
 * */
export async function getGroupRequestByCreator() {
    try {
      const res = await Axios.get(`${baseURL}/api/create/requests/creator`);
      const requestsFormatted = res.data.requests ? formatCreateRequests(res.data.requests) : [];
      await Promise.allSettled(requestsFormatted.map(async (request, index) => {
        const res = await getUserByKartoffelId(request.approver);
        requestsFormatted[index].approver = res.fullName; 
      }));
      return requestsFormatted;
    } catch (error) {
      store.dispatch("onError", error);
    }
  }

  /**
   * getGroupRequestByApprover - get group requests by approver
   * */
  export async function getGroupRequestByApprover() {
    try {
      const res = await Axios.get(`${baseURL}/api/create/requests/approver`);
      const requestsFormatted = res.data.requests ? formatCreateRequests(res.data.requests) : [];
      await Promise.allSettled(requestsFormatted.map(async (request, index) => {
        const res = await getUserByDomainUser(`${request.owner}`);
        requestsFormatted[index].owner = res.fullName; 
      }));
      return requestsFormatted;
    } catch (error) {
      store.dispatch("onError", error);
    }
  }

  /**
   * denyGroupRequest - deny group create request
   * @param {string} createReqId - create request id
   * */
  export async function denyGroupRequest(createReqId) {
    try {
      const res = await Axios.put(`${baseURL}/api/create/request/deny/${createReqId}`);
      return res.data;
    } catch (error) {
      store.dispatch("onError", error);
    }
  }

  /**
   * approveGroupRequest - approve group create request
   * @param {string} createReqId - create request id
   * */
  export async function approveGroupRequest(createReqId) {
    try {
      const res = await Axios.put(`${baseURL}/api/create/request/approve/${createReqId}`);
      return res.data;
    } catch (error) {
      store.dispatch("onError", error);
    }
  }
