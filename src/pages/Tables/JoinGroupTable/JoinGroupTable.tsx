/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import DataTable from '../../../components/DataTable/DataTable';
import * as joinApi from '../../../utils/api-routes/join';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows = [
    {
        date: '02.03.2021',
        status: 'waiting',
        type: 'mail',
        groupType: 'תפוצת מייל',
        approver: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
    },
    {
        date: '09.12.2020',
        friends: '10',
        classify: 'סמצ',
        groupType: 'קבוצת אבטחה',
        nameOfRequester: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
        status: 'approved',
    },
];

const headers = ['תאריך בקשה', 'סטטוס', 'סוג בקשה', 'סוג קבוצה', 'גורם מאשר', 'שם תצוגה', ''];

export default function JoinGroupTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getRequests = async () => {
    //     const newRequests = joinApi.getJoinRequestByApprover();
    //     setRows(newRequests);
    // };

    // useEffect(() => {
    //     getRequests();
    // }, []);

    return <DataTable rows={rows} headers={headers} type="approveAndDecline" title="הצטרפות לקבוצה" />;
}
