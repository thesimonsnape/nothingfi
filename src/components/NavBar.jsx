import React from 'react'
import Logo from '../assets/logo/nthfinance_logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-16 md:h-20 w-[350px] md:w-[700px] lg:w-[1200px] rounded-full fixed mt-10 flex justify-between items-center bg-transparent border border-[#363636] shadow-[#3838386a] shadow-md px-2 md:px-10 text-white z-10 backdrop-blur-sm'>
      <Link to='/' className='link-styles'>
        <div className='flex items-center'>
            <img src={Logo} alt='logo' className='w-10 h-10'/>
            <h1 className='text-xl font-bold text-[11px] md:text-base hidden md:block'>Nothing Finance</h1>
        </div>
      </Link>
      <div className='flex gap-12 items-center md:-translate-x-2 text-slate-100 text-[11px] md:text-base font-semibold'>
          <Link to='/projects' className='link-styles'>
            <div className='cursor-pointer'>Earn points</div>
          </Link>
          <Link to='/farm' className='link-styles'>
            <div className='cursor-pointer'>Farm points</div>
          </Link>
          <Link to='/trade' className='link-styles'>
            <div className='cursor-pointer'>Trade</div>
          </Link>
          <Link to='/lend' className='link-styles'>
            <div className='cursor-pointer'>Lend</div>
          </Link>
      </div>
      <div>
          <button className='bg-slate-100 text-gray-900 font-semibold px-4 py-1 md:px-10 md:py-3 text-[11px] md:text-base rounded-full'>Connect Wallet</button>
      </div>
    </div>
  )
}

export default NavBar