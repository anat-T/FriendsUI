/* eslint-disable indent */
import i18next from 'i18next';

export const RequestTypeEnum = {
    join: 'join',
    owner: 'owner',
    create: 'create',
};
Object.freeze(RequestTypeEnum);

export function RequestTypeValueToText(request: string) {
    switch (request) {
        case RequestTypeEnum.join:
            return i18next.t('request.type.join');
        case RequestTypeEnum.owner:
            return i18next.t('request.type.owner');
        case RequestTypeEnum.create:
            return i18next.t('request.type.create');
        default:
            return i18next.t('unknown');
    }
}
