import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react';
import {useController} from 'react-hook-form';
import {ReactComponent as ShowPasswordIcon} from "../../assets/showPassword.svg";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, any>{
    name: string;
    control: any;
    label:string;
}

export const InputPassword = ({label, control, name, ...rest }: IProps) => {
    const [show,setShow] = useState(false)
    const {
        field: { onChange, value },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });
    return(
        <div className={'flex flex-col-reverse w-full relative'}>
        <div className={`flex bg-inputArea
                        border border-inputArea
                        rounded-[5px] w-full flex-row 
                        gap-[5px] items-center peer
                        focus-within:border-main
                        p-[18px] 
                        `}>
            <input  value={value}
                    onChange={onChange}
                    type={show?'text':"password"}
                    className={`w-full outline-none 
                    bg-inputArea                    
                   text-greyDark                                      
                   `} {...rest}/>
            <ShowPasswordIcon onClick={()=>setShow(!show)} className={''}/>
        </div>
        <span className={`text-[14px] text-textSecond 
                                peer-focus-within:text-main 
                                ${invalid&&'text-red'}`}>
        {label}
        </span>
    </div>
    )
    }