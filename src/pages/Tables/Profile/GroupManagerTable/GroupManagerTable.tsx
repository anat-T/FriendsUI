/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import * as ownerApi from '../../../../utils/api-routes/owner';
import { TableTypeEnum } from '../../../../utils/table';

const useStyles = makeStyles((theme: Theme) => ({}));

const rows = [
    {
        _id: '1',
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        groupName: 'Meluhim@services.idf',
        group: '/מפקדת אסם/ענף חטיפים',
    },
    {
        _id: '2',
        friends: '14',
        classify: 'סמצ',
        groupType: 'תפוצת מייל',
        groupName: 'Meluhim@services.idf',
        group: '/מפקדת אסם/ענף חטיפים',
    },
];

const headers = ['מספר משתתפים', 'סיווג', 'סוג', 'שם קבוצה', 'קבוצה', ''];

export default function GroupManagerTable() {
    const classes = useStyles();

    // const [rows, setRows] = useState([] as any);

    // const getGroups = async () => {
    //     const newGroups = ownerApi.getOwnerRequestByCreator();
    //     setRows(newGroups);
    // };

    // useEffect(() => {
    //     getGroups();
    // }, []);

    const groupMoreDetails = (index: number) => {
        // TODO MORE DETAILS POP UP
        console.log('groupMoreDeta');
    };

    return <DataTable rows={rows} headers={headers} type={TableTypeEnum.moreDetails} title="קבוצות בניהולי" moreDetailsFunction={groupMoreDetails} />;
}
