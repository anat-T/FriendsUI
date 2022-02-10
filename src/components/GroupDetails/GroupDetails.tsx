/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dialog, Grid, makeStyles, Theme, Typography, Fab } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import JoinGroupPopup from '../JoinGroupPopup/JoinGroupPopup';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        fontWeight: 600,
        fontSize: '31px',
        color: '#707070',
        paddingBottom: '4%',
    },
    container: {
        display: 'inline-grid',
        paddingTop: '4%',
        paddingRight: '6%',
    },
    typography: {
        fontSize: '22px',
        color: '#707070',
    },
    boldTypography: {
        fontWeight: 600,
        fontSize: '22px',
        color: '#707070',
        width: '350px',
        paddingTop: '7%',
    },
    dividedTypography: {
        fontSize: '22px',
        color: '#707070',
        width: '350px',
        paddingTop: '1%',
    },
    grid: {
        display: 'inline-flex',
    },
    dialogPaper: {
        minHeight: '45vh',
        maxHeight: '60vh',
        minWidth: '95vh',
    },
    icon: {
        backgroundColor: '#92E1D6',
        color: 'white',
        width: '60px',
    },
    iconGrid: {
        direction: 'ltr',
        paddingTop: '5%',
        paddingLeft: '4%',
    },
}));

type groupDetailsProps = {
    open: boolean;
    setOpen: any;
    groupName: String;
    groupManager: String;
    groupNumberOfParticipents: String;
    participants: Array<any>;
};

export default function GroupDetails({ open, setOpen, groupName, groupManager, groupNumberOfParticipents, participants }: groupDetailsProps) {
    const classes = useStyles();

    const [joinROpen, setJoinROpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const addPersonClick = () => {
        setJoinROpen(true);
        setOpen(false);
    };

    const editGroupClick = () => {
        // TODO: edit group
    };

    return (
        <>
            <JoinGroupPopup joinROpen={joinROpen} setJoinROpen={setJoinROpen} />
            <Dialog
                className={classes.root}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{ paper: classes.dialogPaper }}
            >
                <Grid container className={classes.container}>
                    <Grid item>
                        <Typography className={classes.title}>{groupName}</Typography>
                    </Grid>
                    <Grid item className={classes.grid}>
                        <Typography className={classes.typography}>{i18next.t('GroupBox.manager')}</Typography>
                        <Typography className={classes.typography}>{groupManager}</Typography>
                    </Grid>
                    <Grid item className={classes.grid}>
                        <Typography className={classes.typography}>{i18next.t('GroupBox.numberOfParticipents')}</Typography>
                        <Typography className={classes.typography}>{groupNumberOfParticipents}</Typography>
                    </Grid>
                    <Grid item className={classes.grid}>
                        <Typography className={classes.boldTypography}>{i18next.t('GroupDetails.mailURL')}</Typography>
                        <Typography className={classes.boldTypography}>{i18next.t('GroupDetails.name')}</Typography>
                    </Grid>
                    <Grid item>
                        {participants.map((participant) => (
                            <Grid item className={classes.grid}>
                                <Typography className={classes.dividedTypography}>{participant.mail}</Typography>
                                <Typography className={classes.dividedTypography} style={{ width: '550px' }}>
                                    {participant.name}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid className={classes.iconGrid} onClick={addPersonClick}>
                    <Fab className={classes.icon}>
                        <PersonAddIcon />
                    </Fab>
                    {/* <Fab className={classes.icon}>
                    <EditIcon onClick={editGroupClick} />
                </Fab> */}
                </Grid>
            </Dialog>
        </>
    );
}
