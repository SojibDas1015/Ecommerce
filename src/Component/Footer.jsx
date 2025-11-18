import React from 'react'
import { IoCall, IoLocationSharp, IoTimeSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
    return (
        <div className='w-11/12 mx-auto max-w-[1200px]'>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-7'>
                <div className='sm:col-span-2 md:col-span-2'>
                    <div className='flex gap-2 '>
                        <a className="text-xl"><img src="/images/logo.png" alt="" /></a>
                        <div>
                            <p className='text-4xl font-bold text-[#3BB77E]'>Nest</p>
                            <p className='text-[9px] font-semibold'>MART & GROCERY</p>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-[14px]'>Awesome grocery store website <br /> template</p>
                        <p className='flex items-center gap-2 text-[14px]'><IoLocationSharp className='text-[#3BB77E]' />
                            Address 5171 W Campbell Ave undefined</p>
                        <p className='text-[14px]'>Kent, Utah 53127 United States</p>
                        <p className='flex items-center gap-2 text-[14px]'><IoCall className='text-[#3BB77E]' />
                            Call Us <span className='text-[#3BB77E]'>(+91)-540-025-124553</span></p>
                        <p className='flex items-center gap-2 text-[14px]'><MdEmail className='text-[#3BB77E]' />
                            Email <span className='text-[#3BB77E]'>sale@Nest.com</span></p>
                        <p className='flex items-center gap-2 text-[14px]'><IoTimeSharp className='text-[#3BB77E]' />
                            Hours 10:00 - 18:00, Mon - Sat</p>
                    </div>
                </div>
                <div className='space-y-2 grid'>
                    <h4 className='text-xl font-bold'>Company</h4>
                    <p className='text-[14px]'>About Us</p>
                    <p className='text-[14px]'>Delivery Information</p>
                    <p className='text-[14px]'>Privacy Policy</p>
                    <p className='text-[14px]'>Terms & Conditions</p>
                    <p className='text-[14px]'>Contact Us</p>
                    <p className='text-[14px]'>Support Center</p>
                    <p className='text-[14px]'>Careers</p>
                </div>
                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Account</h4>
                    <p className='text-[14px]'><a href="">Sign In</a></p>
                    <p className='text-[14px]'><a href="">View Cart</a></p>
                    <p className='text-[14px]'><a href="">My Wishlist</a></p>
                    <p className='text-[14px]'><a href="">Track My Order</a></p>
                    <p className='text-[14px]'><a href="">Help Ticket</a></p>
                    <p className='text-[14px]'><a href="">Shipping Details</a></p>
                    <p className='text-[14px]'><a href="">Compare products</a></p>
                </div>
                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Corporate</h4>
                    <p className='text-[14px]'><a href="">Become a Vendor</a></p>
                    <p className='text-[14px]'><a href="">Affiliate Program</a></p>
                    <p className='text-[14px]'><a href="">Farm Business</a></p>
                    <p className='text-[14px]'><a href="">Farm Careers</a></p>
                    <p className='text-[14px]'><a href="">Our Suppliers</a></p>
                    <p className='text-[14px]'><a href="">Accessibility</a></p>
                    <p className='text-[14px]'><a href="">Promotions</a></p>
                </div>
                <div className='space-y-2'>
                    <h4 className='text-xl font-bold'>Popular</h4>
                    <p className='text-[14px]'><a href="">Milk & Flavoured Milk</a></p>
                    <p className='text-[14px]'><a href="">Butter and Margarine</a></p>
                    <p className='text-[14px]'><a href="">Eggs Substitutes</a></p>
                    <p className='text-[14px]'><a href="">Marmalades</a></p>
                    <p className='text-[14px]'><a href="">Sour Cream and Dips</a></p>
                    <p className='text-[14px]'><a href="">Tea & Kombucha</a></p>
                    <p className='text-[14px]'><a href="">Cheese</a></p>
                </div>
                <div className='space-y-5'>
                    <h4 className='text-xl font-bold'>Install App</h4>
                    <p className='text-[14px]'><a href="">From App Store or Google Play</a></p>
                    <div className='flex gap-2 '>
                        <div className='w-full'>
                            <img className='border border-l-4 rounded-sm w-full' src="/images/imgw.png" alt="" />
                        </div>
                        <div className='w-full'>
                            <img className='border border-l-4 rounded-sm w-full' src="/images/img.png" alt="" />
                        </div>
                    </div>
                    <p className='text-[14px]'><a href="">Secured Payment Gateways</a></p>

                    <div className='w-full'>
                        <img className='w-full' src="/images/imgvisa.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
