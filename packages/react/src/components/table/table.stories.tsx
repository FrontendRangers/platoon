import React from 'react';
import { Table } from './';

export default {
    title: 'Data/Table',
    component: Table,
};

export const Default = () => (
    <Table>
        <Table.Row>
            <Table.Head>Column 1</Table.Head>
            <Table.Head>Column 2</Table.Head>
            <Table.Head>Column 3</Table.Head>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Cell 1</Table.Cell>
            <Table.Cell>Cell 2</Table.Cell>
            <Table.Cell>Cell 3</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Cell 1</Table.Cell>
            <Table.Cell>Cell 2</Table.Cell>
            <Table.Cell>Cell 3</Table.Cell>
        </Table.Row>
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
            <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Value</Table.Head>
            </Table.Row>
            {data.map(({ name, value }, index) => (
                <Table.Row key={`${name}-${index}`}>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{value}</Table.Cell>
                </Table.Row>
            ))}
        </Table>
    );
};
