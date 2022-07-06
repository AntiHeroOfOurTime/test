import React from 'react'
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {ReactComponent as ReverseIcon} from "../../../assets/reverse.svg";
import {ISoftWare} from "../../../interface";


const data: ISoftWare[] = [
    {
        id: '1',
        name: 'Система управления базами данных «Ред База Данных»',
        codeOfClass: '02.09',
        classSoftWare: 'Системы управления базами данных',
        time_register: ' 29.01.2016 ',
        addressWebSite: '/asdasd/',
    },
    {
        id: '2',
        name: '1С:Школа. Информатика, 11 класс',
        codeOfClass: '04.11',
        classSoftWare: 'Системы управления процессами организации',
        time_register: ' 29.01.2016 ',
        addressWebSite: '/asdasd/',
    },
    {
        id: '3',
        name: '1С:Школа. Русский язык, 5–6 класс. Лексикология ',
        codeOfClass: '04.11',
        classSoftWare: 'Информационные системы для решения специфических отраслевых задач',
        time_register: ' 29.01.2016 ',
        addressWebSite: '/asdasd/',
    }, {
        id: '4',
        name: '1С:Комплексная автоматизация 8',
        codeOfClass: '04.11',
        classSoftWare: 'Системы управления процессами организации',
        time_register: ' 20.02.2016 ',
        addressWebSite: '/asdasd/',
    }, {
        id: '5',
        name: 'Электронный периодический справочник "Система ГАРАНТ"',
        codeOfClass: '04.15',
        classSoftWare: 'Прикладное программное обеспечение общего назначения',
        time_register: ' 20.02.2016 ',
        addressWebSite: '/asdasd/',
    }, {
        id: '6',
        name: 'Система электронного документооборота и автоматизации бизнес-процессов «Е1 Евфрат»',
        codeOfClass: '04.13',
        classSoftWare: ' Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных ',
        time_register: ' 11.03.2016',
        addressWebSite: '/asdasd/',
    }, {
        id: '7',
        name: 'ABBYY Lingvo',
        codeOfClass: '04.07',
        classSoftWare: 'Лингвистическое программное обеспечение',
        time_register: ' 11.03.2016 ',
        addressWebSite: '/asdasd/',
    }, {
        id: '8',
        name: '1С-Битрикс24 (Компания)',
        codeOfClass: '04.03',
        classSoftWare: 'Офисные приложения',
        time_register: ' 14.03.2016 ',
        addressWebSite: '/asdasd/',
    }, {
        id: '9',
        name: '1С-Битрикс24 (Проект+)',
        codeOfClass: '04.03',
        classSoftWare: 'Системы управления проектами, исследованиями, разработкой, проектированием и внедрением',
        time_register: ' 14.03.2016 ',
        addressWebSite: '/asdasd/',
    }, {
        id: '10',
        name: '1С-Битрикс24 (Команда)',
        codeOfClass: '04.03',
        classSoftWare: 'Системы сбора, хранения, обработки, анализа, моделирования и визуализации массивов данных',
        time_register: ' 14.03.2016 ',
        addressWebSite: '/asdasd/',
    },
]


const columns: ColumnDef<ISoftWare>[] = [
    {
        accessorFn: row => row.id,
        id: '1',
        cell: info => '#' + info.getValue(),
        header: () => <div className={'flex flex-row gap-[15px] items-center'}>
            <ReverseIcon />
            <span>Регистроционный номер</span>
        </div>,

    },{
        accessorFn: row => row.name,
        id: '2',
        cell: info => info.getValue(),
        header: () =><div className={'flex flex-row gap-[15px] items-center'}>
            <ReverseIcon />
            <span>Наименование программного обеспечения</span>
        </div> ,
    },{
        accessorFn: row => row.codeOfClass,
        id: '3',
        cell: info => info.getValue(),
        header: () => <span>Код класса</span>,
    },{
        accessorFn: row => row.classSoftWare,
        id: '4',
        cell: info => info.getValue(),
        header: () => <span>Класс программного обеспечения</span>,
    },{
        accessorFn: row => row.time_register,
        id: '5',
        cell: info => info.getValue(),
        header: () => <span>Дата регистрации</span>,

    },{
        accessorFn: row => row.addressWebSite,
        id: '6',
        cell: info => <a className={'text-main underline'} href={info.getValue()}>{info.getValue()}</a>,
        header: () => <span>Адрес сайта</span>,
    },
]


export const RegisterTable=()=>{


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
