import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "./header";
import {Footer} from "./footer";

export const Layout = () => {
    return (
        <div className={'flex flex-col h-screen justify-between pl-[115px] pr-[124px]'}>
                <Header/>
                <Outlet/>
                <Footer/>
        </div>
    );
};
