export interface GroupManageRequest {
    _id: string;
    reqType: string;
    creator: string;
    approver: string;
    groupId: string;
    classification: string;
    displayName: string;
    sAMAccountName: string;
    name: string;
    type: string;
    owner: {
        displayName: string;
        sAMAccountName: string;
    };
    members: { displayName: string; sAMAccountName: string }[];
}
