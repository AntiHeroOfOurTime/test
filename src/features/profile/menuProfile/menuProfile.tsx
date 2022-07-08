import React from 'react';
import {ReactComponent as UserIcon} from "../../../assets/user-round.svg";
import {ReactComponent as NotificationIcon} from "../../../assets/notification.svg";
import {ReactComponent as RegisterIcon} from "../../../assets/register.svg";
import {ReactComponent as MetadataIcon} from "../../../assets/content.svg";
import {ReactComponent as SecurityIcon} from "../../../assets/security.svg";
import {ReactComponent as DownloadIcon} from "../../../assets/download.svg";
import {ReactComponent as ExitIcon} from "../../../assets/exit.svg";
import {routes} from "../../../utils/routes";
import {useLocation, useNavigate} from "react-router-dom";
import {MenuItem} from "./menuItem";
import {useAppDispatch} from "../../../redux/store";
import {setIsAuth} from "../../../redux/user.slice";

export const MenuProfile = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const selectColor = (path:string) =>{
        return pathname==path?'#009CB4':'grey'
    }
    const dispatch = useAppDispatch()

    return (
        <div  className={'w-[270px] text-[18px]'}>
            <MenuItem item={routes.myData}>
                <UserIcon fill={ selectColor(routes.myData.path)} />
            </MenuItem>
            <MenuItem item={routes.notification}>
                <NotificationIcon fill={selectColor(routes.notification.path)}/>
            </MenuItem>
            <MenuItem item={routes.register}>
                <RegisterIcon fill={ selectColor(routes.register.path)}/>
            </MenuItem>
            <MenuItem item={routes.metadata}>
                <MetadataIcon fill={ selectColor(routes.metadata.path)}/>
            </MenuItem>
            <MenuItem item={routes.security}>
                <SecurityIcon fill={selectColor(routes.security.path)}/>
            </MenuItem>
            <MenuItem  item={routes.myDownload}>
                <DownloadIcon fill={selectColor(routes.myDownload.path)}/>
            </MenuItem>
            <div onClick={()=>{
                dispatch(setIsAuth(false))
                navigate(routes.auth.path)
            }} className={'flex cursor-pointer hover:text-[20px] items-center pl-[25px] gap-[15px] w-full h-[70px] border border-lineColor rounded-[5px]'}>
                <ExitIcon fill={'red'}/>
                <span className={'text-red'}>Выход</span>
            </div>
            
        </div>
    );
};
