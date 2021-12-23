/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import DataTable from '../../components/DataTable/DataTable';

const useStyles = makeStyles((theme: Theme) => ({}));

export default function MyRequests() {
    const classes = useStyles();
    return <DataTable />;
}
