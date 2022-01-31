import { ADGroup } from '../ADGroup';
import { OwnerRequest } from '../OwnerRequest';

export interface GroupManageRequest {
    reqType: string;
    request: OwnerRequest;
    group: ADGroup;
}
