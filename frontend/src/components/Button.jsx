import React from 'react'
import { Link } from 'react-router-dom'
const Button = () => {
  return (
    <div className='pl-10 pb-10'>
        <Link to='/new'>
              <button className='border-[2px] rounded-[10px] text-[2rem] bg-green-500 p-[10px] text-white hover:bg-white hover:text-green-500 hover:outline-["#F5F5F5"]'>Add New Report</button>
        </Link>
    </div>
  )
}

export default Button
