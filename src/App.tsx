/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { CircularProgress, ThemeProvider, CssBaseline, Theme } from '@material-ui/core';
import i18next from 'i18next';
import { makeStyles, createStyles } from '@material-ui/styles';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { trycatch } from './utils/trycatch';
import { UserService } from './services/userService';
import { ConfigService } from './services/configService';
import { globalTheme } from './theme';
import Main from './Main';
import './App.css';
import { ConfigContext, PreferencesContext, UserContext } from './index';

import ToolBar from './components/ToolBar/ToolBar';
import friendslogo from './images/friends-logo.png';
import CreateGroup from './pages/CreateGroup/CreateGroup';
import Requests from './pages/Requests/Requests';
import Profile from './pages/Profile/Profile';
import MyRequestsTable from './pages/Tables/MyRequestsTable/MyRequestsTable';
import JoinGroupTable from './pages/Tables/JoinGroupTable/JoinGroupTable';
import { AuthService } from './services/authService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            direction: 'rtl',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: '2%',
        },
        image: {
            paddingRight: '90%',
            width: '98%',
        },
        header: {},
    }),
);

const App = () => {
    const classes = useStyles();

    const { state: preferences } = useContext(PreferencesContext);
    const { update: updateConfigContext } = useContext(ConfigContext);
    const { state: currentUser, update: updateUserContext } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const { enqueueSnackbar } = useSnackbar();

    const initUser = async () => {
        const user = AuthService.getUser();
        if (user) {
            updateUserContext(user);
            setIsLoading(false);
        }
    };

    const initConfig = async () => {
        const { result: config, err } = await trycatch(() => ConfigService.getConfig());

        if (err) {
            enqueueSnackbar(i18next.t('error.config'), { variant: 'error' });
        }

        if (config) {
            updateConfigContext(config);
        }
    };

    useEffect(() => {
        initUser();
    }, []);

    useEffect(() => {
        initConfig();
    }, []);

    const renderUnauthorized = () => <span>unauthorized</span>;
    const renderLoading = () => (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30vh' }}>
            <CircularProgress size={80} />
        </div>
    );

    const renderApp = () => (
        <ThemeProvider theme={globalTheme(preferences.paletteType)}>
            <CssBaseline />
            <Router>
                <div className="background" />
                <main className={classes.content}>
                    <div className={classes.header}>
                        <img src={friendslogo} alt="" className={classes.image} />
                        <ToolBar />
                    </div>
                </main>
                <Switch>
                    <Route path="/createGroup">
                        <CreateGroup />
                    </Route>
                    <Route path="/requests">
                        <Requests />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/myRequests">
                        <MyRequestsTable />
                    </Route>
                    <Route path="/joinGroupRequests">
                        <JoinGroupTable />
                    </Route>
                    <Route path="/myGroups">
                        <Profile />
                    </Route>
                    <Route path="/groupManager">
                        <Profile />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );

    // eslint-disable-next-line no-nested-ternary
    return isLoading ? renderLoading() : currentUser ? renderApp() : renderUnauthorized();
};

export default App;
