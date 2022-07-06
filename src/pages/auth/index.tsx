import React from 'react';
import {Auth} from "./auth";
import {IAuthForm} from "../../interface";

export const AuthPage = () => {
    const submitHandler = (data:IAuthForm) => {
        console.log(data)
    }
    return (
        <Auth  submitHandler={submitHandler}/>
    );
};