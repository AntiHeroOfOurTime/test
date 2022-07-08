import React from 'react';
import {AuthForm} from "../../features/authForm";
import {IAuthForm} from "../../interface";
import {NavLink, useNavigate} from "react-router-dom";
import {Button} from "../../shared";
import {ReactComponent as BackArrow} from "../../assets/backArrow.svg";
import {routes} from "../../utils/routes";

interface IProps {
    submitHandler:(data:IAuthForm)=>void;
}

export const Auth = ({submitHandler}:IProps) => {
    const navigate = useNavigate()
    return (
        <div className={'w-[98vw] flex flex-col ' +
            'gap-[15px] relative -left-[115px] ' +
            'px-[115px]  h-full ' +
            'py-[40px] border-y border-lineColor'}>
            <div onClick={()=>{navigate(routes.main.path)}} className={'flex gap-[15px] cursor-pointer'}>
                <BackArrow/>
                <span className={'text-[18px] text-textMainGrey'}>Главная</span>
            </div>
            <div className={'w-full  h-full flex flex-col items-center gap-[40px]'}>
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
        </div>

    );
};
