/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Grid, IconButton, makeStyles, TextField, Theme, Typography, Button } from '@material-ui/core';
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: '40px',
        backgroundColor: 'white',
        width: '50rem',
        height: '30rem',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '5%',
    },
}));
//         cookies.set('firstTimeLogin', true, { expires: expireDate });
//         const expireDate = new Date(2147483647 * 1000);

function setFirstLoginCookie() {
    Cookies.set('firstTimeLogin', 'true', { expires: 4015 });
}

export default function FirstLoginPopUp() {
    const classes = useStyles();

    return (
        <>
            <Box display="flex" className={classes.root} alignItems="center" boxShadow="0px 3px 25px #BABABA">
                <Button
                    style={{ borderRadius: '18px' }}
                    onClick={() => {
                        setFirstLoginCookie();
                    }}
                >
                    Hello
                </Button>
            </Box>
        </>
    );
}
