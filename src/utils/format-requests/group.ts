/* eslint-disable indent */
import i18next from 'i18next';
import { ADGroup } from '../../interfaces/ADGroup';
import { Group } from '../../interfaces/FormatedRequests/Group';
import { User } from '../../interfaces/User';

export const GroupTypeEnum = {
    security: 'security',
    distribution: 'distribution',
};
Object.freeze(GroupTypeEnum);

export function GroupTypeValueToText(request: string) {
    switch (request) {
        case GroupTypeEnum.security:
            return i18next.t('securityGroups.name');
        case GroupTypeEnum.distribution:
            return i18next.t('distributionGroups.name');
        default:
            return i18next.t('unknown');
    }
}

export function GroupTypeSuffixGroupName(request: string) {
    switch (request) {
        case GroupTypeEnum.security:
            return i18next.t('securityGroups.suffix');
        case GroupTypeEnum.distribution:
            return i18next.t('distributionGroups.suffix');
        default:
            return i18next.t('unknown');
    }
}

export function isDistributionGroup(group: ADGroup) {
    return group.type === GroupTypeEnum.distribution;
}

export function isSecurityGroup(group: ADGroup) {
    return group.type === GroupTypeEnum.security;
}

export function getHierarchyFromDisplayNameAndName(displayName: string, name: string) {
    return displayName ? displayName.replace(new RegExp(`/${name}$`), '') : '';
}

export function formatGroup(group: ADGroup): Group {
    const newGroup = {
        id: group.sAMAccountName,
        friends: group.members ? group.members.length : 0,
        hierarchy: getHierarchyFromDisplayNameAndName(group.displayName, group.name),
        ...group,
    };

    return newGroup;
}

export function isOwner(group: ADGroup, user: User) {
    return group.owner.sAMAccountName === user.sAMAccountName;
}

export function isMember(group: ADGroup, user: User) {
    return group.members.some((member) => member.sAMAccountName === user.sAMAccountName);
}
