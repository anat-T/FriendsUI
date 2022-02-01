/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import * as groupsApi from '../../../../utils/api-routes/group';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows = [
    {
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        owner: 'רמד מלוחים',
        groupName: 'הקבוצה שלי',
        group: '/מפקדת אסם/ענף חטיפים',
    },
    {
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        owner: 'רמד מלוחים',
        groupName: 'הקבוצה שלי',
        group: '/מפקדת אסם/ענף חטיפים',
    },
];

const headers = ['סיווג', 'סוג קבוצה', 'מנהל', 'שם קבוצה', 'קבוצה', ''];

export default function MyGroupsTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getGroups = async () => {
    //     const newGroups = groupsApi.getUserGroups();
    //     setRows(newGroups);
    // };

    // useEffect(() => {
    //     getGroups();
    // }, []);

    return <DataTable rows={rows} headers={headers} type="status" title="הקבוצות שלי" warning={false} />;
}
