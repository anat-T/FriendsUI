import { combineReducers } from 'redux';
import preferencesReducer from './preferences/preferences.reducer';
import userReducer from './user/user.reducer';
import configReducer from './config/config.reducer';

const rootReducer = combineReducers({
    preferences: preferencesReducer,
    user: userReducer,
    config: configReducer,
});

export default rootReducer;
