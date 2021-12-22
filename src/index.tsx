import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import './i18n';
import App from './App';
import { IPreferencesContext, createCtx, IUserContext, IConfigContext } from './stores/index';
import { LocalStorage } from './utils/localStorage';

const [PreferencesContext, PreferencesContextProvider] = createCtx<IPreferencesContext>({ paletteType: LocalStorage.get('paletteType', 'light') });
const [UserContext, UserContextProvider] = createCtx<IUserContext | undefined>(undefined);
const [ConfigContext, ConfigContextProvider] = createCtx<IConfigContext | undefined>(undefined);

ReactDOM.render(
    <StrictMode>
        <SnackbarProvider maxSnack={3} style={{ direction: 'rtl' }} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <PreferencesContextProvider>
                <UserContextProvider>
                    <ConfigContextProvider>
                        <App />
                    </ConfigContextProvider>
                </UserContextProvider>
            </PreferencesContextProvider>
        </SnackbarProvider>
    </StrictMode>,
    document.getElementById('root'),
);

export { PreferencesContext, UserContext, ConfigContext };
