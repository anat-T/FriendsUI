/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
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
import * as joinApi from '../../utils/api-routes/join.js';

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
    },
    tableCellStatus: {
        borderBottom: 'none',
    },
    tableCellHeader: {
        // borderBottom: 'none',
        color: '#707070',
        fontSize: '21px',
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
};

const regularCell = (cell: string) => {
    return cell !== 'groupJoin';
};

const getColor = (status: string) => {
    // eslint-disable-next-line no-console
    console.log('cell:', status);
    if (status === 'approved') return '#C2EFC7';
    if (status === 'waiting') return '#FFEB66';
    return '#FF7878';
};

export default function DataTable({ rows, headers, type, title }: DataTableProps) {
    const classes = useStyles();

    const onClickApprove = () => {
        // joinApi.approveJoinRequest();
    };

    const onClickDecline = () => {
        // joinApi.denyJoinRequest();
    };

    return (
        <>
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
                            <TableRow>
                                {Object.values(row).map((cell) =>
                                    regularCell(cell) ? (
                                        <TableCell component="th" scope="row" classes={{ root: classes.tableCell }}>
                                            {cell}
                                        </TableCell>
                                    ) : type === 'approveAndDecline' ? (
                                        <TableCell component="th" scope="row" classes={{ root: classes.tableCell }}>
                                            <IconButton className={classes.approveButton} onClick={onClickApprove}>
                                                <CheckIcon className={classes.icon} />
                                            </IconButton>
                                            <IconButton className={classes.declineButton} onClick={onClickDecline}>
                                                <ClearIcon />
                                            </IconButton>
                                        </TableCell>
                                    ) : (
                                        <TableCell component="th" scope="row" classes={{ root: classes.tableCellStatus }}>
                                            <Button style={{ backgroundColor: getColor(cell) }}>{cell}</Button>
                                        </TableCell>
                                    ),
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
