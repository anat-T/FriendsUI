/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import i18next from 'i18next';
import { Checkbox, FormControlLabel, FormGroup, Grid, makeStyles, Radio, RadioGroup, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: '100%',
    },
    agreeButton: {
        backgroundColor: '#FF0606',
        borderRadius: '20px',
    },
    title: {
        fontWeight: 600,
        color: '#707070',
        fontSize: '43px',
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
}));

export default function Warning(props: { open: boolean; setOpen: any; rule3: string; rule4: string }) {
    const { open, setOpen, rule3, rule4 } = props;
    const rules = [
        { name: `${i18next.t('Warning.rule1')}`, set: 'false' },
        { name: `${i18next.t('Warning.rule2')}`, set: 'false' },
        { name: rule3, set: 'false' },
        { name: rule4, set: 'false' },
    ];

    const classes = useStyles();

    const handleClose = () => {
        // todo: make post request with data
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{i18next.t('Warning.title')}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{i18next.t('Warning.subTitleUser')}</DialogContentText>
                <FormGroup>
                    {rules.map((rule) => (
                        <FormControlLabel control={<Checkbox />} label={rule.name} />
                    ))}
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button className={classes.agreeButton} onClick={handleClose} color="primary">
                    {i18next.t('Warning.agree')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
