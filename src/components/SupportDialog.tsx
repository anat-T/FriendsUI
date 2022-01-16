// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions, makeStyles, createStyles, Link } from '@material-ui/core';
// import { ConfigContext } from '..';

// export const GroupTypeEnum = {
//     security: 'security',
//     distribution: 'distribution',
// };
// Object.freeze(GroupTypeEnum);

// export function GroupTypeValueToText(request) {
//     switch (request) {
//     case GroupTypeEnum.security:
//             return i18n.t('securityGroups.name');
//     case GroupTypeEnum.distribution:
//             return i18n.t('distributionGroups.name');
//     default:
//             return i18n.t('unknown');
//     }
// }

// export function GroupTypeSuffixGroupName(request) {
//     switch (request) {
//     case GroupTypeEnum.security:
//             return i18n.t('securityGroups.suffix');
//     case GroupTypeEnum.distribution:
//             return i18n.t('distributionGroups.suffix');
//     default:
//             return i18n.t('unknown');
//     }
// }

// export function isDistributionGroup(group) {
//     return group.type === GroupTypeEnum.distribution;
// }

// export function isSecurityGroup(group) {
//     return group.type === GroupTypeEnum.security;
// }

// export function getHierarchyFromDisplayNameAndName(displayName, name) {
//     return displayName ? displayName.replace(new RegExp(`/${name}$`), '') : '';
// }

// export function formatGroup(group) {
//     group.id = group.id ? group.id : group.sAMAccountName;
//     group.attendees = group.members ? group.members.length : 0;
//     group.hierarchy = getHierarchyFromDisplayNameAndName(group.displayName, group.name);

//     return group;
// }

// export function isOwner(group, user) {
//     return group.owner.sAMAccountName === user.sAMAccountName;
// }

// export function isMember(group, user) {
//     return group.members.some((member) => {
//         member.sAMAccountName === user.sAMAccountName;
//     });
// }

// export const GroupTypeEnum = {
//     security: 'security',
//     distribution: 'distribution',
// };
// Object.freeze(GroupTypeEnum);

// export function GroupTypeValueToText(request) {
//     switch (request) {
//     case GroupTypeEnum.security:
//             return i18n.t('securityGroups.name');
//     case GroupTypeEnum.distribution:
//             return i18n.t('distributionGroups.name');
//     default:
//             return i18n.t('unknown');
//     }
// }

// export function GroupTypeSuffixGroupName(request) {
//     switch (request) {
//     case GroupTypeEnum.security:
//             return i18n.t('securityGroups.suffix');
//     case GroupTypeEnum.distribution:
//             return i18n.t('distributionGroups.suffix');
//     default:
//             return i18n.t('unknown');
//     }
// }

// export function isDistributionGroup(group) {
//     return group.type === GroupTypeEnum.distribution;
// }

// export function isSecurityGroup(group) {
//     return group.type === GroupTypeEnum.security;
// }

// export function getHierarchyFromDisplayNameAndName(displayName, name) {
//     return displayName ? displayName.replace(new RegExp(`/${name}$`), '') : '';
// }

// export function formatGroup(group) {
//     group.id = group.id ? group.id : group.sAMAccountName;
//     group.attendees = group.members ? group.members.length : 0;
//     group.hierarchy = getHierarchyFromDisplayNameAndName(group.displayName, group.name);

//     return group;
// }

// export function isOwner(group, user) {
//     return group.owner.sAMAccountName === user.sAMAccountName;
// }

// export function isMember(group, user) {
//     return group.members.some((member) => {
//         member.sAMAccountName === user.sAMAccountName;
//     });
// }

// const useStyles = makeStyles(
//     createStyles({
//         contactOptionTitle: {
//             fontWeight: 'bold',
//         },
//     }),
// );

// type SupportDialogProps = {
//     handleClose: () => void;
//     open: boolean;
// };
// const SupportDialog = ({ open, handleClose }: SupportDialogProps) => {
//     const { state: config } = useContext(ConfigContext);
//     const classes = useStyles();

//     return (
//         <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
//             <DialogTitle>{i18next.t('supportDialog.title')}</DialogTitle>
//             <DialogContent>
//                 {config?.contactByMailLink && (
//                     <>
//                         <DialogContentText className={classes.contactOptionTitle}>{i18next.t('supportDialog.contactByMail')}</DialogContentText>
//                         <DialogContentText>
//                             <Link href={`mailto:${config.contactByMailLink}`}>{config.contactByMailLink}</Link>
//                         </DialogContentText>
//                     </>
//                 )}
//                 {config?.contactByChatLink && (
//                     <>
//                         <DialogContentText className={classes.contactOptionTitle}>{i18next.t('supportDialog.contactByChat')}</DialogContentText>
//                         <DialogContentText>
//                             <Link href={config.contactByChatLink}>{config.contactByChatLink}</Link>
//                         </DialogContentText>
//                     </>
//                 )}
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={handleClose} color="primary">
//                     {i18next.t('supportDialog.close')}
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export { SupportDialog };
