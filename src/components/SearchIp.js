import React, {useState} from 'react'
import arrow from '../img/icon-arrow.svg'

const SearchIp = ( {setIp} ) => {

  const [inputValue, setInputValue] = useState('')

  const inputChange = (e) => {
    setInputValue( e.target.value )
  }

  const formSubmit = (e) => {
    e.preventDefault()

    if( inputValue.trim().length > 4 ){
      setIp(inputValue)
      setInputValue('')
    }
    // console.log( inputValue )
  }

  return (
    <form className='input h-20 flex justify-center mb-5' onSubmit={ formSubmit }> 
        <input
        type='text'
        className='cursor-pointer h-14 rounded-l-xl  w-1/4 focus:outline-none pl-5'
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