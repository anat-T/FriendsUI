/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import i18next from 'i18next';
import { Box, FormGroup, Grid, makeStyles, Theme } from '@material-ui/core';
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
        fontSize: '26px',
        fontWeight: 'bold',
        // justifyContent: 'center',
        // display: 'flex',
    },
    subTitle: {
        color: '#707070',
        fontSize: '22px',
        // fontStyle: 'bold',
        marginTop: '-15px',
    },
    text: {
        color: '#707070',
        fontSize: '22px',
    },
    headerText: {
        fontWeight: 'bold',
    },
    button: {
        justifyContent: 'center',
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
                <div className={classes.title}>{i18next.t('MoreDetails.title')}</div>
            </DialogTitle>
            <DialogContent id="alert-dialog-title">
                <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                    <Box className={classes.subTitle}>
                        <Grid item>
                            <Grid container direction="row" alignItems="flex-start" spacing={2}>
                                <Grid item className={classes.headerText}>
                                    {i18next.t('MoreDetails.friends')}
                                </Grid>
                                <Grid item>{getGroupLength()}</Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" spacing={2}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.displayName')}
                            </Grid>
                            <Grid item>{group.displayName}</Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" spacing={2}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.groupName')}
                            </Grid>
                            <Grid item>{group.name}</Grid>
                        </Grid>
                    </Box>
                </Grid>
            </DialogContent>
            <DialogActions className={classes.button} />
        </Dialog>
    );
}
