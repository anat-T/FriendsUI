import { JoinGroupRequest } from '../../interfaces/FormatedRequests/JoinGroupRequest';

export async function formatJoinRequests(newRequests: JoinGroupRequest[]) {
    const newRows: any = [];

    newRequests.forEach((request: JoinGroupRequest) => {
        newRows.push({
            id: request._id,
            date: '09.12.2020', // TODO FIX
            friends: request.members ? request.members.length : 0,
            classify: request.classification,
            groupType: request.type,
            nameOfRequester: request.creator,
            groupName: request.name,
            displayName: request.displayName,
        });
    });
    return newRows;
}
