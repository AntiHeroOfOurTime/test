import React from 'react';
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthForm} from "../../interface";
import {Input,Checked, Button} from "../../shared/";


interface IProps {
    submitHandler:(data:IAuthForm)=>void;
}

export const AuthForm = ({submitHandler}:IProps) => {
    const schema = yup.object().shape({
       name: yup.string().required().min(4),
       password:yup.string().required(),
   })
   const { control, handleSubmit} = useForm<IAuthForm>({
       resolver: yupResolver(schema),
       defaultValues:{
           name:'',
           password:'',
           rememberMe:false,
       }
   });
    const onSubmit:SubmitHandler<IAuthForm> = (data:IAuthForm):void => {
      submitHandler(data)
    }
    return (
        <>
            <form className={'w-full flex flex-col gap-[20px]'} onSubmit={handleSubmit(onSubmit)}>
                <Input name={'name'} control={control} label={'Имя'} placeholder={'Введите имя'} />
                <Input name={'password'} type={'password'} control={control} label={"Пароль"} placeholder={"Введите пароль"}/>
                <Checked label={'Запомнить меня на этом компьютере'} control={control} name={'rememberMe'}/>
                <Button typeof={'submit'} label={'Вход'} color={'main'}/>
            </form>

        </>
    );
};