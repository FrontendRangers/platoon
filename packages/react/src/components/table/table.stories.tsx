import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table } from './';
import { TableProps } from './Table';
import TableRow from './TableRow';
import TableCell from './TableCell';

export default {
    title: 'Data/Table',
    component: Table,
    subcomponents: {
        Row: TableRow,
        Cell: TableCell,
    },
} as Meta;

export const Default: Story<TableProps> = (args) => (
    <Table {...args}>
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

export const withData: Story<TableProps> = (args) => {
    const data = [
        { name: 'Row 1', value: 1 },
        { name: 'Row 2', value: 2 },
        { name: 'Row 3', value: 3 },
    ];
    return (
        <Table {...args}>
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
