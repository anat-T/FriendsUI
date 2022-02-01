/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import DataTable from '../../../../components/DataTable/DataTable';
import * as groupsApi from '../../../../utils/api-routes/group';
import { formatGroups } from '../../../../utils/format-rows/group';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows: GridRowsProp = [
    {
        id: 1,
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        owner: 'רמד מלוחים',
        groupName: 'הקבוצה שלי',
        displayName: '/מפקדת אסם/ענף חטיפים',
    },
    {
        id: 2,
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        owner: 'רמד מלוחים',
        groupName: 'הקבוצה שלי',
        displayName: '/מפקדת אסם/ענף חטיפים',
    },
];

const columns: GridColDef[] = [
    { field: 'classify', headerName: 'סיווג', width: 200 },
    { field: 'groupType', headerName: 'סוג קבוצה', width: 200 },
    { field: 'owner', headerName: 'מנהל', width: 200 },
    { field: 'groupName', headerName: 'שם קבוצה', width: 200 },
    { field: 'displayName', headerName: 'קבוצה', width: 200 },
];

export default function MyGroupsTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getGroups = async () => {
    //     const newGroups = formatGroups(await groupsApi.getUserGroups());
    //     setRows(newGroups);
    // };

    // useEffect(() => {
    //     getGroups();
    // }, []);

    return <DataTable rows={rows} columns={columns} type={TableTypeEnum.groups} title="הקבוצות שלי" />;
}
