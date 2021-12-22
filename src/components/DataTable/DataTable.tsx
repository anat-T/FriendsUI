/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme: Theme) => ({
    table: {
        borderRadius: '80px',
    },
    tableCell: {
        borderBottom: 'none',
    },
}));

export default function DataTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.table}>
            <Table>
                {/* <Table sx={{ minWidth: 650 }} aria-label="simple table"> */}
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            {/* <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}> */}
                            <TableCell component="th" scope="row" classes={{ root: classes.tableCell }}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right" classes={{ root: classes.tableCell }}>
                                {row.calories}
                            </TableCell>
                            <TableCell align="right" classes={{ root: classes.tableCell }}>
                                {row.fat}
                            </TableCell>
                            <TableCell align="right" classes={{ root: classes.tableCell }}>
                                {row.carbs}
                            </TableCell>
                            <TableCell align="right" classes={{ root: classes.tableCell }}>
                                {row.protein}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
