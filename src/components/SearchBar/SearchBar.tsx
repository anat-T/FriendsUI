/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, IconButton, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import i18next from 'i18next';
import debounce from '../../utils/debounce';
import * as groupsApi from '../../utils/api-routes/group';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: '40px',
        backgroundColor: 'white',
        width: '45%',
        height: '80px',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '5%',
    },
    icon: {
        width: '2.5em',
        height: '70%',
        borderRadius: '50%',
        marginLeft: '2%',
        backgroundColor: '#92E1D6',

        '&:hover': {
            backgroundColor: '#c0ebe5',
        },
    },

    gridIcon: {
        color: '#707070',
        marginLeft: '10px',
        fontSize: '38px',
    },
    boxIcon: {
        color: '#92E1D6',
        marginLeft: '10px',
        fontSize: '38px',
        opacity: '0.6',
    },
    div: {
        width: '100%',
    },
    typography: {
        fontWeight: 600,
        fontSize: '28px',
        color: '#707070',
    },
    grid: {
        paddingTop: '5%',
        display: 'flex',
        paddingRight: '20%',
    },
    groupBox: {
        width: '300px',
        height: '220px',
        borderRadius: '12px',
        backgroundColor: 'white',
        display: 'block',
    },
    groupsBoxesGrid: {
        width: '60%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    groupNameBox: {
        color: '#707070',
        fontSize: '22px',
    },
    detailsBox: {
        paddingTop: '2%',
    },
    detailsTypography: {
        color: '#707070',
        fontSize: '18px',
    },
}));

type groupType = {
    name: string;
    numberOfParticipents: string;
    manager: string;
    type: string;
};

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedGroups, setSelectedGroups] = useState([] as groupType[]);
    const [groups, setGroups] = useState([] as any);
    const [groupPrefix, setGroupPrefix] = useState('');
    const [showResults, setShowResults] = useState(false);

    const inputChange = (event: any, newInputValue: React.SetStateAction<string>) => {
        setSearchValue(newInputValue);
        // getProducts(newInputValue);
    };

    const setPrefix = (event: any, newValue: any) => {
        setGroupPrefix(newValue);
    };

    const classes = useStyles();
    // const [groups, setGroups] = useState([
    //     { name: '/מפקדת אסם / ענף חטיפים מדור משולחים / שיתוף סמצ', numberOfParticipents: '14', manager: 'רמד מלוחים', type: 'security' },
    //     { name: '/מפקדת אסם / ענף חטיפים מדור מתוקים / שיתוף מתוקים כחול', numberOfParticipents: '10', manager: 'רמד מתוקים', type: 'mail' },
    // ]);

    useEffect(() => {
        async function getGroups() {
            const newGroups = await groupsApi.searchGroups(groupPrefix);
            setGroups(newGroups);
        }
        getGroups();
    }, [groupPrefix]);

    useEffect(() => {
        setShowResults(searchValue !== '');
    }, [searchValue]);

    return (
        <div className={classes.div}>
            <Box display="flex" className={classes.root} alignItems="center" boxShadow="0px 3px 25px #BABABA">
                <Box flex={1}>
                    <Autocomplete
                        freeSolo
                        options={groups}
                        getOptionLabel={(option: any) => option.name}
                        filterOptions={(x) => x}
                        onChange={setPrefix}
                        onInputChange={debounce(inputChange, 450)}
                        renderInput={(params) => (
                            <TextField
                                // inputRef={searchedValue}
                                variant="standard"
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...params}
                                placeholder="חיפוש קבוצה"
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
                </Box>
                <Box flex={1} />
                <IconButton className={classes.icon}>
                    <SearchIcon fontSize="large" style={{ color: 'white' }} />
                </IconButton>
            </Box>
            {showResults && (
                <Grid>
                    <Grid className={classes.grid}>
                        <MailIcon className={classes.gridIcon} />
                        <Typography className={classes.typography}>{i18next.t('Groups.mail')}</Typography>
                    </Grid>
                    <Grid className={classes.groupsBoxesGrid}>
                        {selectedGroups.map(
                            (group) =>
                                group.type === 'mail' && (
                                    <Grid container key={group.name} className={classes.groupBox}>
                                        <MailIcon className={classes.boxIcon} />
                                        <Typography className={classes.groupNameBox}>{group.name}</Typography>
                                        <Grid item>
                                            <Box display="flex" className={classes.detailsBox}>
                                                <Typography className={classes.detailsTypography}>{i18next.t('GroupBox.manager')}</Typography>
                                                <Typography className={classes.detailsTypography}>{group.manager}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box display="flex" className={classes.detailsBox}>
                                                <Typography className={classes.detailsTypography}>
                                                    {i18next.t('GroupBox.numberOfParticipents')}
                                                </Typography>
                                                <Typography className={classes.detailsTypography}>{group.numberOfParticipents}</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ),
                        )}
                    </Grid>
                    <Grid className={classes.grid}>
                        <LockIcon className={classes.gridIcon} />
                        <Typography className={classes.typography}>{i18next.t('Groups.security')}</Typography>
                    </Grid>
                    <Grid className={classes.groupsBoxesGrid}>
                        {selectedGroups.map(
                            (group) =>
                                group.type === 'security' && (
                                    <Grid container key={group.name} className={classes.groupBox}>
                                        <LockIcon className={classes.boxIcon} />
                                        <Typography className={classes.groupNameBox}>{group.name}</Typography>
                                        <Grid item>
                                            <Box display="flex" className={classes.detailsBox}>
                                                <Typography className={classes.detailsTypography}>{i18next.t('GroupBox.manager')}</Typography>
                                                <Typography className={classes.detailsTypography}>{group.manager}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box display="flex" className={classes.detailsBox}>
                                                <Typography className={classes.detailsTypography}>
                                                    {i18next.t('GroupBox.numberOfParticipents')}
                                                </Typography>
                                                <Typography className={classes.detailsTypography}>{group.numberOfParticipents}</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                ),
                        )}
                    </Grid>
                </Grid>
            )}
        </div>
    );
}
