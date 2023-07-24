import React from 'react'
import "./CustomTables.scss"
import DataTable from 'react-data-table-component';


function CustomTables() {
    const data = [
        {
            invoice_id: '#AHGA68', // key "name" matches `accessorKey` in ColumnDef down below
            date: '23/09/2022',
            customer: 'Jacob Marcus',
            payable_amount: '$100',
            payment_amount: '$000',
            due: '$000'
        },
        {
            invoice_id: '#AHGA68', // key "name" matches `accessorKey` in ColumnDef down below
            date: '23/09/2022',
            customer: 'Jacob Marcus',
            payable_amount: '$100',
            payment_amount: '$000',
            due: '$000'
        },
        {
            invoice_id: '#AHGA68', // key "name" matches `accessorKey` in ColumnDef down below
            date: '23/09/2022',
            customer: 'Jacob Marcus',
            payable_amount: '$100',
            payment_amount: '$000',
            due: '$000'
        }, {
            invoice_id: '#AHGA68', // key "name" matches `accessorKey` in ColumnDef down below
            date: '23/09/2022',
            customer: 'Jacob Marcus',
            payable_amount: '$100',
            payment_amount: '$000',
            due: '$000'
        }, {
            invoice_id: '#AHGA68', // key "name" matches `accessorKey` in ColumnDef down below
            date: '23/09/2022',
            customer: 'Jacob Marcus',
            payable_amount: '$100',
            payment_amount: '$000',
            due: '$000'
        }, {
            invoice_id: '#AHGA68', // key "name" matches `accessorKey` in ColumnDef down below
            date: '23/09/2022',
            customer: 'Jacob Marcus',
            payable_amount: '$100',
            payment_amount: '$000',
            due: '$000'
        }, {
            invoice_id: '#AHGA68', // key "name" matches `accessorKey` in ColumnDef down below
            date: '23/09/2022',
            customer: 'Jacob Marcus',
            payable_amount: '$100',
            payment_amount: '$000',
            due: '$000'
        }, {
            invoice_id: '#AHGA68', // key "name" matches `accessorKey` in ColumnDef down below
            date: '23/09/2022',
            customer: 'Jacob Marcus',
            payable_amount: '$100',
            payment_amount: '$000',
            due: '$000'
        }
    ];

    const columns = [
        {
            name: 'Invoice ID',
            style: {
                color: '#0B63F8'
            },
            selector: row => row.invoice_id,
        },
        {
            name: 'Date',
            selector: row => row.date,
        },
        {
            name: 'Customer',
            selector: row => row.customer,

            accessorKey: 'customer',
        },
        {

            name: 'Payable Amount',
            selector: row => row.payable_amount,

        },
        {
            name: 'Paid Amount',
            selector: row => row.payment_amount,
        },
        {
            name: 'Due',
            selector: row => row.due,
        },
    ]

    return (
        <div className="table">
            <DataTable
                columns={columns}
                data={data}
                selectableRows
            />
        </div>
    )
}

export default CustomTables
