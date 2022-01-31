import { ADGroup } from '../ADGroup';

export interface Group {
    id: string;
    attendees: string;
    hierarchy: string;
    group: ADGroup;
}
