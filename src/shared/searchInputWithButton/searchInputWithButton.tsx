import React, {useState} from 'react';
import {ReactComponent as SearchIcon} from "../../assets/search.svg";
export interface IProps {
    onSearch:(data:string)=>void;
    placeHolder?:string;
}



export const SearchInputWithButton = ({onSearch, placeHolder=''}:IProps) => {
    const [searchQuery,setSearchQuery] = useState<string>('')
    const search = () =>{
        onSearch(searchQuery)
    }

    return (
        <div className={'flex flex-row'}>
            <div className={'flex flex-row rounded-l-[5px] ' +
                'gap-[9px] bg-searchArea w-[270px] ' +
                'px-[12px] py-[15px]'}>
                <SearchIcon />
                <input className={'outline-none w-full bg-searchArea placeholder:text-secondGrey'} placeholder={placeHolder} value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}/>
            </div>
            <button onClick={search} className={'bg-main font-bold rounded-r-[5px] text-white px-[25px] py-[15px]'}>Искать</button>
        </div>
    );
};
