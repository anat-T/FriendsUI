/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import DataTable from '../../../../components/DataTable/DataTable';
import * as joinApi from '../../../../utils/api-routes/join';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows: GridRowsProp = [
    {
        id: 2,
        date: '02.03.2021',
        status: 'waiting',
        requestType: 'הצטרפות לקבוצה',
        groupType: 'תפוצת מייל',
        approver: 'hirrarchy',
        displayName: '/מפקדת אסם/ענף חטיפים',
    },
    {
        id: 1,
        date: '02.03.2021',
        status: 'waiting',
        requestType: 'יצירת קבוצה ',
        groupType: 'תפוצת מייל',
        approver: 'hirrarchy',
        displayName: '/מפקדת אסם/ענף חטיפים',
    },
];

const columns: GridColDef[] = [
    { field: 'date', headerName: 'תאריך בקשה', width: 200 },
    { field: 'status', headerName: 'סטטוס', width: 200 },
    { field: 'requestType', headerName: 'סוג בקשה', width: 200 },
    { field: 'groupType', headerName: 'סוג קבוצה', width: 200 },
    { field: 'approver', headerName: 'גורם מאשר', width: 200 },
    { field: 'displayName', headerName: 'שם תצוגה', width: 200 },
];

export default function MyRequestsTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getRequests = async () => {
    // const newRequests = joinApi.getJoinRequestByCreator();
    //     setRows(newRequests);
    // };

    // useEffect(() => {
    //     getRequests();
    // }, []);

    return <DataTable rows={rows} columns={columns} type={TableTypeEnum.status} title="בקשות שהגשתי" />;
}
