import { RequestTypeEnum } from '../request';

export function formatCreateRequests(requests: any[]) {
    const requestsFormatted = requests.map((request) => {
        request.reqType = RequestTypeEnum.create;
        // eslint-disable-next-line no-param-reassign
        request = { ...request.creator, ...request.approver, ...request.group };
        request.attendees = request.members.length;
        return request;
    });

    return requestsFormatted;
}
