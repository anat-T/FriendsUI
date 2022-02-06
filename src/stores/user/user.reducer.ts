/* eslint-disable indent */
import { IUserContext } from './user.interface';

/* eslint-disable prettier/prettier */
const initialState: IUserContext = {
    id: '',
    adfsId: '',
    name: '',
    displayName: '',
    unit: '',
    rank: '',
};

export enum UserActions {
    SET_USER = 'SET_USER',
}

const UserReducer = (state = initialState, action: { type: UserActions; payload: IUserContext }): IUserContext => {
    switch (action.type) {
        case UserActions.SET_USER:
            return {
                ...action.payload,
            };
        default:
            return state;
    }
};

export default UserReducer;
