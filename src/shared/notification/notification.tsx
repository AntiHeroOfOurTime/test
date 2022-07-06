import React from 'react';
import {ReactComponent as NotificationIcon} from "../../assets/notification.svg";

export const Notification = () => {
    return (
        <div className={'cursor-pointer'}>
           <NotificationIcon/>
        </div>
    );
};
