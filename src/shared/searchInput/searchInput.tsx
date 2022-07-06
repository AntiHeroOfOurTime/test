import React, {useState} from 'react';
import {ReactComponent as SearchIcon} from "../../assets/search.svg";


export const SearchInput = () => {
    const [searchQuery,setSearchQuery] = useState<string>('')


    const findWorld = () => {
        //@ts-ignore
            window.find(searchQuery)
    }
    return (
        <div className={'flex flex-row rounded-[5px] ' +
            'gap-[9px] bg-searchArea w-[270px] ' +
            'px-[12px] py-[15px]'}
             onKeyDown={e=> {
            if(e.keyCode===13){
                findWorld()
            }}}>
            <SearchIcon />
            <input className={'outline-none w-full bg-searchArea placeholder:text-secondGrey'} placeholder={'Поиск'} value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}/>

        </div>
    );
};
