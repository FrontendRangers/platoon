import React from 'react';
import { Table, TableRow, TableCell, TableHead } from './';

export default {
    title: 'Data/Table',
    component: Table,
};

export const Default = () => (
    <Table>
        <TableRow>
            <TableHead>Column 1</TableHead>
            <TableHead>Column 2</TableHead>
            <TableHead>Column 3</TableHead>
        </TableRow>
        <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
        </TableRow>
    </Table>
);

export const withData = () => {
    const data = [
        { name: 'Row 1', value: 1 },
        { name: 'Row 2', value: 2 },
        { name: 'Row 3', value: 3 },
    ];
    return (
        <Table>
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Value</TableHead>
            </TableRow>
            {data.map(({ name, value }, index) => (
                <TableRow key={`${name}-${index}`}>
                    <TableCell>{name}</TableCell>
                    <TableCell>{value}</TableCell>
                </TableRow>
            ))}
        </Table>
    );
};
