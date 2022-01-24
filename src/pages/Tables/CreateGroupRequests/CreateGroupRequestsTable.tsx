/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/DataTable/DataTable';
import * as ownerApi from '../../../utils/api-routes/owner';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows = [
    {
        date: '02.03.2021',
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        nameOfRequester: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
    },
    {
        date: '09.12.2020',
        friends: '10',
        classify: 'סמצ',
        groupType: 'קבוצת אבטחה',
        nameOfRequester: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
    },
];

const headers = ['תאריך ', 'חברים', 'סיווג', 'סוג קבוצה', 'שם מבקש', 'קבוצה', ''];

export default function CreateGroupRequestsTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getGroups = async () => {
    //     const newGroups = ownerApi.getOwnerRequestByCreator();
    //     setRows(newGroups);
    // };

    // useEffect(() => {
    //     getGroups();
    // }, []);

    return <DataTable rows={rows} headers={headers} type="approveAndDecline" title="יצירת קבוצה" />;
}
