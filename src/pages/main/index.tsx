import React from 'react';
import {Documents, Faq, Header, News, Register} from "../../features/main";
import {useAppSelector} from "../../redux/store";


export const MainPage = () => {
    const {data:register, ownerCount, includeSoftwareCount} = useAppSelector(state => state.registerReducer)
    const {documents, totalCount} = useAppSelector(state => state.documentsReducer)
    const {news} = useAppSelector(state => state.newsReducer)
    const {faq} = useAppSelector(state => state.faqReducer)
    return (
        <div>
                <Header ownerCount={ownerCount} includeSoftwareCount={includeSoftwareCount}/>
                <Register data={register}/>
                <News data={news}/>
                <Documents documents={documents} totalCount={totalCount}/>
                <Faq data={faq}/>
        </div>
    );
};
