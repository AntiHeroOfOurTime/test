import React, {useEffect} from 'react';
import {Profile} from "./profile";
import {useAppSelector} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import {routes} from "../../utils/routes";

export const ProfilePage = () => {
    const {isAuth} = useAppSelector(state => state.userReducer)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isAuth)navigate(routes.auth.path)
    },[isAuth])
    return (
        <div>
            <Profile/>
        </div>
    );
};
