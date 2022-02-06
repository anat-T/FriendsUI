/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dialog, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: '100%',
    },
}));

export default function GroupDetails(props: { open: boolean; setOpen: any }) {
    const classes = useStyles();
    const { open, setOpen } = props;

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            className={classes.root}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        />
    );
}
