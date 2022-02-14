/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import i18next from 'i18next';
import { Button, Dialog, Grid, makeStyles, TextareaAutosize, TextField, Theme, Typography } from '@material-ui/core';
import { any } from 'prop-types';

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
    dialogPaper: {
        minHeight: '45vh',
        maxHeight: '60vh',
        minWidth: '95vh',
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
    grid: {
        display: 'inline-flex',
    },
    detailsContainer: {
        display: 'grid',
        paddingTop: '2%',
    },
    contentArea: {
        paddingTop: '3%',
        paddingBottom: '3%',
    },
    content: {
        width: 1000,
    },
    button: {
        backgroundColor: '#92E1D6',
        color: 'white',
        width: '300px',
        fontSize: '22px',
        borderRadius: '40px',
        height: '70px',
        alignSelf: 'center',
    },
}));

type JoinGroupPopupProps = {
    joinROpen: boolean;
    setJoinROpen: any;
    groupName: String;
    groupManager: String;
    groupNumberOfParticipents: String;
};

export default function JoinGroupPopup({ joinROpen, setJoinROpen, groupName, groupManager, groupNumberOfParticipents }: JoinGroupPopupProps) {
    const classes = useStyles();

    const handleClose = () => {
        setJoinROpen(false);
    };

    return (
        <Dialog
            // className={classes.root}
            open={joinROpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.root}
            classes={{ paper: classes.dialogPaper }}
        >
            <Grid container className={classes.container}>
                <Grid item>
                    <Typography className={classes.title}>{i18next.t('JoinRequest.title')}</Typography>
                </Grid>
                <Grid item className={classes.grid}>
                    <Typography className={classes.typography}>{i18next.t('JoinRequest.groupName')}</Typography>
                    <Typography className={classes.typography}>{groupName}</Typography>
                </Grid>
                <Grid container className={classes.detailsContainer}>
                    <Grid item className={classes.grid}>
                        <Typography className={classes.typography}>{i18next.t('GroupBox.manager')}</Typography>
                        <Typography className={classes.typography}>{groupManager}</Typography>
                    </Grid>
                    <Grid item className={classes.grid}>
                        <Typography className={classes.typography}>{i18next.t('GroupBox.numberOfParticipents')}</Typography>
                        <Typography className={classes.typography}>{groupNumberOfParticipents}</Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.contentArea}>
                    <TextField
                        size="medium"
                        variant="outlined"
                        multiline
                        minRows={4}
                        maxRows={4}
                        placeholder={i18next.t('JoinRequest.textAreaContent')}
                        // defaultValue={i18next.t('JoinRequest.textAreaContent')}
                        className={classes.content}
                    />
                </Grid>
            </Grid>
            <Button className={classes.button}>{i18next.t('JoinRequest.sendRequest')}</Button>
        </Dialog>
    );
}
