import { User } from '../../interfaces/User';

export function formatKartoffelUser(user: any) {
    const formatedUser = user;
    formatedUser.displayName = `${user.firstName} ${user.lastName ? user.lastName : ''} > ${user.hierarchyFlat}`;
    return formatedUser;
}

export function formatADUser(user: User) {
    const formatedUser = { ...user, id: 'null' };
    formatedUser.id = user.sAMAccountName;
    return formatedUser;
}

//   export function getUserLimitMembers() {
//     const isApprover = store.getters.isApprover;
//     const isSuper = store.getters.isSuper;
//     if (isSuper) {
//       return Infinity;
//     } else if (isApprover) {
//       return 1000;
//     } else {
//       return 100;
//     }
//   }
