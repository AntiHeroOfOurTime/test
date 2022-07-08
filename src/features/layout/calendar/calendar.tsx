import React from 'react';
import {ReactComponent as CalendarIcon} from "../../../assets/calendar.svg";

export const Calendar = () => {
    return (
        <div className={'w-[48px] h-[48px] flex items-center justify-center bg-inputArea rounded-[100%] cursor-pointer'}>
            <CalendarIcon fill={'grey'} />
        </div>
    );
};