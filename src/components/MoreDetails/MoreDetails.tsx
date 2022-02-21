/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import i18next from 'i18next';
import { Box, FormGroup, Grid, InputAdornment, makeStyles, TextField, Theme, Chip, IconButton } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import debounce from '../../utils/debounce';
import * as groupApi from '../../utils/api-routes/group';
import { Group } from '../../interfaces/FormatedRequests/Group';
import * as usersApi from '../../utils/api-routes/user';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: '100%',
        '& .MuiDialog-paperWidthSm': {
            minWidth: '800px',
            minHeight: '600px',
        },
    },
    dialogTitle: {
        padding: '50px 50px 0px 50px',
    },
    dialogContent: {
        padding: '0px 50px 0px 50px',
    },
    detail: {
        marginBottom: '10px',
    },
    title: {
        color: '#707070',
        fontSize: '26px',
        fontWeight: 'bold',
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
        borderColor: 'transparent',
        marginRight: '-10px',
        '& input::placeholder': {
            fontSize: '22px',
        },
        '& .MuiInputBase-input': {
            fontSize: '22px',
            padding: '6px 10px 6px 10px',
        },
    },
    addUser: {
        height: 'auto',
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
    },
    editField: {
        height: '35px',
        width: '300px',
        fontSize: '22px',
    },
    removeUser: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        padding: '5px 13px 5px 13px',
        boxShadow: '0px 1px 8px #00000029',
        '&:hover': {
            backgroundColor: '#E1F2FF',
        },
        marginTop: '5px',
        backgroundColor: '#c0ebe5',
        borderRadius: '2px',
        color: '#707070',
        width: '130px',
    },
    hr: {
        margin: '15px 0 20px 0',
        color: 'white',
        backgroundColor: 'white',
        height: 0.5,
        borderColor: 'white',
        width: '100%',
    },
    chip: {
        backgroundColor: '#49A3E1',
        paddingLeft: '10px',
    },
    iconButtonDisabled: {
        padding: 0,
    },
    iconButtonEnabled: {
        backgroundColor: '#49A3E1',
        padding: 0,
        '&:hover': {
            backgroundColor: 'white',
        },
    },
    iconEnabled: {
        color: 'white',
        '&:hover': {
            color: '#49A3E1',
        },
    },
    iconDisabled: {
        color: '#49A3E1',
    },
}));

// const users = [
//     { displayName: 'Anataaaa', sAMAccountName: '123' },
//     { displayName: 'Sean', sAMAccountName: '12' },
//     { displayName: 'Itay', sAMAccountName: '1' },
// ];

export default function MoreDetails(props: { open: boolean; setOpen: any; selectedGroup: Group }) {
    const { open, setOpen, selectedGroup } = props;

    const [edit, setEdit] = useState(false);

    const [group, setGroup] = useState(selectedGroup);

    const [displayName, setDisplayName] = useState(group.displayName);
    const [groupName, setGroupName] = useState(group.name);

    const [users, setUsers] = useState([] as any);
    const [userPrefix, setUserPrefix] = useState('');

    const [members, setMembers] = useState([] as string[]);

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = () => {
        setEdit(true);
    };

    const updateSelectedGroup = async () => {
        setGroup(await groupApi.getGroupById(group.sAMAccountName));
    };

    const handleDoneEdit = () => {
        setEdit(false);
        const editedGroup = { groupId: group.sAMAccountName, displayName, name: groupName };

        groupApi.updateGroup(group.sAMAccountName, editedGroup);
        updateSelectedGroup();
    };

    const handleGroupNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setGroupName(event.target.value);
    };

    const handleDisplayNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setDisplayName(event.target.value);
    };

    const userInputChange = (event: any, newInputValue: any) => {
        setUserPrefix(newInputValue);
    };

    const handleMembersAdd = (event: any, newInputValue: any) => {
        const newMembers = newInputValue.map((member: { sAMAccountName: any }) => member.sAMAccountName);
        setMembers(newMembers);
    };

    const removeMember = (member: { displayName?: string; sAMAccountName: any }) => {
        groupApi.deleteGroupMember(group.sAMAccountName, [member.sAMAccountName]);
        updateSelectedGroup();
    };

    const getGroupLength = () => {
        return group.members ? group.members.length : 0;
    };

    const areThereMembersToAdd = (): boolean => {
        return members.length > 0;
    };

    const addMembers = () => {
        groupApi.addGroupMembers(group.sAMAccountName, members);
        updateSelectedGroup();
    };

    useEffect(() => {
        async function getUsers() {
            const newUsers = await usersApi.searchUsersByName(userPrefix);
            setUsers(newUsers);
        }
        getUsers();
    }, [userPrefix]);

    return (
        <Dialog
            className={classes.root}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle className={classes.dialogTitle}>
                <div className={classes.title}>{i18next.t('MoreDetails.title')}</div>

                <hr className={classes.hr} />
            </DialogTitle>
            <DialogContent id="alert-dialog-title" className={classes.dialogContent}>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                    <Box className={classes.subTitle}>
                        <Grid container direction="row" alignItems="flex-start" spacing={2} className={classes.detail}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.friends')}
                            </Grid>
                            <Grid item>{getGroupLength()}</Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" spacing={2} className={classes.detail}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.displayName')}
                            </Grid>
                            <Grid item className={classes.editField}>
                                {!edit ? (
                                    group.displayName
                                ) : (
                                    <TextField className={classes.textField} onChange={handleDisplayNameChange} value={displayName} />
                                )}
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="flex-start" spacing={2} className={classes.detail}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.groupName')}
                            </Grid>
                            <Grid item className={classes.editField}>
                                {!edit ? group.name : <TextField className={classes.textField} onChange={handleGroupNameChange} value={groupName} />}
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
                                        style={{ backgroundColor: '#49A3E1', borderRadius: '18px', color: 'white', width: '100px' }}
                                        onClick={handleEdit}
                                    >
                                        <EditIcon />
                                        {i18next.t('MoreDetails.edit')}
                                    </Button>
                                ) : (
                                    <Button
                                        className={classes.button}
                                        style={{ backgroundColor: '#49A3E1', borderRadius: '18px', color: 'white', width: '100px' }}
                                        onClick={handleDoneEdit}
                                    >
                                        <CheckCircleIcon />
                                        {i18next.t('MoreDetails.save')}
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </Box>

                    <hr className={classes.hr} />

                    <Box className={classes.subTitle}>
                        <Grid container direction="row" justifyContent="space-between">
                            <Grid item className={classes.headerText}>
                                <Grid container direction="row" justifyContent="flex-start">
                                    {i18next.t('MoreDetails.addUsers')}
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" justifyContent="flex-end">
                                    <Autocomplete
                                        freeSolo
                                        multiple
                                        options={users}
                                        getOptionLabel={(option: any) => option.displayName}
                                        onChange={handleMembersAdd}
                                        onInputChange={debounce(userInputChange, 450)}
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <Chip classes={{ root: classes.chip }} label={option.displayName} {...getTagProps({ index })} />
                                            ))
                                        }
                                        renderInput={(params) => (
                                            <TextField
                                                className={classes.addUser}
                                                {...params}
                                                InputProps={{
                                                    ...params.InputProps,
                                                    disableUnderline: true,
                                                    // startAdornment: (
                                                    // <InputAdornment position="end">
                                                    //     <SearchIcon fontSize="large" style={{ color: '#49A3E1' }} />
                                                    // </InputAdornment>
                                                    // ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                disabled={!areThereMembersToAdd()}
                                                                onClick={addMembers}
                                                                className={
                                                                    areThereMembersToAdd() ? classes.iconButtonEnabled : classes.iconButtonDisabled
                                                                }
                                                            >
                                                                <AddIcon
                                                                    fontSize="large"
                                                                    className={areThereMembersToAdd() ? classes.iconEnabled : classes.iconDisabled}
                                                                />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                label={i18next.t('MoreDetails.search')}
                                                onChange={handleGroupNameChange}
                                            />
                                        )}
                                        renderOption={(option) => (
                                            <Box
                                                style={{ width: '100%', overflowX: 'hidden' }}
                                                display="flex"
                                                justifyContent="space-between"
                                                alignItems="center"
                                            >
                                                <Box flex={1}>{option.displayName}</Box>
                                                <Box />
                                            </Box>
                                        )}
                                    />
                                </Grid>
                            </Grid>

                            <hr className={classes.hr} />
                        </Grid>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.headerText}>
                                {i18next.t('MoreDetails.members')}
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" alignItems="flex-start" spacing={2}>
                                    {group.members.map((member) => (
                                        <Grid item>
                                            <Button className={classes.removeUser} style={{}} onClick={() => removeMember(member)}>
                                                {member.displayName}
                                                <ClearIcon />
                                            </Button>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
