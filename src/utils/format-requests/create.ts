import { RequestTypeEnum } from '../request';

export function formatCreateRequests(requests: any[]) {
    const requestsFormatted = requests.map((request) => {
        request.reqType = RequestTypeEnum.create;
        // eslint-disable-next-line no-param-reassign
        request = { ...request.creator, ...request.approver, ...request.group };
        request.friends = request.members ? request.member.length : 0;
        return request;
    });

    return requestsFormatted;
}
