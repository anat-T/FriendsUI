export interface JoinRequest {
    _id: string;
    creator: string;
    approver: string;
    groupId: string;
    joinReason: string;
}
