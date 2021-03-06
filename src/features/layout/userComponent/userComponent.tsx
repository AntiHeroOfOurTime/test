import React from 'react';
import {ReactComponent as UserIcon} from "../../../assets/user-round.svg";
import {ReactComponent as ArrowIcon} from "../../../assets/arrow.svg";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../utils/routes";

interface IProps {
    name?:string;
    fullName?:string;
    photo?:string;
}

export const UserComponent = ({name, fullName, photo}:IProps) => {
    const navigate = useNavigate()

    return (
        <div onClick={()=>{
            navigate(routes.profile.path)
        }} className={'flex flex-row items-center gap-[10px] border-l-[2px] border-inputArea px-[20px] cursor-pointer '}>
            <div className={'rounded-full w-[48px] h-[48px] bg-inputArea flex items-center justify-center '}>
                {photo
                    ?<img src={photo} alt={''} className={'rounded'}/>
                    :<UserIcon fill={'grey'}/>
                }
            </div>
            {name
                ?<span className={'text-[16px] text-greyDark'}>{name} {fullName}</span>
                :<span className={'text-[16px] text-greyDark'} >Вход в аккаунт</span>
            }
            <ArrowIcon fill={'grey'}/>
        </div>
    );
};