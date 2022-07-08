import React from 'react';
import {MyData} from "./myData";
import {IUserDataForm} from "../../../interface";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {changeUser} from "../../../redux/user.slice";

export const MyDataPage = () => {
    const {user:userData} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const onSubmit = (data:IUserDataForm) =>{
        dispatch(changeUser({...data}))
    }

    return (
        <div>
            <MyData onSubmit={onSubmit} userData={userData}/>
        </div>
    );
};
