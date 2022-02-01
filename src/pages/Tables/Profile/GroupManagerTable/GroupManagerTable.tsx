/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import DataTable from '../../../../components/DataTable/DataTable';
import * as ownerApi from '../../../../utils/api-routes/owner';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows: GridRowsProp = [
    {
        id: 1,
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        groupName: 'Meluhim@services.idf',
        displayName: '/מפקדת אסם/ענף חטיפים',
    },
    {
        id: 2,
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        groupName: 'Meluhim@services.idf',
        displayName: '/מפקדת אסם/ענף חטיפים',
    },
];

const columns: GridColDef[] = [
    { field: 'friends', headerName: 'מספר משתתפים', width: 200 },
    { field: 'classify', headerName: 'סיווג', width: 200 },
    { field: 'groupType', headerName: 'סוג קבוצה', width: 200 },
    { field: 'groupName', headerName: 'שם קבוצה', width: 200 },
    { field: 'displayName', headerName: 'קבוצה', width: 200 },
];

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

    const groupMoreDetails = (index: number) => {
        // TODO MORE DETAILS POP UP
        console.log('groupMoreDeta');
    };

    return <DataTable rows={rows} columns={columns} type={TableTypeEnum.moreDetails} title="קבוצות בניהולי" moreDetailsFunction={groupMoreDetails} />;
}
