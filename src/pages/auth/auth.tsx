import React from 'react';
import {AuthForm} from "../../features/authForm";
import {IAuthForm} from "../../interface";
import {useNavigate} from "react-router-dom";
import {Button} from "../../shared";
import {NavLink} from "react-router-dom";

interface IProps {
    submitHandler:(data:IAuthForm)=>void;
}

export const Auth = ({submitHandler}:IProps) => {

    //const navigate = useNavigate()

    return (
        <div className={'w-full  h-screen flex flex-col items-center justify-center gap-[40px]'}>
            <h1 className={'text-[36px] font-[700]'}>Авторизация</h1>
            <div className={'w-[430px] flex flex-col items-center gap-[20px]'}>
                <AuthForm submitHandler={submitHandler}/>
                <span className={'text-main text-[16px] cursor-pointer underline'}>Забыли свой пароль? </span>
            </div>
            <div className={'w-[430px] flex flex-col items-center gap-[20px]'}>
                    <Button label={'Авторизация с использованием ЕС ИФЮЛ'} ghost={true}/>
                    <Button label={'Авторизация с использованием МСИ'} ghost={true}/>
            </div>
            <div className={'w-[430px] flex flex-col items-center text-[16px]'}>
                <span>У вас нет аккаунта?</span>
                <NavLink to={''} className={'text-main underline '}>Нажмите сюда чтобы создать</NavLink>
            </div>
        </div>
    );
};
