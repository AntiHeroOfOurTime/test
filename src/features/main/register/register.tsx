import React from 'react';
import {ReactComponent as SortIcon} from "../../../assets/sort.svg";
import {ReactComponent as OptionIcon} from "../../../assets/options.svg";
import {RegisterTable} from "./registerTable";

export const Register = () => {
    return (
        <div className={'relative flex flex-col gap-[40px] py-[80px]'}>
            <div className={'flex flex-row justify-between '}>
                <h2 className={'text-[36px] font-bold'}>Реестры</h2>
                <div className={'flex flex-row gap-[35px]'}>
                     <SortIcon/>
                     <OptionIcon/>
                </div>
            </div>
            <RegisterTable />

        </div>
    );
};
