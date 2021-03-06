export interface CreateGroupRequest {
    _id: string;
    reqType: string;
    creator: string;
    approver: string;
    groupName: string;
    hierarchy: string;
    displayName: string;
    classification: string;
    owner: string;
    members: [string];
    type: string;
}
