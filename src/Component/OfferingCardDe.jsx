import React from 'react'

export default function OfferingCardDe({ data }) {
    return (
        <div className='bg-[#F4F6FA] p-2 rounded-xl'>
            <div className='flex items-center gap-3'>
                <div className='w-10'>
                    <img className='w-full' src={data.image} alt="" />
                </div>
                <div>
                    <h3 className='text-[13px] font-bold'>{data.title}</h3>
                    <p className='text-[12px] text-[#ADADAD]'>{data.subtitle}</p>
                </div>
            </div>
        </div>
    )
}
