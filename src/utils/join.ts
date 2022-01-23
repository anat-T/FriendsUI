import * as groupApi from './api-routes/group';
import { RequestTypeEnum } from './request';

export async function formatJoinRequests(requests: any[]) {
    const requestsFormatted = await Promise.all(
        requests.map(async (request) => {
            const group = await groupApi.getGroupById(request.groupId);
            const formattedRequest = { ...request, ...group };
            formattedRequest.reqType = RequestTypeEnum.join;

            return formattedRequest;
        }),
    );

    return requestsFormatted;
}
