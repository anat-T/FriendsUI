/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import i18next from 'i18next';
import * as joinApi from '../../utils/api-routes/join';
import { JoinRequest } from '../../interfaces/JoinRequest';
import Warning from '../Warning/Warning';
import { TableTypeEnum } from '../../utils/table';

const STATUS_CELL = 2;
const WAITING = 'waiting';
const APPROVED = 'approved';

const useStyles = makeStyles((theme: Theme) => ({
    table: {
        borderRadius: '80px',
        paddingLeft: '4%',
        borderBottom: 'none',
        paddingRight: '4%',
        width: '90%',
        marginRight: '5%',
    },
    tableCell: {
        borderBottom: 'none',
        textAlign: 'center',
    },
    tableCellStatus: {
        borderBottom: 'none',
        textAlign: 'center',
    },
    tableCellHeader: {
        // borderBottom: 'none',
        color: '#707070',
        fontSize: '21px',
        textAlign: 'center',
    },
    approveButton: {
        backgroundColor: '#C1EFCF',
        borderRadius: '40px',
    },
    declineButton: {
        backgroundColor: '#FF7878',
        marginRight: '10%',
        borderRadius: '40px',
    },
    icon: {},
    title: {
        display: 'inline-flex',
        justifyContent: 'center',
        width: '100%',
        fontWeight: 600,
        fontSize: '28px',
        color: '#707070',
        paddingBottom: '1%',
    },
}));

type DataTableProps = {
    rows: Array<Object>;
    headers: Array<string>;
    type: string;
    title: string;
    warning: boolean;
    // eslint-disable-next-line react/require-default-props
    warningType?: string;
    approveFunction?: (id: string) => void;
    declineFunction?: (id: string) => void;
    moreDetailsFunction?: (id: string) => void;
};

const getColor = (status?: string) => {
    if (status === 'approved') return '#C2EFC7';
    if (status === 'waiting') return '#FFEB66';
    return '#4287f5';
};

export default function DataTable({
    rows,
    headers,
    type,
    title,
    warning,
    warningType,
    approveFunction,
    declineFunction,
    moreDetailsFunction,
}: DataTableProps) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [id, setId] = useState('');

    const onClickApprove = (index: number) => {
        // console.log(rows[index] as JoinRequest);
        // joinApi.approveJoinRequest(rows[index].id);
        setOpen(true);
    };
    const getId = (row: Object) => {
        return Object.values(row)[0];
    };

    return (
        <>
            {warning && <Warning open={open} setOpen={setOpen} warningType={warningType} approveFunction={approveFunction} id={id} />}
            <Typography className={classes.title}>{title}</Typography>
            <TableContainer component={Paper} className={classes.table}>
                <Table>
                    {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableCell classes={{ root: classes.tableCellHeader }}>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={getId(row)}>
                                {Object.values(row).map((cell, cellIndex) =>
                                    cellIndex === 0 ? null : type === TableTypeEnum.status && cellIndex === STATUS_CELL ? (
                                        <TableCell component="th" scope="row" classes={{ root: classes.tableCellStatus }}>
                                            <Button
                                                disabled
                                                style={{
                                                    backgroundColor: getColor(cell),
                                                    borderRadius: '18px',
                                                    color: 'black',
                                                }}
                                            >
                                                {cell === WAITING ? i18next.t('Status.waiting') : i18next.t('Status.approved')}
                                            </Button>
                                        </TableCell>
                                    ) : (
                                        <TableCell component="th" scope="row" classes={{ root: classes.tableCell }}>
                                            {cell}
                                        </TableCell>
                                    ),
                                )}
                                {type === TableTypeEnum.approveDecline ? (
                                    <TableCell component="th" scope="row" classes={{ root: classes.tableCell }}>
                                        <IconButton
                                            className={classes.approveButton}
                                            onClick={() => {
                                                setId(getId(row));
                                                onClickApprove(id);
                                            }}
                                        >
                                            <CheckIcon className={classes.icon} />
                                        </IconButton>
                                        <IconButton
                                            className={classes.declineButton}
                                            onClick={() => (declineFunction ? declineFunction(getId(row)) : null)}
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    </TableCell>
                                ) : type === TableTypeEnum.moreDetails ? (
                                    <TableCell component="th" scope="row" classes={{ root: classes.tableCellStatus }}>
                                        <Button
                                            style={{ backgroundColor: getColor(), borderRadius: '18px', color: 'white' }}
                                            onClick={() => (moreDetailsFunction ? moreDetailsFunction(getId(row)) : null)}
                                        >
                                            {i18next.t('MoreDetails.title')}
                                        </Button>
                                    </TableCell>
                                ) : null}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
