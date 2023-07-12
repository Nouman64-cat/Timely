import React from 'react'
import styles from './styles.module.css'
const Header = () => {
  return (
    <div className="flex flex-row px-3 py-3 justify-between ">
      <h1 className="lg:text-2xl sm:text-xl ">Timely!</h1>
    <div className="mt-5 p-5  px-10 bg-gray-100 rounded-full text-center opacity-70 border-2 border-gray-300">
      <h1 className="text-5xl">Welcome to Timely!</h1>
      <h2 className='text-xl pt-2'>Enter your prompt to set timer...</h2>
    </div>
    <h1>User_name</h1>
    </div>
  )
}

export default Header