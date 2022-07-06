import React from 'react';
import {ReactComponent as OfficeIcon} from "../../../assets/officeWork.svg";
import {SearchInputWithButton} from "../../../shared";

interface IProps {
    includeSoftWare?:number;
    owner?:number;
}

export const Header = ({includeSoftWare=13438, owner=4272}:IProps) => {
    const onSearch = (data:string) => {
        console.log(data)
    }
    return (
        <div className={'w-[98vw] relative -left-[115px] flex flex-row justify-between items-center pl-[115px] pr-[120px] py-[80px]  bg-backgroundColor'}>
            <div className={'w-1/3 text-[#676A71] flex flex-col gap-[20px]'}>
                <h1 className={'text-black font-bold text-[48px] leading-[66px]'}>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
                <span className={'text-[18px]'}> Единый реестр программ для электронных вычислительных машин и баз данных</span>
                <div className={'flex flex-col'}>
                    <span>Включено ПО в реестр: <span className={'text-main'}>{includeSoftWare}</span></span>
                    <span>Правообладателей: <span className={'text-main'}>{owner}</span></span>
                </div>
                <SearchInputWithButton onSearch={onSearch} placeHolder={'Поиск в реестере'} />
            </div>
            <OfficeIcon className={'w-[500px] h-[500px]'}/>
        </div>
    );
};
