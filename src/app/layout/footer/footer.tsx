import React from 'react';
import {ReactComponent as Logo} from "../../../assets/logo.svg";

export const Footer = () => {
    return (
        <footer className={'flex flex-col gap-[20px] items-center justify-between py-[80px] w-full '}>
            <div className={'flex flex-row gap-[40px] justify-between text-greyDark w-full  pb-[40px] border-b border-lineColor '}>
                <div className={'w-[260px] flex flex-col gap-[20px]'}>
                    <Logo/>
                    <span className={'text-textMainGrey'}>Открытое акционерное общество «Реестр ПО» начало практическую деятельность с 1 марта 2014 г
                </span>
                </div>
                <div className={'flex flex-col gap-[5px]'}>
                    <h4 className={'font-semibold text-[16px] pb-[5px]'}>Разработчик</h4>
                    <span className={'text-[#676A71]'}>ОАО «Агентство сервисизации и реинжиниринга»</span>
                    <span className={'text-textSecond'}>Минск, улица Клары Цеткин, 24</span>
                </div>
                <div className={'flex flex-col gap-[10px]'}>
                    <h3 className={'font-bold text-[18px] pb-[10px]'}>Информация</h3>
                    <span >Реестры</span>
                    <span >Новости</span>
                    <span >Документы</span>
                    <span >Вопросы</span>
                </div>
                <div className={'w-[270px] flex flex-col gap-[10px]'}>
                    <h3 className={'font-bold text-[18px] pb-[10px]'}>Техническая поддержка</h3>
                    <span className={'pb-[10px] border-b-[1px] leading-[21px] border-lineColor'}>
                    Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.
                </span>
                    <span >+375 25 111 22 33 </span>
                    <span >+375 29 222 44 55  </span>
                    <span > ReestrPOsupport@mail.ru </span>
                </div>
                <div className={'w-[270px] flex flex-col gap-[10px]'}>
                    <h3 className={'font-bold text-[18px] pb-[10px]'}>Контакты </h3>
                    <span >+375 33 112 22 45 </span>
                    <span>+375 29 222 44 88 </span>
                    <span > ReesrtPO@mail.ru </span>
                    <span > 220004 г. Минск, ул. Карла Маркса, 38 </span>
                    <span className={'text-main underline'}> Связаться с поддержкой</span>
                </div>
            </div>
            <span className={'text-secondGrey'}>© Copyright 2022 — ОАО «РеестрПО». Все права защищены</span>


        </footer>
    );
};