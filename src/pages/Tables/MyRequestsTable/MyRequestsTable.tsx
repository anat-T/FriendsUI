/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/DataTable/DataTable';

const useStyles = makeStyles((theme: Theme) => ({}));

// const rows = [
//     {
//         date: '02.03.2021',
//         friends: '14',
//         classify: 'סמצ',
//         groupType: 'תפוצת מייל',
//         nameOfRequester: 'hirrarchy',
//         group: '/מפקדת אסם/ענף חטיפים',
//         status: 'waiting',
//     },
//     {
//         date: '09.12.2020',
//         friends: '10',
//         classify: 'סמצ',
//         groupType: 'קבוצת אבטחה',
//         nameOfRequester: 'hirrarchy',
//         group: '/מפקדת אסם/ענף חטיפים',
//         status: 'approved',
//     },
// ];

const headers = ['תאריך ', 'חברים', 'סיווג', 'סוג קבוצה', 'שם מבקש', 'קבוצה', ''];

export default function MyRequestsTable() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const setRowsRealValue = async () => {
            setRows((await axios.get('http://localhost/api/join/requests/approver')).data);
        };
        setRowsRealValue();
    }, []);
    return <DataTable rows={rows} headers={headers} type="status" title="הבקשות שלי" />;
}
