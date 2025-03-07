import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex bg-red-200 justify-between'>
    <div className='w-20 h-20'>
        <Link to='/'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/047/656/219/small/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg" alt="" srcset="" className='rounded-full ml-5'/>
        </Link>
    </div>

        <div className='flex gap-6 justify-center mt-5 '>
        <Link to='/Login'>
        <button type="button" className='border-1 p-2 pl-3 pr-3 bg-red-400 hover:bg-yellow-400 border-blue-600 mr-2 rounded-md cursor-pointer'>Login</button>
        </Link>

        <Link to='/Signup'>
        <button type="button" className='border-1 mr-7 p-2 bg-red-400 hover:bg-yellow-400 border-blue-600 rounded-md cursor-pointer'>SignUp</button>
        </Link>
        
        </div>
    </div>
  )
}

export default NavBar
