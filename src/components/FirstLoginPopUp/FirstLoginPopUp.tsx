/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import i18next from 'i18next';

import Cookies from 'js-cookie';
import { Box, makeStyles, Theme, Typography, Button } from '@material-ui/core';
import friendslogo from '../../images/friends-logo.png';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        borderRadius: '40px',
        backgroundColor: 'white',
        width: '50rem',
        height: '30rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    typography: {
        fontWeight: 700,
        fontSize: '32px',
        color: '#707070',
        width: '100%',
    },
    title: {
        justifyContent: 'center',
        width: '100%',
        fontSize: '52px',
        color: '#545252',
        paddingBottom: '1%',
        marginTop: '12%',
    },
    imageClass: {
        margin: '16px',
    },
}));

function setFirstLoginCookie() {
    Cookies.set('firstTimeLogin', 'true', { expires: 4015 });
}

export default function FirstLoginPopUp(disablePopUp: any) {
    const classes = useStyles();

    return (
        <>
            <Box display="flex" className={classes.root} alignItems="center" boxShadow="0px 3px 25px #BABABA">
                <Typography className={classes.title}>{i18next.t('greeting.welcomeMessage')}</Typography>
                <img src={friendslogo} alt="" className={classes.imageClass} />
                <Button
                    style={{ borderRadius: '18px' }}
                    onClick={() => {
                        setFirstLoginCookie();
                        // eslint-disable-next-line react/destructuring-assignment
                        disablePopUp.disablePopUp();
                    }}
                >
                    <Typography className={classes.typography}>{i18next.t('greeting.letsGetStarted')}</Typography>
                </Button>
            </Box>
        </>
    );
}
