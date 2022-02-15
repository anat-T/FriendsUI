/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { AppBar, Box, Button, Container, makeStyles, Typography, Theme } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import { globalTheme } from '../../theme';

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        width: 'auto',
        color: 'transparent',
    },
    typography: {
        color: '#707070',
        marginLeft: '10px',
        fontWeight: 'bold',
    },
    icon: {
        color: '#707070',
        marginLeft: '0.2em',
    },
    link: {
        marginLeft: '3.5em',
        marginRight: '3.5em',
        textDecoration: 'none',
        display: 'flex',
    },
}));

const toolBarOptions = [
    { name: 'חיפוש קבוצה', icon: SearchIcon, route: '' },
    { name: 'יצירת קבוצה', icon: AddCircleOutlineIcon, route: 'createGroup' },
    { name: 'פרופיל אישי', icon: PersonIcon, route: 'profile' },
    { name: 'בקשות לטיפולי', icon: NotificationsIcon, route: 'requests' },
];

export default function ToolBar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Container className={classes.container}>
                <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
                    {toolBarOptions.map((option) => (
                        <Link to={option.route} key={option.name} className={classes.link}>
                            <option.icon className={classes.icon} />
                            <Typography className={classes.typography}>{option.name}</Typography>
                        </Link>
                    ))}
                </Box>
            </Container>
        </AppBar>
    );
}
