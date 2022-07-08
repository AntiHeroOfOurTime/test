import React from 'react';
import {IUserData, IUserDataForm} from "../../../interface";
import {UserForm} from "../../../features/profile/userForm";

interface IProps {
    userData:IUserData;
    onSubmit:(data:IUserDataForm)=>void;
}

export const MyData = ({userData,onSubmit}:IProps) => {
    return (
        <div className={'flex flex-col gap-[36px] w-[770px]'}>
            <div className={'text-[24px] font-bold flex gap-[20px] items-center'}>
                <img src={userData.image} alt={''} className={'rounded-full w-[64px] h-[64px]'}/>
                <span>Зраствуй, {userData.name}</span>
            </div>
            <UserForm user={userData} onSubmit={onSubmit}/>
        </div>
    );
};
