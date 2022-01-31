import { Group } from '../../interfaces/FormatedRequests/Group';

export async function formatGroups(newGroups: Group[]) {
    const newRows: any = [];

    newGroups.forEach((group: Group) => {
        newRows.push({
            date: '09.12.2020', // TODO FIX
            classify: group.group.classification,
            groupType: group.group.type,
            owner: group.group.owner.displayName,
            displayName: group.group.displayName,
        });
    });
    return newRows;
}
