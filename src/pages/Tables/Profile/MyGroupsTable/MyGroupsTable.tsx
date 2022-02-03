/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import { Group } from '../../../../interfaces/FormatedRequests/Group';
import * as groupsApi from '../../../../utils/api-routes/group';
import { formatGroups } from '../../../../utils/format-rows/group';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const groups: Group[] = [
    {
        id: '1',
        friends: '10',
        hierarchy: 'hierarchy',
        classification: 'סמצ',
        displayName: '/מפקדת אסם/ענף חטיפים',
        sAMAccountName: 'lala',
        name: 'Meluhim@services.idf',
        type: 'תפוצת מייל',
        owner: {
            displayName: 'Shay',
            sAMAccountName: '123',
        },
        members: [{ displayName: 'Anat', sAMAccountName: '123' }],
    },
    {
        id: '2',
        friends: '14',
        hierarchy: 'hierarchy',
        classification: 'סמצ',
        displayName: '/מפקדת אסם/ענף חטיפים',
        sAMAccountName: 'la',
        name: 'Meluhim@services.idf',
        type: 'תפוצת מייל',
        owner: {
            displayName: 'Shay',
            sAMAccountName: '123',
        },
        members: [{ displayName: 'Anat', sAMAccountName: '123' }],
    },
];

const headers = ['מספר משתתפים', 'סיווג', 'סוג', 'מנהל', 'שם קבוצה', 'שם תצוגה'];

export default function MyGroupsTable() {
    const classes = useStyles();

    const [rows, setRows] = useState([] as any);

    const getGroups = async () => {
        // const newGroups = await formatGroups(await groupsApi.getUserGroups());
        const newGroups = await formatGroups(groups);
        setRows(newGroups);
    };

    useEffect(() => {
        getGroups();
    }, []);

    return <DataTable rows={rows} headers={headers} type={TableTypeEnum.groups} title="הקבוצות שלי" />;
}
