import React from 'react';
import {ReactComponent as SortIcon} from "../../../assets/sort.svg";
import {ReactComponent as OptionIcon} from "../../../assets/options.svg";
import {RegisterTable} from "./registerTable";
import {ColumnDef} from "@tanstack/react-table";
import {ISoftWare} from "../../../interface";
import {ReactComponent as ReverseIcon} from "../../../assets/reverse.svg";

interface IProps {
    data:ISoftWare[]
}

export const Register = ({data}:IProps) => {
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
    return (
        <div className={'relative flex flex-col gap-[40px] py-[80px]'}>
            <div className={'flex flex-row justify-between '}>
                <h2 className={'text-[36px] font-bold'}>Реестры</h2>
                <div className={'flex flex-row gap-[35px]'}>
                     <SortIcon/>
                     <OptionIcon/>
                </div>
            </div>
            <RegisterTable columns={columns} data={data}/>
        </div>
    );
};
