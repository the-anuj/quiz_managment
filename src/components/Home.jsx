import React from 'react'
import image from '../assets/Image/background.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=''>
      <img className=' h-screen w-screen' src={image} alt="" />
      <h2 className=' -mt-96 ml-45 text-9xl text-white'><Link to='/startquiz'>Analyze Your Self</Link></h2>
    </div>
  )
}

export default Home