/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import * as joinApi from '../../../../utils/api-routes/join';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows = [
    {
        date: '02.03.2021',
        status: 'waiting',
        requestType: 'הצטרפות לקבוצה',
        groupType: 'תפוצת מייל',
        approver: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
    },
    {
        date: '02.03.2021',
        status: 'waiting',
        requestType: 'יצירת קבוצה ',
        groupType: 'תפוצת מייל',
        approver: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
    },
];

const headers = ['תאריך בקשה', 'סטטוס', 'סוג בקשה', 'סוג קבוצה', 'גורם מאשר', 'שם תצוגה', ''];

export default function MyRequestsTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getRequests = async () => {
    //     const newRequests = joinApi.getJoinRequestByCreator();
    //     setRows(newRequests);
    // };

    // useEffect(() => {
    //     getRequests();
    // }, []);

    return <DataTable rows={rows} headers={headers} type="status" title="בקשות שהגשתי" warning={false} />;
}
