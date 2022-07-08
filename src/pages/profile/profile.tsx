import React, {useEffect} from 'react';
import {MenuProfile} from "../../features/profile/menuProfile";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {routes} from "../../utils/routes";

export const Profile = () => {
    const location = useLocation()
    const navigate  = useNavigate()
    useEffect(()=>{
        if(location.pathname===routes.profile.path)navigate(routes.myData.path)
    },[location])
    return (
        <div className={'flex flex-col gap-[50px] py-[80px]'}>
            <h2 className={'text-[36px] font-bold pb-[40px]'}>Личный кабинет</h2>
            <div className={'flex gap-[130px]'}>
                <MenuProfile/>
                <Outlet />
            </div>
        </div>
    );
};