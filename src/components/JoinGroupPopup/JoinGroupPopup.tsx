/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import i18next from 'i18next';
import { Dialog, makeStyles, Theme } from '@material-ui/core';
import { any } from 'prop-types';

const useStyles = makeStyles((theme: Theme) => ({}));

type JoinGroupPopupProps = {
    joinROpen: boolean;
    setJoinROpen: any;
};

export default function JoinGroupPopup({ joinROpen, setJoinROpen }: JoinGroupPopupProps) {
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
            // classes={{ paper: classes.dialogPaper }}
        />
    );
}
