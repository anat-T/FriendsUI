import { IUserContext } from './user.interface';

/* eslint-disable prettier/prettier */
const initialState = null;

export enum UserActions {
    SET_USER = 'SET_USER',
}

const UserReducer = (state = initialState, action: { type: UserActions; payload: IUserContext }) => {
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
