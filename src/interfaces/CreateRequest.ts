export interface CreateRequest {
    _id: string;
    creator: string;
    approver: string;
    group: {
        groupName: string;
        hierarchy: string;
        displayName: string;
        classification: string;
        owner: string;
        members: [string];
        type: string;
    };
}
