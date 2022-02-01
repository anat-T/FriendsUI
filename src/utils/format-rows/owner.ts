import { GroupManageRequest } from '../../interfaces/FormatedRequests/GroupManageRequest';

export async function formatOwnerRequests(newRequests: GroupManageRequest[]) {
    const newRows: any = [];

    newRequests.forEach((request: GroupManageRequest) => {
        newRows.push({
            date: '09.12.2020',
            friends: request.members ? request.members.length : 0,
            classify: request.classification,
            groupType: request.type,
            manager: request.creator,
            groupName: request.name,
            displayName: request.displayName,
        });
    });
    return newRows;
}
