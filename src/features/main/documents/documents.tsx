import React from 'react';
import {DocumentsTable} from "./documnetsTable";

export const Documents = () => {
    return (
        <div className={'flex flex-col py-[80px] gap-[40px]'}>
            <div className={'flex flex-col gap-[25px]'}>
                <h2 className={'text-[36px] font-bold'}>Документы</h2>
                <span className={'text-[18px]'}>Всего документов:
                    <span className={'text-main'}>5</span>
                </span>
            </div>
            <DocumentsTable />
        </div>
    );
};