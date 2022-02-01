/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import DataTable from '../../../../components/DataTable/DataTable';
import { GroupManageRequest } from '../../../../interfaces/FormatedRequests/GroupManageRequest';
import * as ownerApi from '../../../../utils/api-routes/owner';
import { formatOwnerRequests } from '../../../../utils/format-rows/owner';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const requests: GroupManageRequest[] = [
    {
        reqType: 'owner',
        creator: 'Shay',
        approver: 'Anat',
        groupId: '1',
        classification: 'סמצ',
        displayName: '/מפקדת אסם/ענף חטיפים',
        sAMAccountName: '?',
        name: 'ענף חטיפים',
        type: 'תפוצת מייל',
        owner: {
            displayName: 'רמד חטיפים',
            sAMAccountName: '?',
        },
        members: [{ displayName: 'yoav', sAMAccountName: '?' }],
    },
    {
        reqType: 'owner',
        creator: 'Shay',
        approver: 'Anat',
        groupId: '1',
        classification: 'סמצ',
        displayName: '/מפקדת אסם/ענף חטיפים',
        sAMAccountName: '?',
        name: 'ענף חטיפים',
        type: 'תפוצת מייל',
        owner: {
            displayName: 'רמד חטיפים',
            sAMAccountName: '?',
        },
        members: [{ displayName: 'yoav', sAMAccountName: '?' }],
    },
];

const rows: GridRowsProp = [
    {
        id: 1,
        date: '02.03.2021',
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        owner: 'Anat',
        groupName: 'קבוצה שלי',
        displayName: '/מפקדת אסם/ענף חטיפים',
    },
    {
        id: 2,
        date: '02.03.2021',
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        owner: 'Shay',
        groupName: 'קבוצה שלי',
        displayName: 'מפקדת אסם / ענף חטיפים / מדור מלוחים',
    },
];

const columns: GridColDef[] = [
    { field: 'date', headerName: 'תאריך בקשה', width: 200 },
    { field: 'friends', headerName: 'חברים', width: 200 },
    { field: 'classify', headerName: 'סיווג', width: 200 },
    { field: 'groupType', headerName: 'סוג קבוצה', width: 200 },
    { field: 'owner', headerName: 'מנהל נוכחי', width: 200 },
    { field: 'groupName', headerName: 'שם קבוצה', width: 200 },
    { field: 'displayName', headerName: 'שם תצוגה', width: 200 },
];

export default function GroupManageRequestsTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getGroups = async () => {
    //     const newGroups = formatOwnerRequests(await ownerApi.getOwnerRequestByCreator());
    //     setRows(newGroups);
    // };

    // useEffect(() => {
    //     getGroups();
    // }, []);

    const approveOwnerRequest = (index: number) => {
        // ownerApi.approveOwnerRequest(rows[index].id);
        console.log('approveOwnerRequest');
    };

    const declineOwnerRequest = (index: number) => {
        // ownerApi.denyOwnerRequest(rows[index].id);
        console.log('declineOwnerRequest');
    };

    return (
        <DataTable
            rows={rows}
            columns={columns}
            type={TableTypeEnum.approveDecline}
            title="ניהול קבוצה"
            approveFunction={approveOwnerRequest}
            declineFunction={declineOwnerRequest}
        />
    );
}
