import React from 'react';
import {ReactComponent as Logo} from "../../../assets/logo.svg";
import {SearchInput} from "../../../shared";
import {Calendar, UserComponent, Notification} from "../../../features/layout";
import {IUserData} from "../../../interface";
interface IProps {
    userData:IUserData
}

export const Header = ({userData}:IProps) => {
    const {name, image, lastName } = userData
    return (
        <header className={'flex flex-row justify-between py-[16px] bg-white'}>
            <div className={'flex flex-row gap-[30px]'}>
                <Logo />
                <SearchInput />
            </div>
            <div className={'flex flex-row gap-[20px]'}>
                <Calendar/>
                <Notification count={4}/>
                <UserComponent name={name} photo={image} fullName={lastName}/>
            </div>
        </header>
    );
};
