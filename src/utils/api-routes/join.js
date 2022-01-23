// import Axios from "axios";
// import store from "@/store";
// import { baseURL } from "@/config";
// import { formatJoinRequests } from "@/utils/join";
// import { getUserByKartoffelId, getUserByDomainUser } from './user'
// import { getGroupById } from "./group"

// /**
//  * createJoinRequest for joining group
//  * @param {string} groupId - group id
//  * @param {string} approverId - approver id
//  * @param {string} joinReason - join reason
//  **/
// export async function createJoinRequest(groupId, approverId, joinReason) {
//   let user = {};
//   if (approverId != null) {
//     user = await getUserByDomainUser(approverId);
//   } else {
//     user.fullName = "null"
//   }
//   const group = await getGroupById(groupId);

//   let groupType = '';
//   if (group.type == 'Security Group') {
//     groupType = 'security';
//   } else if (group.type == 'Distribution Groups') {
//     groupType = 'distribution';
//   }

//   try {
//     const res = await Axios.post(`${baseURL}/api/join/request`, {
//       groupId,
//       creator: store.state.auth.user.id,
//       joinReason,
//       type: groupType,
//       displayName: group.displayName,
//       approver: user.fullName,
//     });
//     return res.data;
//   } catch (error) {
//     store.dispatch("onError", error);
//   }
// }

// /**
//  * getJoinRequestsByCreator - get join requests by creator
//  * */
// export async function getJoinRequestByCreator() {
//   try {
//     const res = await Axios.get(`${baseURL}/api/join/requests/creator`);
//     const requestsDetail = res.data.requests ? await formatJoinRequests(res.data.requests) : [];
//     return requestsDetail;
//   } catch (error) {
//     store.dispatch("onError", error);
//   }
// }

// /**
//  * getJoinRequestByApprover - get join requests by approver
//  * */
// export async function getJoinRequestByApprover() {
//   try {
//     const res = await Axios.get(`${baseURL}/api/join/requests/approver`);
//     const requestsDetail = res.data.requests ? await formatJoinRequests(res.data.requests) : [];
//     await Promise.allSettled(requestsDetail.map(async(request, index) => {
//       const res = await getUserByKartoffelId(request.creator);
//       requestsDetail[index].creator = res.fullName;
//     }));
//     return requestsDetail;
//   } catch (error) {
//     store.dispatch("onError", error);
//   }
// }

// /**
//  * denyJoinRequest - deny join request
//  * @param {string} joinReqId - join request id
//  * */
// export async function denyJoinRequest(joinReqId) {
//   try {
//     const res = await Axios.put(`${baseURL}/api/join/request/deny/${joinReqId}`);
//     return res.data;
//   } catch (error) {
//     store.dispatch("onError", error);
//   }
// }

// /**
//  * approveJoinRequest - approve join request
//  * @param {string} joinReqId - join request id
//  * */
// export async function approveJoinRequest(joinReqId) {
//   try {
//     const res = await Axios.put(`${baseURL}/api/join/request/approve/${joinReqId}`);
//     return res.data;
//   } catch (error) {
//     store.dispatch("onError", error);
//   }
// }
