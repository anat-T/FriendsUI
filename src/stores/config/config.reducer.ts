import { IConfigContext } from '..';

/* eslint-disable prettier/prettier */
const initialState = {};

export enum ConfigActions {
    SET_CONFIG = 'SET_CONFIG',
}

const ConfigReducer = (state = initialState, action: { type: ConfigActions; payload: IConfigContext }) => {
    switch (action.type) {
    case ConfigActions.SET_CONFIG:
        return {
            ...state,
            ...action.payload,
        };
    default:
        return state;
    }
};

export default ConfigReducer;
