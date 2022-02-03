/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import i18next from 'i18next';
import { FormGroup, Grid, makeStyles, Theme } from '@material-ui/core';
import { ADGroup } from '../../interfaces/ADGroup';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: '100%',
    },
    agreeButton: {
        backgroundColor: '#FF0606',
        borderRadius: '20px',
        color: 'white',
    },
    title: {
        color: '#707070',
        fontSize: '22px',
        fontStyle: 'bold',
        justifyContent: 'center',
        display: 'flex',
    },
    subTitle: {
        color: '#707070',
        fontSize: '26px',
        fontStyle: 'bold',
    },
    text: {
        color: '#707070',
        fontSize: '26px',
    },
    button: {
        justifyContent: 'center',
    },
    warningSign: {
        width: '50px',
    },
    signWrap: {
        justifyContent: 'center',
        display: 'flex',
        paddingTop: '2%',
    },
}));

export default function MoreDetails(props: { open: boolean; setOpen: any; group: ADGroup }) {
    const { open, setOpen, group } = props;

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const getGroupLength = () => {
        return group.members ? group.members.length : 0;
    };

    return (
        <Dialog
            className={classes.root}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>
                <div className={classes.signWrap}>{i18next.t('MoreDetails.title')}</div>
            </DialogTitle>
            <DialogContent className={classes.title} id="alert-dialog-title">
                <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                    <Grid item>{`${i18next.t('MoreDetails.friends')} ${getGroupLength()}`}</Grid>
                    <Grid item>{`${i18next.t('MoreDetails.displayName')} ${group.displayName}`}</Grid>
                    <Grid item>{`${i18next.t('MoreDetails.friends')} ${group.name}`}</Grid>
                </Grid>
            </DialogContent>
            <DialogActions className={classes.button} />
        </Dialog>
    );
}
