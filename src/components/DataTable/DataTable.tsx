/* eslint-disable react/require-default-props */
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
import { TableTypeEnum } from '../../utils/table';

const STATUS_CELL = 1;

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
    approveFunction?: (index: number) => void;
    declineFunction?: (index: number) => void;
    moreDetailsFunction?: (index: number) => void;
};

const getColor = (status?: string) => {
    // eslint-disable-next-line no-console
    console.log('cell:', status);
    if (status === 'approved') return '#C2EFC7';
    if (status === 'waiting') return '#FFEB66';
    return '#4287f5';
};

export default function DataTable({ rows, headers, type, title, approveFunction, declineFunction, moreDetailsFunction }: DataTableProps) {
    const classes = useStyles();

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
                        {rows.map((row, rowIndex) => (
                            <TableRow>
                                {Object.values(row).map((cell, cellIndex) =>
                                    type === TableTypeEnum.status && cellIndex === STATUS_CELL ? (
                                        <TableCell component="th" scope="row" classes={{ root: classes.tableCellStatus }}>
                                            <Button style={{ backgroundColor: getColor(cell), borderRadius: '18px' }}>{cell}</Button>{' '}
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
                                            onClick={() => (approveFunction ? approveFunction(rowIndex) : null)}
                                        >
                                            <CheckIcon className={classes.icon} />
                                        </IconButton>
                                        <IconButton
                                            className={classes.declineButton}
                                            onClick={() => (declineFunction ? declineFunction(rowIndex) : null)}
                                        >
                                            <ClearIcon />
                                        </IconButton>
                                    </TableCell>
                                ) : type === TableTypeEnum.moreDetails ? (
                                    <TableCell component="th" scope="row" classes={{ root: classes.tableCellStatus }}>
                                        <Button
                                            style={{ backgroundColor: getColor(), borderRadius: '18px' }}
                                            onClick={() => (moreDetailsFunction ? moreDetailsFunction(rowIndex) : null)}
                                        >
                                            פרטים נוספים
                                        </Button>{' '}
                                    </TableCell>
                                ) : (
                                    <br />
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
