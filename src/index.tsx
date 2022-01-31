import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import './i18n';
import App from './App';
import reduxStore from './stores/store';

ReactDOM.render(
    <StrictMode>
        <Provider store={reduxStore}>
            <SnackbarProvider maxSnack={3} style={{ direction: 'rtl' }} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <App />
            </SnackbarProvider>
        </Provider>
    </StrictMode>,
    document.getElementById('root'),
);
