/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../components/DataTable/DataTable';
import * as ownerApi from '../../../utils/api-routes/owner';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows = [
    {
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        groupName: 'Meluhim@services.idf',
        group: '/מפקדת אסם/ענף חטיפים',
    },
    {
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        groupName: 'Meluhim@services.idf',
        group: '/מפקדת אסם/ענף חטיפים',
    },
];

const headers = ['מספר משתתפים', 'סיווג', 'סוג', 'שם קבוצה', 'קבוצה', ''];

export default function GroupManagerTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getGroups = async () => {
    //     const newGroups = ownerApi.getOwnerRequestByCreator();
    //     setRows(newGroups);
    // };

    // useEffect(() => {
    //     getGroups();
    // }, []);

    return <DataTable rows={rows} headers={headers} type="status" title="קבוצות בניהולי" />;
}
