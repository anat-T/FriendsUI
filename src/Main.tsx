import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

import SearchBar from './components/SearchBar/SearchBar';

// const drawerWidth = 200;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            direction: 'rtl',
            marginRight: 'auto',
            marginLeft: 'auto',
        },
    }),
);

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
            <SearchBar />
        </div>
    );
};

export default Main;
