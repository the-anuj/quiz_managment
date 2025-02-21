import React from 'react'
import Quiz from './Quiz'

const Result = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='border-blue rounded bg-blue-200 px-4 py-3 size-96 m-5'>
      <span className='ml-60'>Date and time</span>
      <div className='flex flex-row gap-30 mt-20 text-2xl'>
      <ul className='flex flex-col gap-4'>
        <li>Total:{}</li>
        <li>Attempted:</li>
        <li>Correct:</li>
        <li>Worng:</li>
      </ul>
      <span className='text-5xl font-bold  mt-5'>90%</span>
      </div>
    </div>
    </div>
  )
}

export default Result