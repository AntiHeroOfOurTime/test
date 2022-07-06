import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    label:string;
    color?:'main'|'light'|'overLight';
    ghost?:boolean;

}

export const Button = ({ghost=false,label,color='main',className, ...rest}:IProps) => {
    if(ghost)return (
        <button className={`text-greyDark underline 
                            w-full py-[20px] text-center
                            border border-greyLight 
                            rounded-[5px]
                            hover:text-main hover:border-main ${className}`} {...rest}>{label}</button>
    )
    return (
        <button className={`${color==='main'
                                ?'bg-main'
                                :color==='light'
                                ?'bg-[#01B8D5]'
                                :'bg-[#01BEDB]' }
                                text-white px-[191px] py-[15px]  
                                rounded-[5px] font-bold size-[18px] ${className}`} {...rest}
            >
                {label}
            </button>
        );
};
