import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import Cookies from 'js-cookie';

import SearchBar from './components/SearchBar/SearchBar';
import FirstLoginPopUp from './components/FirstLoginPopUp/FirstLoginPopUp';

// const drawerWidth = 200;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            direction: 'rtl',
            marginRight: 'auto',
            marginLeft: 'auto',
            placeItems: 'center',
        },
    }),
);

const Main = () => {
    const [state, setState] = useState(true);
    const ShouldShowFirstTimeDialogue = () => {
        if (!Cookies.get('firstTimeLogin')) {
            setState(true);
        } else {
            setState(false);
        }
    };

    useEffect(() => {
        ShouldShowFirstTimeDialogue();
    }, []);

    const classes = useStyles();

    console.log(state);
    return <div className={classes.root}>{state ? <FirstLoginPopUp disablePopUp={() => setState(false)} /> : <SearchBar />}</div>;
};

export default Main;
