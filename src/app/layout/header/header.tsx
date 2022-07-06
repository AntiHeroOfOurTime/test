import React from 'react';
import {ReactComponent as Logo} from "../../../assets/logo.svg";
import {SearchInput} from "../../../shared";
import {Calendar} from "../../../shared";
import {Notification} from "../../../shared";
import {UserComponent} from "../../../shared";

export const Header = () => {
    return (
        <header className={'flex flex-row justify-between py-[16px] bg-white'}>
            <div className={'flex flex-row gap-[30px]'}>
                <Logo />
                <SearchInput />
            </div>
            <div className={'flex flex-row gap-[20px]'}>
                <Calendar/>
                <Notification/>
                <UserComponent/>
            </div>

        </header>
    );
};
