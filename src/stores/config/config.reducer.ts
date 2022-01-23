/* eslint-disable prettier/prettier */
const initialState = {};

export enum ConfigActions {
    SET_CONTACT_BY_MAIL_LINK,
    SET_CONTACT_BY_CHAT_LINK,
}

const ConfigReducer = (state = initialState, action: { type: ConfigActions; payload: string }) => {
    switch (action.type) {
    case ConfigActions.SET_CONTACT_BY_MAIL_LINK:
        return {
            ...state,
            contactByMailLink: action.payload,
        };
    case ConfigActions.SET_CONTACT_BY_CHAT_LINK:
        return {
            ...state,
            contactByChatLink: action.payload,
        };

    default:
        return state;
    }
};

export default ConfigReducer;
