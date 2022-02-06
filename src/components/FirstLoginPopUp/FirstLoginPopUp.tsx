/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { Box, makeStyles, Theme, Typography, Button } from '@material-ui/core';
import popUp from '../../images/popUp.png';

const useStyles = makeStyles((theme: Theme) => ({
    dialogContent: {
        zIndex: 15,
        position: 'relative',
        height: '38rem',
    },
    typography: {
        fontWeight: 700,
        fontSize: '32px',
        color: '#707070',
        width: '100%',
    },
    imageClass: {
        zIndex: 10,
        height: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        alignItems: 'center',
        textAlign: 'center',
    },
    button: {
        zIndex: 16,
        position: 'absolute',
        top: 15,
        right: 15,
    },
}));

function setFirstLoginCookie() {
    Cookies.set('firstTimeLogin', 'true', { expires: 4015 });
}

export default function FirstLoginPopUp(disablePopUp: any) {
    const classes = useStyles();

    return (
        <div className={classes.dialogContent}>
            <Button
                className={classes.button}
                onClick={() => {
                    setFirstLoginCookie();
                    // eslint-disable-next-line react/destructuring-assignment
                    disablePopUp.disablePopUp();
                }}
            >
                <Typography className={classes.typography}>X</Typography>
            </Button>
            <img src={popUp} alt="" className={classes.imageClass} />{' '}
        </div>
    );
}
