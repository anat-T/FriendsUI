import { OwnerRequest } from '../interfaces/OwnerRequest';
import * as groupApi from './api-routes/group';
import { RequestTypeEnum } from './request';

export async function formatOwnerRequests(requests: OwnerRequest[]) {
    const requestsFormatted = Promise.all(
        requests.map(async (request) => {
            const group = await groupApi.getGroupById(request.groupId);
            const formattedRequest = { ...request, ...group };
            formattedRequest.reqType = RequestTypeEnum.owner;

            return formattedRequest;
        }),
    );

    return requestsFormatted;
}
