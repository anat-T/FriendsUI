/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Box, Grid, Theme, Typography, makeStyles } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import i18next from 'i18next';
import GroupDetails from '../GroupDetails/GroupDetails';

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

const participantsDemo = [
    { mail: 'argaliyot@services.idf', name: 'מפקדת אסם/ ענף חטיפים/ מדור מתוקים/ ערגליות' },
    { mail: 'tortit@d360.dom', name: 'מפקדת אסם/ ענף חטיפים/ מדור מתוקים/ ערגליות' },
];

export default function GroupBox({ groupName, groupManager, groupNumberOfParticipents }: searchBarProps) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [participants, setParticipants] = useState(participantsDemo);

    const handleClick = () => {
        // TODO: get participants
        setOpen(true);
    };

    return (
        <>
            <GroupDetails
                open={open}
                setOpen={setOpen}
                groupName={groupName}
                groupManager={groupManager}
                groupNumberOfParticipents={groupNumberOfParticipents}
                participants={participants}
            />
            <Grid item key={groupName} className={classes.groupBox} onClick={handleClick}>
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
        </>
    );
}
