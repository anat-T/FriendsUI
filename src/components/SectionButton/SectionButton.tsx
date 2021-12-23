/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        display: 'inline',
        width: '300px',
        height: '300px',
        background: '#C2E4D9 0% 0% no-repeat padding-box',
        borderRadius: '20px',
        boxShadow: '0px 3px 25px #0000004A',
        '&:hover': {
            background: '#c0ebe5',
        },
    },
    img: {
        width: '80%',
    },
    typography: {
        fontWeight: 'bold',
        fontSize: '28px',
        // fontFamily: ['"Segoe UI"'].join(','),
    },
}));

type SectionButtonProps = {
    title: string;
    src: string;
    route: string;
};

export default function SectionButton({ title, src, route }: SectionButtonProps) {
    const classes = useStyles();
    return (
        // <Button className={classes.button}>
        //     <Typography className={classes.typography}>{title}</Typography>
        //     <img src={src} alt="" className={classes.img} />
        // </Button>
        <Button className={classes.button}>
            <Typography className={classes.typography}>{title}</Typography>
            <Link to={route}>
                <img src={src} alt="" className={classes.img} />
            </Link>
        </Button>
    );
}
