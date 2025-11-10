import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function TreeCardDe({data}) {
  return (
    <div>
      <div style={{backgroundImage: `url(${data.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        maxwidth: '340px',                 // example width
        height: '240px' }} className='flex items-center'>
        <div>
        <h1 className='font-bold text-md w-50 pl-5'>{data.title}</h1>
        <div className='pl-5 pt-5'>
            <button className='bg-[#3BB77E] text-white text-sm font-bold p-2 rounded-md flex items-center gap-2'>{data.button}<FaArrowRight /></button>
        </div>
        </div>
      </div>
    </div>
  )
}
