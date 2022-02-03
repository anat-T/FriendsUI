/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable/DataTable';
import MoreDetails from '../../../../components/MoreDetails/MoreDetails';
import { ADGroup } from '../../../../interfaces/ADGroup';
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

const headers = ['מספר משתתפים', 'סיווג', 'סוג', 'מנהל', 'שם קבוצה', 'שם תצוגה', ''];

const group: ADGroup = {
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
};

export default function GroupManagerTable() {
    const classes = useStyles();

    const [rows, setRows] = useState([] as any);

    const [open, setOpen] = useState(false);

    const [selectedGroup, setSelectedGroup] = useState(group as ADGroup);

    const getGroups = async () => {
        // const newGroups = await formatGroups(await groupsApi.getUserGroups());
        const newGroups = await formatGroups(groups);
        setRows(newGroups);
    };

    useEffect(() => {
        getGroups();
    }, []);

    const groupMoreDetails = async (id: string) => {
        setOpen(true);

        // setSelectedGroup(await groupsApi.getGroupById(id));

        setSelectedGroup(group);
    };

    return (
        <>
            {open && <MoreDetails open={open} setOpen={setOpen} group={selectedGroup} />}
            <DataTable rows={rows} headers={headers} type={TableTypeEnum.moreDetails} title="קבוצות בניהולי" moreDetailsFunction={groupMoreDetails} />
        </>
    );
}
