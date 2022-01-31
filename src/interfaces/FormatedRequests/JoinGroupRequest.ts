import { ADGroup } from '../ADGroup';
import { JoinRequest } from '../JoinRequest';

export interface JoinGroupRequest {
    reqType: string;
    request: JoinRequest;
    group: ADGroup;
}
