import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=' fixed z-10 top-0 left-0 w-full'>
      <div className='text-center bg-violet-600 text-white ' >
        <p className='text-xl font-bold p-5' >Annual Spring Sale! starts  Now</p>
      </div>
      <div className='flex justify-between bg-slate-200 h-31'>
        <Link
        to="/"
         className='ml-11 text-2xl text-violet-600 font-bold mt-5'>PushDoc</Link>
        
        <div>
        <Link to="/signUp">
        <button className='mr-11 text-white font-bold bg-violet-600 m-2 p-3 pl-5 pr-5 border rounded-md'>SignUp</button>
        </Link>
        <Link to="/login">
        <button className='mr-11 text-white font-bold bg-violet-600 m-2 p-3 pl-5 pr-5 border rounded-md'>Login</button>
        </Link>
        </div>
       

      </div>
    </div>
  )
}

export default Header
