import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router';

export default function ProductCard({ data }) {
    return (
        <div>
            <Link to={`/megamenu/${data.id}`}>
                <div className='w-full lg:max-w-70  border border-[#adadad56] border-1 rounded-xl p-4 relative'>
                    <div className='flex justify-center items-center'>
                        <img src={data.image} alt="" />
                    </div>
                    <p className='text-[12px] text-[#ADADAD] font-medium'>{data.material}</p>
                    <h3 className='font-bold text-[14px]'>{data.title}</h3>
                    <p className='text-[#3BB77E] text-[14px]'><span className='text-[#ADADAD] font-bold'>by</span> {data.by}</p>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <h3 className='text-[13px] font-bold text-[#3BB77E] underline underline-offset-1'>{data.price_now}</h3>
                            <h3 className='text-[13px] font-semibold text-[#ADADAD]'>{data.price_old}</h3>
                        </div>
                        <button className='flex items-center text-[12px] font-semibold bg-[#DEF9EC] text-[#3BB77E] py-1 px-2 rounded-sm'><IoCartOutline className='text-[16px]' />Add</button>
                    </div>
                    <div className=''>
                        <p className='absolute top-0 left-0 bg-[#3BB77E] px-4 py-1 text-[12px] rounded-tl-xl rounded-br-xl text-white'>{data.discount_percent}%</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
