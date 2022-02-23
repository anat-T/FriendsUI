/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { CircularProgress, ThemeProvider, CssBaseline, Theme, Backdrop } from '@material-ui/core';

import i18next from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/styles';
import Cookies from 'js-cookie';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { trycatch } from './utils/trycatch';
import { UserService } from './services/userService';
import { ConfigService } from './services/configService';
import { globalTheme } from './theme';
import Main from './Main';
import './App.css';

import ToolBar from './components/ToolBar/ToolBar';
import FirstLoginPopUp from './components/FirstLoginPopUp/FirstLoginPopUp';
import friendslogo from './images/friends-logo.png';
import CreateGroup from './pages/CreateGroup/CreateGroup';
import Requests from './pages/Requests/Requests';
import Profile from './pages/Profile/Profile';
import MyRequestsTable from './pages/Tables/Profile/MyRequestsTable/MyRequestsTable';
import JoinGroupTable from './pages/Tables/Requests/JoinGroupTable/JoinGroupTable';
import { AuthService } from './services/authService';
import { UserActions } from './stores/user/user.reducer';
import { ConfigActions } from './stores/config/config.reducer';
import { IStoreContext } from './stores/root-reducer';
import MyGroupsTable from './pages/Tables/Profile/MyGroupsTable/MyGroupsTable';
import GroupManagerTable from './pages/Tables/Profile/GroupManagerTable/GroupManagerTable';
import GroupManageRequestsTable from './pages/Tables/Requests/GroupManageRequestsTable/GroupManageRequestsTable';
import CreateGroupRequestsTable from './pages/Tables/Requests/CreateGroupRequests/CreateGroupRequestsTable';

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
            position: 'relative',
        },
        disableClick: {
            pointerEvents: 'none',
            zIndex: -1,
            position: 'relative',
        },
        header: {},
    }),
);

const App = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [preferences, currentUser] = useSelector<IStoreContext, [IStoreContext['preferences'], IStoreContext['user']]>((state) => [
        state.preferences,
        state.user,
    ]);

    const [isLoading, setIsLoading] = useState(true);
    const [isFirstLogin, setIsFirstLogin] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const initUser = async () => {
        const user = await AuthService.getUser();

        if (user) {
            dispatch({ type: UserActions.SET_USER, payload: user });
            setIsLoading(false);
        }
    };

    const initConfig = async () => {
        const { result: config, err } = await trycatch(() => ConfigService.getConfig());

        if (err) {
            enqueueSnackbar(i18next.t('error.config'), { variant: 'error' });
        }

        if (config) {
            dispatch({ type: ConfigActions.SET_CONFIG, payload: config });
        }
    };

    const ShouldShowFirstTimeDialogue = () => {
        if (!Cookies.get('firstTimeLogin')) {
            setIsFirstLogin(true);
        } else {
            setIsFirstLogin(false);
        }
    };

    useEffect(() => {
        initUser();
        initConfig();
        ShouldShowFirstTimeDialogue();
    }, []);

    const renderUnauthorized = () => <span>unauthorized</span>;
    const renderLoading = () => (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30vh' }}>
            <CircularProgress size={80} />
        </div>
    );

    const router = (
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
                <MyGroupsTable />
            </Route>
            <Route path="/groupManager">
                <GroupManagerTable />
            </Route>
            <Route path="/manageGroup">
                <GroupManageRequestsTable />
            </Route>
            <Route path="/groupCreation">
                <CreateGroupRequestsTable />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    );

    const renderApp = () => (
        <ThemeProvider theme={globalTheme(preferences.paletteType)}>
            <CssBaseline />
            <div>
                <Router>
                    <div className="background" />
                    <main className={`${classes.content} ${isFirstLogin ? classes.disableClick : ''}`}>
                        <div className={classes.header}>
                            <img src={friendslogo} alt="" className={classes.image} />
                            <ToolBar />
                        </div>
                    </main>
                    {!isFirstLogin ? router : null}
                </Router>
                <Backdrop open={isFirstLogin}>
                    <FirstLoginPopUp disablePopUp={() => setIsFirstLogin(false)} />
                </Backdrop>{' '}
            </div>
        </ThemeProvider>
    );

    // eslint-disable-next-line no-nested-ternary
    return isLoading ? renderLoading() : currentUser ? renderApp() : renderUnauthorized();
};

export default App;
