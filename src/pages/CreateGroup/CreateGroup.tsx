/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
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
} from '@material-ui/core';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import InputBase from '@material-ui/core/InputBase';
import { styled, StylesProvider, jssPreset } from '@material-ui/styles';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { Autocomplete } from '@material-ui/lab';
import useCreateGroup from './hooks/useCreateGroup';
import useSearch from './hooks/useSearch';
import debounce from '../../utils/debounce';

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
        height: '49px',
        borderRadius: '40px',
        backgroundColor: 'white',
        width: '100%',
        paddingRight: '20px',
        right: 0,
    },
    grid: {
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: 'white',
        color: '#707070',
    },
    buttons: {
        display: 'inline-flex',
        justifyContent: 'space-between',
        width: '35%',
        color: '#707070',
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
}));

const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: 'white',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const fields = [
    { title: 'גורם מאשר', text: 'חפש/י גורם מאשר', setterName: 'setOwner', searchSetterName: 'onOwnerChange' },
    { title: 'הוספת משתתפים', text: 'חפש/י אנשים להוספה לקבוצה', setterName: 'setMembers', searchSetterName: 'onUserChange', multiple: true },
];

export default function CreateGroup() {
    const classes = useStyles();

    const { handleSend, setters, values } = useCreateGroup();
    const { usersOptions, ownersOptions, ...searchSetters } = useSearch();

    return (
        <>
            <div className={classes.header}>
                <CreateNewFolderIcon className={classes.icon} />
                <Typography className={classes.typography}>יצירת קבוצה</Typography>
            </div>
            <Grid container className={classes.grid} direction="column">
                <Grid className={classes.gridRow}>
                    <Typography className={classes.subTypography}>ההיררכיה שלי</Typography>
                    <TextField
                        className={classes.textField}
                        value={values.hierarchy}
                        onChange={(e) => setters.setHierarchy(e.target.value)}
                        InputProps={{ disableUnderline: true }}
                        label=""
                    />
                </Grid>
                <Grid className={classes.buttons}>
                    <RadioGroup className={classes.group} value={values.type} onChange={(e) => setters.setType(e.target.value)}>
                        <FormControlLabel value="mail" control={<Radio color="default" />} label="קבוצת אבטחה" labelPlacement="start" />
                        <FormControlLabel value="security" control={<Radio color="default" />} label="תפוצת דואל" labelPlacement="start" />
                    </RadioGroup>
                    <StylesProvider jss={jss}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>סיווג</InputLabel>
                            {/* <Select value={classify} onChange={(event) => handleChangeSelect(event.target.value)} label="סיווג"> */}
                            <Select
                                value={values.classification}
                                onChange={(e) => setters.setClassification(e.target.value as any)}
                                label="סיווג"
                                input={<BootstrapInput />}
                            >
                                <option className={classes.option} value="safe">
                                    מנהלי
                                </option>
                                <option className={classes.option} value="secret">
                                    סגול מצומצם
                                </option>
                                <option className={classes.option} value="topSecret">
                                    כחול
                                </option>
                            </Select>
                        </FormControl>
                    </StylesProvider>
                </Grid>
                <Grid className={classes.gridRow}>
                    <Typography className={classes.subTypography}>שם תצוגה</Typography>
                    <TextField
                        className={classes.textField}
                        value={values.displayName}
                        onChange={(e) => setters.setDisplayName(e.target.value)}
                        InputProps={{ disableUnderline: true }}
                        label="הכנס/י שם לקבוצה שלך"
                    />
                </Grid>
                {fields.map((field) => (
                    <Grid className={classes.gridRow}>
                        <Typography className={classes.subTypography}>{field.title}</Typography>
                        <Autocomplete
                            className={classes.textField}
                            getOptionLabel={(option: any) => option.name}
                            multiple={field.multiple ?? false}
                            onInputChange={(_, value) => debounce(searchSetters[field.searchSetterName as keyof typeof searchSetters](value), 450)}
                            onChange={(_, value) =>
                                setters[field.setterName as keyof typeof setters](
                                    (Array.isArray(value) ? value.map((selected) => selected.value) : value?.value!) as any,
                                )
                            }
                            options={field.searchSetterName === 'onOwnerChange' ? ownersOptions : usersOptions}
                            renderInput={(params) => (
                                <TextField
                                    variant="standard"
                                    // eslint-disable-next-line react/jsx-props-no-spreading
                                    {...params}
                                    placeholder={field.text}
                                    InputProps={{
                                        ...params.InputProps,
                                        autoComplete: 'new-password',
                                        disableUnderline: true,
                                    }}
                                />
                            )}
                            renderOption={(option) => (
                                <Box style={{ width: '100%', overflowX: 'hidden' }} display="flex" justifyContent="space-between" alignItems="center">
                                    <Box flex={1}>{option.name}</Box>
                                    <Box />
                                </Box>
                            )}
                        />
                    </Grid>
                ))}
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
                    <Button onClick={handleSend} className={classes.sendButton}>
                        {i18next.t('createGroup.send')}
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
