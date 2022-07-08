import React from 'react'
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {IDocument} from "../../../interface";


interface IProps{
    data:IDocument[],
    columns:ColumnDef<IDocument>[]
}




export const DocumentsTable=({data,columns}:IProps)=> {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div className={''}>
            <table className={'w-full h-full text-[16px] text-left'}>
                <thead className={'border-y border-lineColor'}>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} colSpan={header.colSpan}
                                className={`py-[20px] text-main pl-[100px] 
                                first:px-[0px] 
                                ${header.column.id=='4'&&'pl-[80px]'}
                                ${header.column.id=='5'&&'pl-[80px]'}`}
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id} className={'border-b border-lineColor'}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}
                                className={`py-[20px] pl-[100px] 
                                first:px-[0px] last:pr-[15px] first:w-[150px]
                                ${cell.column.id=='4'&&'pl-[80px]'}
                                ${cell.column.id=='5'&&'pl-[80px]'}`}
                                >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}