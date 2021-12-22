/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, createMuiTheme, Divider, IconButton, makeStyles, MuiThemeProvider, Select, TextField, Theme } from '@material-ui/core';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';

// const theme = createMuiTheme({
//     direction: 'rtl',
//     typography: {
//         fontFamily: 'Assistant',
//     },
//     // fontFamily: 'Assistant',
//     overrides: {
//         MuiSelect: {
//             select: {
//                 '&:focus': {
//                     backgroundColor: 'transparent',
//                 },
//             },
//         },
//     },
// });

const useStyles = makeStyles((theme) => ({
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
}));

export default function SearchBar() {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    return (
        <Box display="flex" className={classes.root} alignItems="center" boxShadow="0px 3px 25px #BABABA">
            <Box flex={1}>
                <Autocomplete
                    freeSolo
                    options={products}
                    getOptionLabel={(option: any) => option.name}
                    filterOptions={(x) => x}
                    //   onChange={chooseProduct}
                    //   onInputChange={debounce(inputChange, 450)}
                    renderInput={(params) => (
                        <TextField
                            // onBlur={blurHandler}
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
                            // autoFocus={!isSmall}
                        />
                    )}
                    //   renderOption={(option) => (
                    //         <Box style={{ width: '100%', overflowX: 'hidden' }} display="flex" justifyContent="space-between" alignItems="center">
                    // >
                    //     <Box flex={1}>{option.name}</Box>
                    //               <Box>
                    //         <img
                    //             // height={isWidthDown('sm') ? '40px' : '65px'}
                    //             // width={isWidthDown('sm') ? '40px' : '65px'}
                    //             src={`${config.base_gateway_api_url}${config.storage_service_path}/${option.imagePath}`}
                    //                           alt={option.name}
                    //                     />
                    //     </Box>
                    // </Box>
                    //   )}
                />
            </Box>
            <Box flex={1} />
            <IconButton className={classes.icon}>
                <SearchIcon fontSize="large" style={{ color: 'white' }} />
            </IconButton>
        </Box>
    );
}
