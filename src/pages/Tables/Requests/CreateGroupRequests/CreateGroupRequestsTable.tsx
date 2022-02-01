/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import { CreateGroupRequest } from '../../../../interfaces/FormatedRequests/CreateGroupRequest';
import * as createApi from '../../../../utils/api-routes/create';
import { formatCreateRequests } from '../../../../utils/format-requests/create';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const requests: CreateGroupRequest[] = [
    {
        reqType: 'create',
        creator: 'Shay',
        approver: 'Anat',
        groupName: 'ענף חטיפים',
        hierarchy: '/מפקדת אסם/ענף חטיפים',
        displayName: '/מפקדת אסם/ענף חטיפים',
        classification: 'סמצ',
        owner: 'רמד חטיפים',
        members: ['yoav'],
        type: 'תפוצת מייל',
    },
    {
        reqType: 'create',
        creator: 'Shay',
        approver: 'Anat',
        groupName: 'ענף חטיפים',
        hierarchy: '/מפקדת אסם/ענף חטיפים',
        displayName: '/מפקדת אסם/ענף חטיפים',
        classification: 'סמצ',
        owner: 'רמד חטיפים',
        members: ['yoav'],
        type: 'תפוצת מייל',
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

    const approveCreateRequest = (index: number) => {
        // createApi.approveCreateRequest(rows[index].id);
        console.log('approveCreateRequest');
    };

    const declineCreateRequest = (index: number) => {
        // createApi.denyCreateRequest(rows[index].id);
        console.log('declineCreateRequest');
    };

    return (
        <DataTable
            rows={rows}
            headers={headers}
            type={TableTypeEnum.approveDecline}
            title="יצירת קבוצה"
            approveFunction={approveCreateRequest}
            declineFunction={declineCreateRequest}
        />
    );
}
