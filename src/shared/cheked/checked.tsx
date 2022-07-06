import React from 'react';
import {useController} from "react-hook-form";
import {ReactComponent as CheckedIcon} from "../../assets/subtract.svg";
import {ReactComponent as UnCheckedIcon} from "../../assets/unSubtract.svg";

interface IProps {
    label:string;
    name:string;
    control:any;

}
export const Checked = ({label, name, control}:IProps) => {
    const {
        field:{onChange, value},
    } =useController({
        name,
        control,
    })
    return (
        <div className={'flex flex-row gap-[14px]'} onClick={()=>{onChange(!value)}}>
            {value?<CheckedIcon/>:<UnCheckedIcon/>}
            <span className={'text-[16px] text-textSecond'}>{label}</span>
        </div>

    );
};

