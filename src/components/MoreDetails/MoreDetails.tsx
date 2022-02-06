/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import i18next from 'i18next';
import { Box, FormGroup, Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
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
        display: 'inline-flex',
        justifyContent: 'space-between',
        padding: '5px 13px 5px 13px',
        boxShadow: '0px 3px 15px #00000029',
        '&:hover': {
            backgroundColor: '#c0ebe5',
        },
    },
    textField: {
        height: '49px',
        borderRadius: '40px',
        backgroundColor: 'white',
        width: '100%',
        paddingRight: '20px',
        right: 0,
    },
}));

export default function MoreDetails(props: { open: boolean; setOpen: any; group: ADGroup }) {
    const { open, setOpen, group } = props;

    const [edit, setEdit] = useState(false);

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        setEdit(true);
    };

    const handleDoneEdit = () => {
        setEdit(false);
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
                            <Grid container direction="row" justifyContent="flex-end">
                                <Grid item>
                                    {edit === false ? (
                                        <Button
                                            className={classes.button}
                                            style={{ backgroundColor: '#4287f5', borderRadius: '18px', color: 'white', width: '100px' }}
                                            onClick={handleEdit}
                                        >
                                            <EditIcon />
                                            {i18next.t('MoreDetails.edit')}
                                        </Button>
                                    ) : (
                                        <Button
                                            className={classes.button}
                                            style={{ backgroundColor: '#4287f5', borderRadius: '18px', color: 'white', width: '100px' }}
                                            onClick={handleDoneEdit}
                                        >
                                            <CheckCircleIcon />
                                            {i18next.t('MoreDetails.save')}
                                        </Button>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                        <hr
                            style={{
                                marginTop: '30px',
                                color: 'white',
                                backgroundColor: 'white',
                                height: 0.5,
                                borderColor: 'white',
                                width: '100%',
                            }}
                        />
                    </Box>
                </Grid>
            </DialogContent>
            <DialogActions className={classes.button} />
        </Dialog>
    );
}
