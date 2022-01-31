/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import { GroupManageRequest } from '../../../../interfaces/FormatedRequests/GroupManageRequest';
import * as createApi from '../../../../utils/api-routes/create';
import { formatCreateRequests } from '../../../../utils/format-requests/create';

const useStyles = makeStyles((theme: Theme) => ({}));

const requests: GroupManageRequest[] = [
    {
        reqType: 'create',
        request: {
            creator: 'Shay',
            approver: 'Anat',
            groupId: '1',
        },
        group: {
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
    },
    {
        reqType: 'create',
        request: {
            creator: 'Shay',
            approver: 'Anat',
            groupId: '1',
        },
        group: {
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
    },
];

const rows = [
    {
        date: '02.03.2021',
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        nameOfRequester: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
    },
    {
        date: '09.12.2020',
        friends: '10',
        classify: 'סמצ',
        groupType: 'קבוצת אבטחה',
        nameOfRequester: 'hirrarchy',
        group: '/מפקדת אסם/ענף חטיפים',
    },
];

const headers = ['תאריך בקשה', 'חברים', 'סיווג', 'סוג קבוצה', 'מנהל', 'שם קבוצה', 'שם תצוגה', ''];

export default function CreateGroupRequestsTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getGroups = async () => {
    //     const newGroups = formatCreateRequests(await createApi.getCreateRequestByApprover());
    //     setRows(newGroups);
    // };

    // useEffect(() => {
    //     getGroups();
    // }, []);

    return <DataTable rows={rows} headers={headers} type="approveAndDecline" title="יצירת קבוצה" />;
}
