import { JoinGroupRequest } from '../../interfaces/FormatedRequests/JoinGroupRequest';

export async function formatJoinRequests(newRequests: JoinGroupRequest[]) {
    const newRows: any = [];

    newRequests.forEach((request: JoinGroupRequest) => {
        newRows.push({
            date: '09.12.2020', // TODO FIX
            friends: request.group.members ? request.group.members.length : 0,
            classify: request.group.classification,
            groupType: request.group.type,
            nameOfRequester: request.request.creator,
            group: request.group.displayName,
        });
    });
    return newRows;
}
