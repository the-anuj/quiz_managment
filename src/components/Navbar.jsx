import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex flex-row justify-between px-10 bg-blue-300 h-20 items-center text-2xl shadow-2xs'>
      <h3><NavLink to='/'>Quiz App..</NavLink></h3>
      <ul className='flex flex-row justify-between gap-10'>
        <li><NavLink to='/startquiz'>Start Quiz</NavLink></li>
        <li><NavLink to='/results'>Results</NavLink></li>
      </ul>
    </div>
  </>
  )
}

export default Navbar