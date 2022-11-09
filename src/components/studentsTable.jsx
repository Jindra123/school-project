import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StudentsTable = (props) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Jméno</TableCell>
                        <TableCell align="left">Bio</TableCell>
                        <TableCell align="left">Průběžné hodnocení</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row, id) => (
                        <TableRow key={id}>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.bio}</TableCell>
                            <TableCell align="left">{row.evaluation}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default StudentsTable;