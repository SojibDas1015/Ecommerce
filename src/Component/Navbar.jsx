import React from 'react'
import { Outlet } from 'react-router'

export default function Navbar() {
    return (
        <div>
            <div className=" py-2 flex justify-between items-center w-10/12 mx-auto max-w-[1200px]">
                <div className=" flex items-center gap-4">
                    <div className='flex gap-2 '>
                        <a className="text-xl"><img src="/public/images/logo.png" alt="" /></a>
                        <div>
                            <p className='text-4xl font-bold text-[#3BB77E]'>Nest</p>
                            <p className='text-[9px] font-semibold'>MART & GROCERY</p>
                        </div>
                    </div>
                    <div className='flex gap-2 hidden lg:flex'>
                        <img className='w-5 h-5' src="/public/images/Group.png" alt="" />
                        <p className='font-bold'>Hot Deals</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><a>Abour</a></li>
                        <li><a>Shop</a></li>
                        <li><a>Mega Menu</a></li>
                        <li><a>Vendors</a></li>
                        <li><a>Pages</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <a className="btn bg-[#3BB77E] text-white text-xl font-bold rounded-md px-10 py-6">Login</a>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
