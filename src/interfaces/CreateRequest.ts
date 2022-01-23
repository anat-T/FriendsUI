export interface CreateRequest {
    creator: string;
    approver: string;
    group: {
        approverId?: string;
        groupName: string;
        hierarchy: string;
        displayName: string;
        classification: string;
        owner: string;
        members: string[];
        type: string;
    };
}
