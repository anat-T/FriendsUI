/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import { ADGroup } from '../../../../interfaces/ADGroup';
import { JoinGroupRequest } from '../../../../interfaces/FormatedRequests/JoinGroupRequest';
import { JoinRequest } from '../../../../interfaces/JoinRequest';
import * as joinApi from '../../../../utils/api-routes/join';
import { formatJoinRequests } from '../../../../utils/format-rows/join';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const requests: JoinGroupRequest[] = [
    {
        reqType: 'join',
        creator: 'Shay',
        approver: 'Anat',
        groupId: '1',
        joinReason: 'Nothing',
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
        reqType: 'join',
        creator: 'Shay',
        approver: 'Anat',
        groupId: '1',
        joinReason: 'Nothing',
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

const rows = [
    {
        date: '02.03.2021',
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        owner: 'מפקדת אסם / ענף חטיפים / מדור מלוחים',
        groupName: 'קבוצה שלי',
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

const headers = ['תאריך ', 'חברים', 'סיווג', 'סוג קבוצה', 'שם מבקש', 'קבוצה', ''];

export default function JoinGroupTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getRequests = async () => {
    //     const newRequests = formatJoinRequests(await joinApi.getJoinRequestByApprover());
    //     setRows(newRequests);
    // };

    // useEffect(() => {
    //     getRequests();
    // }, []);

    const approveJoinRequest = (index: number) => {
        // joinApi.approveJoinRequest(rows[index].id);
        console.log('approveJoinRequest');
    };

    const declineJoinRequest = (index: number) => {
        // joinApi.denyJoinRequest(rows[index].id);
        console.log('declineJoinRequest');
    };

    return (
        <DataTable
            rows={rows}
            headers={headers}
            type={TableTypeEnum.approveDecline}
            title="הצטרפות לקבוצה"
            approveFunction={approveJoinRequest}
            declineFunction={declineJoinRequest}
        />
    );
}
