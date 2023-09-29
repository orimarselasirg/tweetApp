import {useState, useEffect} from 'react'
import { SlMagnifier } from "react-icons/sl";
import './searchbar.css'

interface Props {
  onSearch:(input:string) => void;
}

export const SearchBar = ({onSearch}: Props) => {
  const [input, setInput] = useState<string>('')

  useEffect(() => {
    if(input.length === 0){
      onSearch('')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[input])


  return (
    <div className="search">
    <input type="text" className="search__input" placeholder="Seach by tag" onChange={(e)=> setInput(e.target.value)}/>
    <div className='search__button' onClick={()=>onSearch(input)}>
      <SlMagnifier/>
    </div>
</div>
  )
}
