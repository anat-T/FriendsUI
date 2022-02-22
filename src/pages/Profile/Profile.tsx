/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import i18next from 'i18next';
// eslint-disable-next-line import/no-unresolved
import PersonIcon from '@material-ui/icons/Person';
import requests from '../../images/requests.png';
import groupManager from '../../images/groupManager.png';
import myGroups from '../../images/myGroups.png';
import SectionButton from '../../components/SectionButton/SectionButton';

const useStyles = makeStyles((theme: Theme) => ({
    grid: {
        paddingTop: '3%',
    },
    header: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: '100%',
    },
    typography: {
        fontWeight: 600,
        fontSize: '28px',
        color: '#707070',
    },
    icon: {
        color: '#92E1D6',
        marginLeft: '10px',
        fontSize: '38px',
    },
}));

const sections = [
    { title: i18next.t('profile.requests'), src: requests, route: '/myRequests' },
    { title: i18next.t('profile.myGroups'), src: myGroups, route: '/myGroups' },
    { title: i18next.t('profile.groupManager'), src: groupManager, route: '/groupManager' },
];

export default function Profile() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.header}>
                <PersonIcon className={classes.icon} />
                <Typography className={classes.typography}>{i18next.t('profile.title')}</Typography>
            </div>
            <Grid container direction="row" className={classes.grid} justifyContent="center" alignItems="center" spacing={8}>
                {sections.map((section) => (
                    <Grid item>
                        <SectionButton title={section.title} src={section.src} route={section.route} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
