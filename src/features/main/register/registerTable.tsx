import React from 'react'
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {ISoftWare} from "../../../interface";


interface IProps {
    data:ISoftWare[]
    columns: ColumnDef<ISoftWare>[],
}

export const RegisterTable=({data,columns}:IProps)=>{


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        < div className={'flex flex-col items-center gap-[40px]'} >
            <table className={'w-full h-full text-[16px] text-left'}>
                <thead className={'border-y border-lineColor'}>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id} >
                        {headerGroup.headers.map(header => (
                            <th key={header.id} colSpan={header.colSpan} className={' py-[20px] text-main pl-[60px] first:px-[0px]'}>
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
                            <td key={cell.id} className={`py-[20px] pl-[60px] first:pl-[25px] ${cell.column.id=='2'&&'pl-[85px]'} `}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>

                <div className="flex max-w-max items-center text-[18px] border border-lineColor rounded-[5px]">
                    <button
                        className="text-greyDark disabled:text-textSecond px-[15px] py-[7px]"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'}
                    </button>
                    <button
                        className="text-greyDark disabled:text-textSecond px-[15px] py-[7px]"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </button>
                    <button className={`px-[15px] py-[7px] ${table.getState().pagination.pageIndex + 1==1&&'bg-main text-white'}`}>
                        1
                    </button>
                    <button
                        className="text-greyDark disabled:text-textSecond px-[15px] py-[7px]"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </button>
                    <button
                        className="text-greyDark disabled:text-textSecond px-[15px] py-[7px]"
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </button>
                </div>
        </div>
    )
}
