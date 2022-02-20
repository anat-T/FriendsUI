/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import { GroupManageRequest } from '../../../../interfaces/FormatedRequests/GroupManageRequest';
import * as ownerApi from '../../../../utils/api-routes/owner';
import { formatOwnerRequests } from '../../../../utils/format-rows/owner';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

// const requests: GroupManageRequest[] = [
//     {
//         _id: '1',
//         reqType: 'owner',
//         creator: 'Shay',
//         approver: 'Anat',
//         groupId: '1',
//         classification: 'סמצ',
//         displayName: '/מפקדת אסם/ענף חטיפים',
//         sAMAccountName: '?',
//         name: 'ענף חטיפים',
//         type: 'תפוצת מייל',
//         owner: {
//             displayName: 'רמד חטיפים',
//             sAMAccountName: '?',
//         },
//         members: [{ displayName: 'yoav', sAMAccountName: '?' }],
//     },
//     {
//         _id: '2',
//         reqType: 'owner',
//         creator: 'Shay',
//         approver: 'Anat',
//         groupId: '1',
//         classification: 'סמצ',
//         displayName: '/מפקדת אסם/ענף חטיפים',
//         sAMAccountName: '?',
//         name: 'ענף חטיפים',
//         type: 'תפוצת מייל',
//         owner: {
//             displayName: 'רמד חטיפים',
//             sAMAccountName: '?',
//         },
//         members: [{ displayName: 'yoav', sAMAccountName: '?' }],
//     },
// ];

// const rows = [
//     {
//         id: '1',
//         date: '02.03.2021',
//         friends: '14',
//         classify: 'סמצ',
//         groupType: 'תפוצת מייל',
//         manager: 'Anat',
//         groupName: 'קבוצה שלי',
//         displayName: '/מפקדת אסם/ענף חטיפים',
//     },
//     {
//         id: '2',
//         date: '02.03.2021',
//         friends: '14',
//         classify: 'סמצ',
//         groupType: 'תפוצת מייל',
//         manager: 'Shay',
//         groupName: 'קבוצה שלי',
//         displayName: 'מפקדת אסם / ענף חטיפים / מדור מלוחים',
//     },
// ];

const headers = ['תאריך בקשה', 'חברים', 'סיווג', 'סוג קבוצה', 'מנהל נוכחי', 'שם קבוצה', 'שם תצוגה', ''];

export default function GroupManageRequestsTable() {
    const classes = useStyles();

    const [rows, setRows] = useState([] as any);

    const getGroups = async () => {
        const newGroups = formatOwnerRequests(await ownerApi.getOwnerRequestByCreator()) || [];
        // const newGroups = await formatOwnerRequests(requests);
        setRows(newGroups);
    };

    useEffect(() => {
        getGroups();
    }, []);

    const approveOwnerRequest = (id: string) => {
        ownerApi.approveOwnerRequest(id);
        // console.log('approveOwnerRequest');
    };

    const declineOwnerRequest = (id: string) => {
        ownerApi.denyOwnerRequest(id);
        // console.log('declineOwnerRequest');
    };

    return (
        <DataTable
            rows={rows}
            headers={headers}
            type={TableTypeEnum.approveDecline}
            title="ניהול קבוצה"
            approveFunction={approveOwnerRequest}
            declineFunction={declineOwnerRequest}
            warningType="Group"
            warning
        />
    );
}
