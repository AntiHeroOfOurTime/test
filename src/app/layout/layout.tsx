import React, {useEffect} from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Header} from "./header";
import {Footer} from "./footer";
import {routes} from "../../utils/routes";
import {useAppSelector} from "../../redux/store";
import {IUserData} from "../../interface";

export const Layout = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const {user:userData, isAuth} = useAppSelector(state => state.userReducer)
    useEffect(()=>{
        if(pathname=='/')navigate(routes.main.path)
    },[])
    return (
        <div className={'flex flex-col h-screen justify-between px-[115px] '}>
                <Header userData={isAuth?userData:{} as IUserData}/>
                <Outlet key={2}/>
                <Footer/>
        </div>
    );
};
