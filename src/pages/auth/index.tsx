import React from 'react';
import {Auth} from "./auth";
import {IAuthForm} from "../../interface";
import {useAppDispatch} from "../../redux/store";
import {setIsAuth} from "../../redux/user.slice";
import {useNavigate} from "react-router-dom";
import {routes} from "../../utils/routes";

export const AuthPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const submitHandler = (data:IAuthForm) => {
        dispatch(setIsAuth(true))
        navigate(routes.profile.path)
    }
    return (
        <Auth  submitHandler={submitHandler}/>
    );
};