import React from 'react'

const Results = () => {
  return (
    <div className='border-blue rounded bg-blue-200 px-4 py-3 w-96 m-5'>
      <span className='ml-60'>Date and time</span>
      <div className='flex flex-row gap-30'>
      <ul>
        <li>Total:</li>
        <li>Attempted:</li>
        <li>Correct:</li>
        <li>Worng:</li>
      </ul>
      <span className='text-3xl font-bold ml-15 mt-5'>90%</span>
      </div>
    </div>
  )
}

export default Results