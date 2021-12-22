/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
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
import { Style } from '@material-ui/icons';
import InputBase from '@material-ui/core/InputBase';
import { styled, StylesProvider, jssPreset } from '@material-ui/styles';
import rtl from 'jss-rtl';
import { create } from 'jss';

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
    { title: 'שם תצוגה', text: 'הכנס/י שם לקבוצה שלך' },
    { title: 'הוספת משתתפים', text: 'חפש/י אנשים להוספה לקבוצה' },
    { title: 'גורם מאשר', text: 'חפש/י גורם מאשר ליצירת קבוצה' },
];

export default function CreateGroup() {
    const classes = useStyles();

    const [state, setState] = useState('security');
    const [classify, setClassify] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setState(event.target.value);
    };

    // const handleChangeSelect = (newValue: unknown) => {
    //     setClassify(newValue);
    // };

    return (
        <>
            <div className={classes.header}>
                <CreateNewFolderIcon className={classes.icon} />
                <Typography className={classes.typography}>יצירת קבוצה</Typography>
            </div>
            <Grid container className={classes.grid} direction="column">
                <Grid className={classes.gridRow}>
                    <Typography className={classes.subTypography}>ההיררכיה שלי</Typography>
                    <TextField className={classes.textField} InputProps={{ disableUnderline: true }} label="" />
                </Grid>
                <Grid className={classes.buttons}>
                    <RadioGroup className={classes.group} value={state} onChange={handleChange}>
                        <FormControlLabel value="mail" control={<Radio color="default" />} label="קבוצת אבטחה" labelPlacement="start" />
                        <FormControlLabel value="security" control={<Radio color="default" />} label="תפוצת דואל" labelPlacement="start" />
                    </RadioGroup>
                    <StylesProvider jss={jss}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>סיווג</InputLabel>
                            {/* <Select value={classify} onChange={(event) => handleChangeSelect(event.target.value)} label="סיווג"> */}
                            <Select value={classify} label="סיווג" input={<BootstrapInput />}>
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
                {fields.map((field) => (
                    <Grid className={classes.gridRow}>
                        <Typography className={classes.subTypography}>{field.title}</Typography>
                        <TextField className={classes.textField} InputProps={{ disableUnderline: true }} label={field.text} />
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
                    <Button className={classes.sendButton}>{i18next.t('createGroup.send')}</Button>
                </Grid>
            </Grid>
        </>
    );
}
