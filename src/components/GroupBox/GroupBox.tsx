/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box, Grid, Theme, Typography, makeStyles } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import i18next from 'i18next';

const useStyles = makeStyles((theme: Theme) => ({
    boxIcon: {
        color: '#92E1D6',
        marginRight: '38%',
        fontSize: '50px',
        opacity: '0.6',
        paddingTop: '3%',
    },
    typography: {
        fontWeight: 600,
        fontSize: '28px',
        color: '#707070',
    },
    groupBox: {
        width: '300px',
        height: '220px',
        borderRadius: '12px',
        backgroundColor: 'white',
        display: 'block',
    },
    groupNameBox: {
        color: '#707070',
        fontSize: '22px',
        paddingRight: '1%',
        fontWeight: 600,
        textAlign: 'center',
        height: '95px',
    },
    detailsBox: {
        paddingTop: '2%',
        paddingRight: '5%',
    },
    detailsTypography: {
        color: '#707070',
        fontSize: '18px',
        paddingRight: '1%',
    },
}));

type searchBarProps = {
    groupName: any;
    groupManager: String;
    groupNumberOfParticipents: String;
};

export default function GroupBox({ groupName, groupManager, groupNumberOfParticipents }: searchBarProps) {
    const classes = useStyles();

    return (
        <Grid item key={groupName} className={classes.groupBox}>
            <MailIcon className={classes.boxIcon} />
            <Typography className={classes.groupNameBox}>{groupName}</Typography>
            <Grid item>
                <Box display="flex" className={classes.detailsBox}>
                    <Typography className={classes.detailsTypography}>{i18next.t('GroupBox.manager')}</Typography>
                    <Typography className={classes.detailsTypography}>{groupManager}</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Box display="flex" className={classes.detailsBox}>
                    <Typography className={classes.detailsTypography}>{i18next.t('GroupBox.numberOfParticipents')}</Typography>
                    <Typography className={classes.detailsTypography}>{groupNumberOfParticipents}</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
