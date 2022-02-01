import { JoinGroupRequest } from '../../interfaces/FormatedRequests/JoinGroupRequest';

export async function formatJoinRequests(newRequests: JoinGroupRequest[]) {
    const newRows: any = [];

    newRequests.forEach((request: JoinGroupRequest) => {
        newRows.push({
            date: '09.12.2020', // TODO FIX
            friends: request.members ? request.members.length : 0,
            classify: request.classification,
            groupType: request.type,
            nameOfRequester: request.creator,
            group: request.displayName,
        });
    });
    return newRows;
}
