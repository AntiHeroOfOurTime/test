import React, {ReactNode} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

interface IProps {
    children:ReactNode;
    item:any
}

export const MenuItem = ({children,item}:IProps) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    return (
        <div onClick={()=>{navigate(item.path)}}
             className={`flex items-center pl-[25px] cursor-pointer
                             gap-[15px] w-full h-[70px]
                              border border-lineColor rounded-[5px] hover:text-[20px]
                              ${pathname==item.path&&'text-main border-main'}`}>
            {children}
            <span>{item.title}</span>
        </div>
    );
};