import React from 'react'

export default function FeaturedCard({ data }) {
    return (
        <div className='my-8 flex mx-auto '>
            <div className='bg-amber-50 p-2 rounded-2xl w-full '>
                <div>
                    <img src={data.image} alt="" />
                </div>
                <div className='text-center'>
                    <h4 className='text-[11px] font-bold'>{data.title}</h4>
                    <p className='text-[12px]'>{data.items} items</p>
                </div>
            </div>
        </div>
    )
}
