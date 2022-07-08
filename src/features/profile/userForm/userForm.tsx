import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {IUserData, IUserDataForm} from "../../../interface";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Input} from "../../../shared";
import {SelectForm} from "../../../shared/select";
import {InputPassword} from "../../../shared/input/inputPassword";

interface IProps {
    user:IUserData;
    onSubmit:(data:IUserDataForm)=>void
}

export const UserForm = ({user, onSubmit}:IProps) => {
    const schema = yup.object().shape({
        name:yup.string().required(),
        secondName:yup.string().required(),
        lastName:yup.string().required(),
        image:yup.string().required(),
        country:yup.string().required(),
        city:yup.string().required(),
        phone:yup.string().required(),
    });
    const {
        control,
        handleSubmit,
        reset,
        formState: { isValid },
    } = useForm<IUserDataForm>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });
    useEffect(() => {
        reset(user);
    }, [user]);
    const onSubmitHandler = (data:IUserDataForm) =>{
        onSubmit(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className={'w-full flex flex-col gap-[36px]'}>
            <div className={'border-y w-full border-lineColor py-[36px] gap-y-[20px] gap-x-[30px] grid grid-cols-2 '}>
                <span className={'text-greyDark text-[18px] font-bold col-span-full ' }>Основные данные</span>
                <Input authInput={true} name={'name'} placeholder={'Имя'} control={control} label={'Имя'}/>
                <Input authInput={true} name={'secondName'} placeholder={'Отчество'} control={control} label={'Отчество'}/>
                <Input authInput={true} name={'lastName'} placeholder={'Фамилия'} control={control} label={'Фамилия'}/>
                <Input authInput={true} name={'phone'} placeholder={'Телефон'} control={control} label={'Телефон'}/>
                <SelectForm label={'Город'} name={'city'} control={control} options={[{id:'Минск',label:'Минск'},{id:'Москва',label:'Москва'},]}/>
                <SelectForm label={'Страна'} name={'country'} control={control} options={[{id:'Беларусь',label:'Беларусь'},{id:'Россия',label:'Россия'},]}/>
            </div>
            <div className={'border-b border-lineColor pb-[36px] gap-y-[20px] gap-x-[30px] grid grid-cols-2 '}>
                <span className={'text-greyDark text-[18px] font-bold col-span-full ' }>Пароль</span>
                <InputPassword label={'Новый пароль'} control={control} name={'password'}
                               placeholder={'Новый пароль'}/>
                <InputPassword label={'Подтверждение пароля'} control={control} name={'new-password'}
                               placeholder={'Подтверждение пароля'}/>
            </div>

            <Button type={'submit'} className={'w-[270px] px-0'} label={'Сохранить'}/>
        </form>
    );
};