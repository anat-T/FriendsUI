import { Group } from '../../interfaces/FormatedRequests/Group';

export async function formatGroups(newGroups: Group[]) {
    const newRows: any = [];

    newGroups.forEach((group: Group) => {
        newRows.push({
            id: group.id,
            friends: group.members ? group.members.length : 0,
            classify: group.classification,
            groupType: group.type,
            owner: group.owner.displayName,
            groupName: group.name,
            displayName: group.displayName,
        });
    });
    return newRows;
}
