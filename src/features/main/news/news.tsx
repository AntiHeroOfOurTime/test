import React from 'react';
import {BlockNews} from "./blockNews";
import img1 from '../../../assets/photoNews/photo1.png'
import img2 from '../../../assets/photoNews/photo2.png'
import img3 from '../../../assets/photoNews/photo3.png'
import img4 from '../../../assets/photoNews/photo4.png'
import img5 from '../../../assets/photoNews/photo5.png'
import {Button} from "../../../shared";

export const News = () => {
    return (
        <div className={'flex flex-col gap-[40px] relative -left-[115px] bg-backgroundColor py-[80px] items-center w-[98vw] pl-[115px] pr-[120px] '}>
            <h2 className={'text-[36px] font-bold w-full text-left'}>Новости реестра</h2>
            <div className={'grid w-full grid-cols-3 gap-x-[30px] pag-y-[40px] justify-between'}>
                <BlockNews
                    description={`В связи с проведением технических работ 
                    '30.05.2022 с 15:00 могут наблюдаться пер...`}
                    date={`30.05.2022`}
                    title={'Технические работы 30.05.2022'}
                    img={img1}
                />
                <BlockNews
                    img={img2}
                    title={'Изменение справочника'}
                    date={'28.05.2022'}
                    description={`Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Дей...`}
                />
                <BlockNews
                    img={img1}
                    title={'Технические работы 26.05.2022'}
                    date={'26.05.2022'}
                    description={`В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...`}
                />
                <BlockNews
                    img={img3}
                    title={'Лицензирование в Беларуси'}
                    date={'25.05.2022'}
                    description={`Лицензирование затрагивает отдельные 
                                  виды деятельности в Республике Беларус...`}
                />
                <BlockNews
                    img={img4}
                    title={'Тестирование системы новостей Ед...'}
                    date={'20.05.2022'}
                    description={`Тестирование системы новостей ЕРЛ.`}
                />
                <BlockNews
                    img={img5}
                    title={'Обновление версии реестра ПО'}
                    date={'18.05.2022'}
                    description={`В новой версии доступны новые функции, которые упрощают использование сервис...`}
                />
            </div>
            <Button label={`Показать все`} className={`w-[270px] !px-[0px] `} />
            
            </div>
    );
};