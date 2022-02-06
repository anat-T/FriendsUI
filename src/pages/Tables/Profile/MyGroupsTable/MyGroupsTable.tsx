/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import * as groupsApi from '../../../../utils/api-routes/group';
import { formatGroups } from '../../../../utils/format-rows/group';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows = [
    {
        _id: '1',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        owner: 'רמד מלוחים',
        groupName: 'הקבוצה שלי',
        displayName: '/מפקדת אסם/ענף חטיפים',
    },
    {
        _id: '2',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        owner: 'רמד מלוחים',
        groupName: 'הקבוצה שלי',
        displayName: '/מפקדת אסם/ענף חטיפים',
    },
];

const headers = ['סיווג', 'סוג קבוצה', 'מנהל', 'שם קבוצה', 'קבוצה'];

export default function MyGroupsTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getGroups = async () => {
    //     const newGroups = formatGroups(await groupsApi.getUserGroups());
    //     setRows(newGroups);
    // };

    // useEffect(() => {
    //     getGroups();
    // }, []);

    return <DataTable rows={rows} headers={headers} type={TableTypeEnum.groups} title="הקבוצות שלי" />;
}
