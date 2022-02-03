/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import * as joinApi from '../../../../utils/api-routes/join';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows = [
    {
        _id: '1',
        date: '02.03.2021',
        status: 'waiting',
        requestType: 'הצטרפות לקבוצה',
        groupType: 'תפוצת מייל',
        approver: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
    },
    {
        _id: '2',
        date: '02.03.2021',
        status: 'waiting',
        requestType: 'יצירת קבוצה ',
        groupType: 'תפוצת מייל',
        approver: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
    },
];

const headers = ['תאריך בקשה', 'סטטוס', 'סוג בקשה', 'סוג קבוצה', 'גורם מאשר', 'שם תצוגה'];

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

<<<<<<< HEAD
    return <DataTable rows={rows} headers={headers} type="status" title="בקשות שהגשתי" warning={false} />;
=======
    return <DataTable rows={rows} headers={headers} type={TableTypeEnum.status} title="בקשות שהגשתי" />;
>>>>>>> 3699b14be593004c20b904efe0a458f2b411c555
}
