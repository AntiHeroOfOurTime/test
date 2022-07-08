import React from 'react';
import {DocumentsTable} from "./documnetsTable";
import {ColumnDef} from "@tanstack/react-table";
import {IDocument} from "../../../interface";
import {ReactComponent as DownloadIcon} from "../../../assets/download.svg";
import {ReactComponent as ContentIcon} from "../../../assets/content.svg";

interface IProps {
    totalCount:number
    documents:IDocument[]
}
export const Documents = ({totalCount, documents}:IProps) => {

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
            cell: (info) =>(
                <div className={'flex gap-[15px] text-main items-center'}>
                    <DownloadIcon fill={'#009CB4'} className={'row-start-1 row-end-3'}/>
                    <div className={'flex flex-col'}>
                        <span>Скачать</span>
                        <span>({info.getValue()})</span>
                    </div>

                </div>),
            header: () =><div className={'flex gap-[10px]'}>
                <ContentIcon fill={'#009CB4'}/>
                <span>Содержание</span>
            </div>
        },
    ]
    return (
        <div className={'flex flex-col py-[80px] gap-[40px]'}>
            <div className={'flex flex-col gap-[25px]'}>
                <h2 className={'text-[36px] font-bold'}>Документы</h2>
                <span className={'text-[18px]'}>Всего документов:
                    <span className={'text-main'}> {totalCount} </span>
                </span>
            </div>
            <DocumentsTable data={documents} columns={columns} />
        </div>
    );
};