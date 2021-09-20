import React, {useState} from 'react'
import arrow from '../img/icon-arrow.svg'

const SearchIp = ( {ip, setIp} ) => {

  const [inputValue, setInputValue] = useState('')

  const inputChange = (e) => {
    setInputValue( e.target.value )
  }

  const formSubmit = (e) => {
    e.preventDefault()

    if( inputValue.trim().length > 4 && ip !== inputValue){
      setIp(inputValue)
      setInputValue('')
    }
  }

  return (
    <form className='input h-20 flex justify-center mb-24 lg:mb-5' onSubmit={ formSubmit }> 
        <input
        type='text'
        className='cursor-pointer h-14 rounded-l-xl w-68 lg:w-1/4 focus:outline-none p-6 text-lg'
        placeholder='Search for any IP address or domain'
        value={inputValue}
        onChange={inputChange}
        >
        </input>

        <button type='submit' className='h-14 rounded-r-xl w-12 text-center'>
          <img src={ arrow } alt='arrow' className='mx-auto'></img>
        </button>
    </form>
  )
}

export default SearchIp;