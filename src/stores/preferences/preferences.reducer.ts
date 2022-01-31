import { PaletteType } from '@material-ui/core';
import { LocalStorage } from '../../utils/localStorage';
import { IPreferencesContext } from './preferences.interface';

/* eslint-disable prettier/prettier */
const initialState: IPreferencesContext =  { 
    paletteType: LocalStorage.get('paletteType', 'light')
};

export enum PreferencesActions {
    SET_PALETTE_TYPE = 'SET_PALETTE_TYPE',
}

const PreferencesReducer = (state = initialState, action: { type: PreferencesActions; payload: PaletteType }) => {
    switch (action.type) {
    case PreferencesActions.SET_PALETTE_TYPE:
        return {
            paletteType: action.payload,
        };
    default:
        return state;
    }
};

export default PreferencesReducer;
