import React from 'react'
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {ReactComponent as ContentIcon} from "../../../assets/content.svg";
import {ReactComponent as DownloadIcon} from "../../../assets/download.svg";
import {IDocument} from "../../../interface";



const defaultData: IDocument[] = [
    {
        category: 'Общие документы',
        name: `Постановление Правительства Российской 
            "Федерации от 20.07.2021 О внесении 
            "изменений в постановление Правительства 
            "Российской Федерации от 16 ноября 2015 г. 
            "№ 1236`,
        date: "20.07.2021",
        number: "1226",
        content: "Скачать (469 Кб)",
    },
    {
        category: 'Общие документы',
        name: `Приказ №486 от 22.09.2020 Об утверждении 
               классификатора программ для электронных 
               вычислительных машин и баз данных`,
        date: "22.09.2020",
        number: "468",
        content: "Скачать (10.81 Мб)",
    },
    {
        category: 'Общие документы',
        name: `Административный регламент ПРИКАЗ от 21 февраля 2019 года N62`,
        date: "21.02.2019",
        number: "62",
        content: "Скачать (2.25 Мб)",
    }, {
        category: 'Общие документы',
        name: `Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"`,
        date: "20.12.2017",
        number: "1594",
        content: "Скачать (2.07 Мб)",
    }, {
        category: 'Общие документы',
        name: `Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных`,
        date: "31.12.2015",
        number: "622",
        content: "Скачать (4.69 Мб)",
    },
]
const columns: ColumnDef<IDocument>[] = [
    {
        accessorFn: row => row.category,
        id: '1',
        cell: info => info.getValue(),
        header: () =><span>Категория</span>,

    }, {
        accessorFn: row => row.name,
        id: '2',
        cell: info => info.getValue(),
        header: () =><span>Наименование</span>,

    }, {
        accessorFn: row => row.date,
        id: '3',
        cell: info => info.getValue(),
        header: () => <span>Дата</span>,
    }, {
        accessorFn: row => row.number,
        id: '4',
        cell: info => info.getValue(),
        header: () => <span>Номер</span>,
    }, {
        accessorFn: row => row.content,
        id: '5',
        cell: (info) => <div className={'flex gap-[15px] text-main items-center'}><DownloadIcon/><span>{info.getValue()}</span> </div>,
        header: () =><div className={'flex gap-[10px]'}>
            <ContentIcon/>
            <span>Содержание</span>
        </div>
    },
]


export const DocumentsTable=()=> {
    const [data, setData] = React.useState(() => [...defaultData])
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