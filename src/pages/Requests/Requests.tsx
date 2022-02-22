/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import i18next from 'i18next';
// eslint-disable-next-line import/no-unresolved
import PersonIcon from '@material-ui/icons/Person';
// import DataTable from '../../components/DataTable/DataTable';
import groupCreation from '../../images/groupCreation.svg';
import groupManagement from '../../images/groupManagement.svg';
import groupJoin from '../../images/groupJoin.svg';
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
    { title: i18next.t('requests.groupCreation'), src: groupCreation, route: '/groupCreation' },
    { title: i18next.t('requests.groupJoin'), src: groupJoin, route: '/joinGroupRequests' },
    { title: i18next.t('requests.groupManagement'), src: groupManagement, route: '/manageGroup' },
];

export default function Requests() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.header}>
                <PersonIcon className={classes.icon} />
                <Typography className={classes.typography}>{i18next.t('requests.title')}</Typography>
            </div>
            <Grid container className={classes.grid} justifyContent="center" alignItems="center" spacing={8}>
                {sections.map((section) => (
                    <Grid item>
                        <SectionButton title={section.title} src={section.src} route={section.route} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
