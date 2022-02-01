export interface JoinGroupRequest {
    reqType: string;
    creator: string;
    approver: string;
    groupId: string;
    joinReason: string;
    classification: string;
    displayName: string;
    sAMAccountName: string;
    name: string;
    type: string;
    owner: {
        displayName: string;
        sAMAccountName: string;
    };
    members: [{ displayName: string; sAMAccountName: string }];
}
