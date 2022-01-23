/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/DataTable/DataTable';
// import { getJoinRequestByApprover } from '../../../utils/api-routes/join.js';

const useStyles = makeStyles((theme: Theme) => ({}));

// let rows: Object[] = [];
// [
//     {
//         date: '02.03.2021',
//         friends: '14',
//         classify: 'סמצ',
//         groupType: 'תפוצת מייל',
//         nameOfRequester: 'hirrarchy',
//         group: '/מפקדת אסם/ענף חטיפים',
//         type: 'groupJoin',
//     },
//     {
//         date: '09.12.2020',
//         friends: '10',
//         classify: 'סמצ',
//         groupType: 'קבוצת אבטחה',
//         nameOfRequester: 'hirrarchy',
//         group: '/מפקדת אסם/ענף חטיפים',
//         type: 'groupJoin',
//     },
// ];

const headers = ['תאריך ', 'חברים', 'סיווג', 'סוג קבוצה', 'שם מבקש', 'קבוצה', ''];

export default function JoinGroupTable() {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const setRowsRealValue = async () => {
            setRows((await axios.get('http://localhost/api/join/requests/approver')).data);
        };
        setRowsRealValue();
    }, []);

    const classes = useStyles();
    return <DataTable rows={rows} headers={headers} type="approveAndDecline" title="קבוצות בניהולי" />;
}
