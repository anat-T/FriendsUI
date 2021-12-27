/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import DataTable from '../../../components/DataTable/DataTable';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows = [
    {
        date: '02.03.2021',
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        nameOfRequester: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
        type: 'groupJoin',
    },
    {
        date: '09.12.2020',
        friends: '10',
        classify: 'סמצ',
        groupType: 'קבוצת אבטחה',
        nameOfRequester: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
        type: 'groupJoin',
    },
];

const headers = ['תאריך ', 'חברים', 'סיווג', 'סוג קבוצה', 'שם מבקש', 'קבוצה', ''];

export default function JoinGroupTable() {
    const classes = useStyles();
    return <DataTable rows={rows} headers={headers} type="approveAndDecline" title="הצטרפות לקבוצה" />;
}
