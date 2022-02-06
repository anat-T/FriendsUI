import { combineReducers } from 'redux';
import preferencesReducer from './preferences/preferences.reducer';
import userReducer from './user/user.reducer';
import configReducer from './config/config.reducer';
import { IUserContext } from './user/user.interface';
import { IPreferencesContext } from './preferences/preferences.interface';
import { IConfigContext } from './config/config.interface';

const rootReducer = combineReducers({
    preferences: preferencesReducer,
    user: userReducer,
    config: configReducer,
});

export interface IStoreContext {
    preferences: IPreferencesContext;
    user: IUserContext;
    config: IConfigContext;
}

export default rootReducer;
