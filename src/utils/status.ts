/* eslint-disable indent */
import i18next from 'i18next';

export const StatusEnum = {
    Denied: 'Denied',
    Pending: 'Pending',
    Approved: 'Approved',
};
Object.freeze(StatusEnum);

export function StatusValueToText(status: string) {
    switch (status) {
        case StatusEnum.Approved:
            return i18next.t('request.status.approved');
        case StatusEnum.Denied:
            return i18next.t('request.status.denied');
        case StatusEnum.Pending:
            return i18next.t('request.status.pending');
        default:
            return i18next.t('request.status.unknown');
    }
}

export function StatusValueToColor(status: string) {
    switch (status) {
        case StatusEnum.Approved:
            return 'green';
        case StatusEnum.Denied:
            return 'red';
        case StatusEnum.Pending:
            return 'orange';
        default:
            return 'default';
    }
}