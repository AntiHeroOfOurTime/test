import React from 'react';
import {Documents, Faq, Header, News,Register} from "../../features/main";



export const MainPage = () => {
    return (
        <div>
                <Header/>
                <Register/>
                <News/>
                <Documents/>
                <Faq/>
        </div>
    );
};
