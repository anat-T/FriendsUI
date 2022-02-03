import React from 'react';
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

function ShouldShowFirstTimeDialogue() {
    if (!Cookies.get('firstTimeLogin')) {
        return <FirstLoginPopUp />;
    }
    return <SearchBar />;
}

const Main = () => {
    // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const classes = useStyles();

    // const handleDrawerOpen = () => {
    //     setIsDrawerOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setIsDrawerOpen(false);
    // };

    return (
        <div className={classes.root}>
            <ShouldShowFirstTimeDialogue />
        </div>
    );
};

export default Main;
