import { CreateRequest } from '../CreateRequest';

export interface CreateGroupRequest {
    reqType: string;
    request: CreateRequest;
    // group: ADGroup; // TODO ???
    groupName: string;
    hierarchy: string;
    displayName: string;
    classification: string;
    owner: string;
    members: [string];
    type: string;
}
