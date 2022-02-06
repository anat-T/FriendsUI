import { CreateGroupRequest } from '../../interfaces/FormatedRequests/CreateGroupRequest';

export async function formatCreateRequests(newRequests: CreateGroupRequest[]) {
    const newRows: any = [];

    newRequests.forEach((request: CreateGroupRequest) => {
        newRows.push({
            id: request._id,
            date: '09.12.2020',
            friends: request.members ? request.members.length : 0,
            classify: request.classification,
            groupType: request.type,
            manager: request.creator,
            groupName: request.groupName,
            displayName: request.displayName,
        });
    });
    return newRows;
}
