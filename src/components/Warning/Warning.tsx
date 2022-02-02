/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import i18next from 'i18next';
import { pink } from '@material-ui/core/colors';
import { Checkbox, FormControlLabel, FormGroup, Grid, makeStyles, Radio, RadioGroup, Theme } from '@material-ui/core';
import warningSign from '../../images/warning.png';

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
        fontSize: '43px',
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

export default function Warning(props: { open: boolean; setOpen: any; warningType: any }) {
    const { open, setOpen, warningType } = props;
    const rules = [
        { name: `${i18next.t('Warning.rule1')}`, set: 'false' },
        { name: `${i18next.t('Warning.rule2')}`, set: 'false' },
        { name: warningType === 'User' ? `${i18next.t('Warning.rule3')}` : `${i18next.t('Warning.rule5')}`, set: 'false' },
        { name: warningType === 'User' ? `${i18next.t('Warning.rule4')}` : `${i18next.t('Warning.rule6')}`, set: 'false' },
    ];

    const [enable, setEnable] = useState(false);

    const classes = useStyles();

    const handleClose = () => {
        // todo: make post request with data
        setOpen(false);
    };

    return (
        <Dialog
            className={classes.root}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className={classes.signWrap}>
                <img src={warningSign} alt="" className={classes.warningSign} />
            </div>
            <DialogTitle className={classes.title} id="alert-dialog-title">
                {i18next.t('Warning.title')}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" className={classes.subTitle}>
                    {warningType === 'User' ? i18next.t('Warning.subTitleUser') : i18next.t('Warning.subTitleManager')}
                </DialogContentText>
                <FormGroup>
                    {rules.map((rule) => (
                        <FormControlLabel className={classes.text} control={<Checkbox color="default" />} label={rule.name} />
                    ))}
                </FormGroup>
            </DialogContent>
            <DialogActions className={classes.button}>
                <Button className={classes.agreeButton} onClick={handleClose} color="primary">
                    {i18next.t('Warning.agree')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
