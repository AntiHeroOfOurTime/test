import React from 'react';
import {ReactComponent as NotificationIcon} from "../../../assets/notification.svg";
interface IProps {
    count?:number
}

export const Notification = ({count=0}:IProps) => {
    return (
        <div className={'cursor-pointer relative bg-backgroundColor px-[13px] py-[10px] flex items-center justify-center rounded-full'}>
            {count?<div className={'bg-main flex justify-center absolute top-[-5px] left-[30px] px-[8px] py-[2px]  rounded-full text-white text-[12px]'}>{count}</div>:<></>}
           <NotificationIcon className={`${count?'fill-main':'fill-greyDark'}`}/>
        </div>
    );
};
