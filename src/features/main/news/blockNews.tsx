import React from 'react';
import {ReactComponent as CalendarIcon} from "../../../assets/calendar.svg";

interface IProps {
    title:string;
    date:string;
    description:string;
    img:string;
}


export const BlockNews = ({title, img, description, date}:IProps) => {
    return (
        <div className={'flex relative flex-col gap-[20px] w-[370px] '}>
            <img src={img} alt={''} className={'relative bg-cover w-[370px] h-[220px] rounded-[5px]'}/>

            <div className={'flex flex-col gap-[12px]'}>
                <h4 className={'font-semibold text-[18px]'}>{title}</h4>
                <div className={'flex gap-[13px] text-textSecond'}>
                    <CalendarIcon fill={'grey'} className={'w-[18px] h-[19px]'}/>
                    <span>{date}</span>
                </div>
                <span className={'text-[16px] text-textMainGrey'}>{description}</span>
            </div>

            
        </div>
    );
};