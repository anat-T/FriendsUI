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
import { Box, FormGroup, Grid, InputAdornment, makeStyles, TextField, Theme } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SearchIcon from '@material-ui/icons/Search';
import { ADGroup } from '../../interfaces/ADGroup';
import * as groupApi from '../../utils/api-routes/group';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiDialogTitle-root': {
            padding: '16px 24px 0px 24px',
        },
        display: 'inline-flex',
        justifyContent: 'center',
        width: '100%',
        '& .MuiDialog-paperWidthSm': {
            minWidth: '700px',
        },
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
        width: '100%',
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
        marginTop: '5px',
    },
    textField: {
        height: '35px',
        borderRadius: '40px',
        backgroundColor: 'white',
        width: '100%',
        top: '-3px',
        border: '1px solid',
        borderColor: '#707070',
        marginRight: '-10px',
        '& input::placeholder': {
            fontSize: '22px',
        },
        '& .MuiInputBase-input': {
            fontSize: '22px',
            padding: '5px 9px 5px 9px',
        },
        boxShadow: '0px 1px 5px',
    },
    addUser: {
        height: '35px',
        borderRadius: '40px',
        backgroundColor: 'white',
        width: '450px',
        top: '-3px',
        border: '1px solid',
        borderColor: '#707070',
        '& input::placeholder': {
            fontSize: '22px',
        },
        '& .MuiInputBase-input': {
            fontSize: '22px',
            padding: '5px 9px 5px 9px',
        },
        boxShadow: '0px 1px 5px',
    },
    editField: {
        height: '35px',
        width: '300px',
        fontSize: '22px',
    },
}));

export default function MoreDetails(props: { open: boolean; setOpen: any; group: ADGroup }) {
    const { open, setOpen, group } = props;

    const [edit, setEdit] = useState(false);

    const [displayName, setDisplayName] = useState(group.displayName);
    const [groupName, setGroupName] = useState(group.name);

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        setEdit(true);
    };

    const handleDoneEdit = () => {
        setEdit(false);
        const editedGroup = { groupId: group.sAMAccountName, displayName, name: groupName };
        console.log(editedGroup);
        // groupApi.updateGroup(group.sAMAccountName, editedGroup);
    };

    const handleGroupNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setGroupName(event.target.value);
    };

    const handleDisplayNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setDisplayName(event.target.value);
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
                        <Grid container direction="row" alignItems="flex-start" spacing={2}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.friends')}
                            </Grid>
                            <Grid item>{getGroupLength()}</Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" spacing={2}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.displayName')}
                            </Grid>
                            <Grid item className={classes.editField}>
                                {edit === false ? (
                                    group.displayName
                                ) : (
                                    <TextField
                                        className={classes.textField}
                                        InputProps={{ disableUnderline: true }}
                                        placeholder={group.displayName}
                                        onChange={handleDisplayNameChange}
                                    />
                                )}
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" spacing={2}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.groupName')}
                            </Grid>
                            <Grid item className={classes.editField}>
                                {edit === false ? (
                                    group.name
                                ) : (
                                    <TextField
                                        className={classes.textField}
                                        InputProps={{ disableUnderline: true }}
                                        placeholder={group.name}
                                        onChange={handleGroupNameChange}
                                    />
                                )}
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" spacing={2}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.manager')}
                            </Grid>
                            <Grid item>{group.owner.displayName}</Grid>
                        </Grid>
                        <Grid container justifyContent="flex-end">
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
                    </Box>
                    <hr
                        style={{
                            margin: '20px 0 20px 0',
                            color: 'white',
                            backgroundColor: 'white',
                            height: 0.5,
                            borderColor: 'white',
                            width: '100%',
                        }}
                    />
                    <Box className={classes.subTitle}>
                        <Grid container direction="row" justifyContent="space-between">
                            <Grid item className={classes.headerText}>
                                <Grid container direction="row" justifyContent="flex-start">
                                    {i18next.t('MoreDetails.addUsers')}
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" justifyContent="flex-end">
                                    <TextField
                                        className={classes.addUser}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <SearchIcon fontSize="large" style={{ color: '#4287f5' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        placeholder={i18next.t('MoreDetails.search')}
                                        onChange={handleGroupNameChange}
                                    />
                                </Grid>
                            </Grid>
                            <hr
                                style={{
                                    margin: '15px 0 20px 0',
                                    color: 'white',
                                    backgroundColor: 'white',
                                    height: 0.5,
                                    borderColor: 'white',
                                    width: '100%',
                                }}
                            />
                        </Grid>
                    </Box>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
