import { GroupManageRequest } from '../../interfaces/FormatedRequests/GroupManageRequest';

export async function formatOwnerRequests(newRequests: GroupManageRequest[]) {
    const newRows: any = [];

    newRequests.forEach((request: GroupManageRequest) => {
        newRows.push({
            date: '09.12.2020',
            friends: request.group.members ? request.group.members.length : 0,
            classify: request.group.classification,
            groupType: request.group.type,
            manager: request.request.creator,
            groupName: request.group.name,
            displayName: request.group.displayName,
        });
    });
    return newRows;
}
