/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import {
    Grid,
    makeStyles,
    TextField,
    Theme,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    InputLabel,
    Select,
    Box,
    Button,
    MenuItem,
    Chip,
} from '@material-ui/core';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import { Style, TagFacesSharp } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import { styled, StylesProvider, jssPreset } from '@material-ui/styles';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { Autocomplete } from '@material-ui/lab';
import store from '../../stores/store';
import * as usersApi from '../../utils/api-routes/user';
import debounce from '../../utils/debounce';
import * as createApi from '../../utils/api-routes/create';

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: '100%',
    },
    icon: {
        color: '#92E1D6',
        marginLeft: '20px',
        fontSize: '38px',
    },
    typography: {
        fontWeight: 600,
        fontSize: '28px',
        color: '#707070',
    },
    subTypography: {
        fontSize: '21px',
        color: '#707070',
        marginTop: '5%',
    },
    textField: {
        height: 'auto',
        borderRadius: '40px',
        backgroundColor: 'white',
        width: '100%',
        paddingRight: '20px',
        right: 0,
        minWidth: '300px',
    },
    grid: {
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiInputBase-input': {
            fontSize: '18px',
            backgroundColor: 'transparent',
        },
        minWidth: '100%',
    },
    gridRow: {
        width: '40%',
    },
    group: {
        marginRight: '20px',
        flexDirection: 'row',
        direction: 'ltr',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: '#707070',
        borderRadius: '30px',
        // right: 0,
    },
    buttons: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        width: '35%',
        color: '#707070',
        minWidth: '300px',
    },
    warningText1: {
        color: '#707070',
        fontWeight: 'bold',
        marginRight: '7%',
        fontSize: '18px',
    },
    warningText2: {
        color: '#707070',
        fontWeight: 'bold',
        fontSize: '18px',
    },
    warningWrapper: {
        marginTop: '15%',
        justifyContent: 'center',
        display: 'block',
        border: 'solid #707070',
        borderWidth: 'thin',
        width: 'fit-content',
        padding: '20px',
    },
    sendButton: {
        backgroundColor: '#92E1D6',
        borderRadius: '40px',
        width: '100%',
        color: 'white',
        fontWeight: 600,
        fontSize: '18px',
        marginTop: '3em',
        padding: '6px 50px',
        boxShadow: '0px 3px 15px #00000029',
        '&:hover': {
            backgroundColor: '#c0ebe5',
        },
    },
    option: {
        color: '#707070',
    },
    classifySelect: {
        height: '40px',
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '20px',
        fontSize: 18,
        padding: '10px 26px 10px 12px',
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
        '&:hover': {},
        width: '180px',
    },
    chip: {
        backgroundColor: '#92E1D6',
        paddingLeft: '10px',
        marginBottom: '5px',
    },
    radio: {
        minWidth: '25%',
    },
}));

const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
});

const fields = [
    { title: 'שם תצוגה', text: 'הכנס/י שם לקבוצה שלך' },
    { title: 'הוספת משתתפים', text: 'חפש/י אנשים להוספה לקבוצה' },
    { title: 'גורם מאשר', text: 'חפש/י גורם מאשר ליצירת קבוצה' },
];

const users = [
    { displayName: 'Anataaaa', sAMAccountName: '123' },
    { displayName: 'Sean', sAMAccountName: '12' },
    { displayName: 'Itay', sAMAccountName: '1' },
];

const approvers = [
    {
        _id: '5e5688324203fc40043591aa',
        phone: ['026666998'],
        mobilePhone: ['0521234565'],
        clearance: '0',
        firstName: 'נייקי',
        lastName: 'אדידס',
        identityCard: '312571458',
        entityType: 'digimon',
        createdAt: '2020-02-26T15:01:06.870Z',
        updatedAt: '2022-02-01T13:16:20.037Z',
        fullName: 'נייקי אדידס',
        displayName: 'es_name/going to something grate- נייקי אדידס',
        directGroup: '61d37c49e4de0300121dee76',
        hierarchy: 'es_name',
        jobTitle: 'going to something grate',
        mail: 't23458789@jello.com',
        id: '5e5688324203fc40043591aa',
    },
    {
        _id: '5e5688324203fc40043591aa',
        phone: ['026666998'],
        mobilePhone: ['0521234565'],
        clearance: '0',
        firstName: 'נייקי',
        lastName: 'אדידס',
        identityCard: '312571458',
        entityType: 'digimon',
        createdAt: '2020-02-26T15:01:06.870Z',
        updatedAt: '2022-02-01T13:16:20.037Z',
        fullName: 'נייקי אדידס',
        displayName: 'המלך/של/המזרח/התיכון',
        directGroup: '61d37c49e4de0300121dee76',
        hierarchy: 'es_name',
        jobTitle: 'going to something grate',
        mail: 't23458789@jello.com',
        id: '5e5688324203fc40043591aa',
    },
];

export default function CreateGroup() {
    const classes = useStyles();

    const [type, setType] = useState('security');
    const [classify, setClassify] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [members, setMembers] = useState([] as string[]);
    const [approver, setApprover] = useState('');

    const [userPrefix, setUserPrefix] = useState('');
    const [approverPrefix, setApproverPrefix] = useState('');

    const [required, setRequired] = useState([] as boolean[]);

    // const [users, setUsers] = useState([] as any);
    // const [approvers, setApprovers] = useState([] as any);

    const isNotNullOrUndefinedOrEmpty = (value: string) => {
        return value !== null && value !== undefined && value !== '' && value !== ' ';
    };

    const areAllStatesFilled = (): boolean => {
        return (
            isNotNullOrUndefinedOrEmpty(type) &&
            isNotNullOrUndefinedOrEmpty(classify) &&
            isNotNullOrUndefinedOrEmpty(type) &&
            isNotNullOrUndefinedOrEmpty(approver) &&
            members.length > 0
        );
    };

    const setRequiredField = (index: number, value: string) => {
        required[index] = isNotNullOrUndefinedOrEmpty(value);
        setRequired(required);
    };

    const handleTypeChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setType(event.target.value);
    };

    const handleClassifyChange = (event: any) => {
        setClassify(event.target.value);

        setRequiredField(0, classify);
    };

    const displayNameInputChange = (event: any) => {
        setDisplayName(event.target.value);

        setRequiredField(1, displayName);
    };

    const addMembers = (event: any, newInputValue: any) => {
        const newMembers = newInputValue.map((member: { sAMAccountName: any }) => member.sAMAccountName);
        setMembers(newMembers);
    };

    const userInputChange = (event: any, newInputValue: any) => {
        setUserPrefix(newInputValue);
    };

    const approverInputChange = (event: any, newInputValue: any) => {
        setApproverPrefix(newInputValue);
    };

    const handleApprover = (event: any, newInputValue: any) => {
        // const newApprover = newInputValue.map((member: { id: any }) => member.id);
        // setApprover(newApprover[0]);
        setApprover(newInputValue);
    };

    const sendCreateRequest = () => {
        const groupName = `${store.getState().user.displayName}/${displayName}`;

        const request = {
            creator: store.getState().user.id,
            approver,
            group: {
                groupName,
                hierarchy: store.getState().user.displayName,
                displayName,
                classification: classify,
                owner: store.getState().user.id,
                members,
                type,
            },
        };

        console.log(request);

        // createApi.createCreateRequest(
        //     approver,
        //     groupName,
        //     store.getState().user.displayName,
        //     type,
        //     displayName,
        //     classify,
        //     members,
        //     store.getState().user.id,
        // );
    };

    // useEffect(() => {
    //     async function getUsers() {
    //         const newUsers = await usersApi.searchUsersByName(userPrefix);
    //         setUsers(newUsers);
    //     }
    //     getUsers();
    // }, [userPrefix]);

    // useEffect(() => {
    //     async function getApprovers() {
    //         const newApprovers = await usersApi.searchApproverByName(type, approverPrefix);
    //         setApprovers(newApprovers);
    //     }
    //     getApprovers();
    // }, [approverPrefix]);

    return (
        <>
            <div className={classes.header}>
                <CreateNewFolderIcon className={classes.icon} />
                <Typography className={classes.typography}>יצירת קבוצה</Typography>
            </div>
            <Grid container className={classes.grid} direction="column" alignItems="center">
                <Grid className={classes.gridRow}>
                    <Typography className={classes.subTypography}>ההיררכיה שלי</Typography>
                    <TextField
                        disabled
                        className={classes.textField}
                        InputProps={{ disableUnderline: true }}
                        label={store.getState().user.displayName}
                        // store.getState().user.hierarchy
                    />
                </Grid>
                <Grid container direction="row" className={classes.buttons} justifyContent="space-between" alignItems="center">
                    <Grid item className={classes.radio}>
                        <Grid container direction="row" alignItems="flex-start">
                            <Grid item>
                                <RadioGroup className={classes.group} value={type} onChange={handleTypeChange}>
                                    <FormControlLabel value="mail" control={<Radio color="default" />} label="קבוצת אבטחה" labelPlacement="start" />
                                    <FormControlLabel
                                        value="security"
                                        control={<Radio color="default" />}
                                        label="תפוצת דואל"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" alignItems="flex-end">
                            <Grid item>
                                <StylesProvider jss={jss}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="classifyLabel">סיווג</InputLabel>
                                        <Select
                                            value={classify}
                                            labelId="classifyLabel"
                                            className={classes.classifySelect}
                                            onChange={handleClassifyChange}
                                        >
                                            <MenuItem className={classes.option} value="safe">
                                                מנהלי
                                            </MenuItem>
                                            <MenuItem className={classes.option} value="secret">
                                                סגול מצומצם
                                            </MenuItem>
                                            <MenuItem className={classes.option} value="topSecret">
                                                כחול
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </StylesProvider>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className={classes.gridRow}>
                    <Typography className={classes.subTypography}>{fields[0].title}</Typography>
                    <TextField
                        required
                        className={classes.textField}
                        InputProps={{ disableUnderline: true }}
                        label={fields[0].text}
                        onChange={displayNameInputChange}
                    />
                </Grid>

                <Grid className={classes.gridRow}>
                    <Typography className={classes.subTypography}>{fields[1].title}</Typography>
                    <Autocomplete
                        freeSolo
                        multiple
                        options={users}
                        getOptionLabel={(option: any) => option.displayName}
                        onChange={addMembers}
                        onInputChange={debounce(userInputChange, 450)}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip classes={{ root: classes.chip }} label={option.displayName} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                required
                                className={classes.textField}
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                }}
                                label={fields[1].text}
                            />
                        )}
                        renderOption={(option) => (
                            <Box style={{ width: '100%', overflowX: 'hidden' }} display="flex" justifyContent="space-between" alignItems="center">
                                <Box flex={1}>{option.displayName}</Box>
                                <Box />
                            </Box>
                        )}
                    />
                </Grid>

                <Grid className={classes.gridRow}>
                    <Typography className={classes.subTypography}>{fields[2].title}</Typography>
                    <Autocomplete
                        freeSolo
                        options={approvers}
                        getOptionLabel={(option: any) => option.displayName}
                        filterOptions={(x) => x}
                        onChange={handleApprover}
                        onInputChange={debounce(approverInputChange, 450)}
                        renderInput={(params) => (
                            <TextField
                                required
                                className={classes.textField}
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                }}
                                label={fields[2].text}
                            />
                        )}
                        renderOption={(option) => (
                            <Box style={{ width: '100%', overflowX: 'hidden' }} display="flex" justifyContent="space-between" alignItems="center">
                                <Box flex={1}>{option.displayName}</Box>
                                <Box />
                            </Box>
                        )}
                    />
                </Grid>

                <Grid>
                    <div className={classes.warningWrapper}>
                        <Typography className={classes.warningText1} classes={{ body1: classes.warningText1 }}>
                            {i18next.t('createGroup.warning')}
                        </Typography>
                        <Typography className={classes.warningText2} classes={{ body1: classes.warningText2 }}>
                            {i18next.t('createGroup.warning2')}
                        </Typography>
                    </div>
                </Grid>
                <Grid>
                    <Button disabled={!areAllStatesFilled()} className={classes.sendButton} onClick={sendCreateRequest}>
                        {i18next.t('createGroup.send')}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
