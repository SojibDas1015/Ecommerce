import React from 'react'

export default function FeaturedCard({ data }) {
    return (
        <div className='flex mx-auto w-full'>
            <div style={{backgroundColor: data.color}} className=' rounded-2xl w-full flex justify-center items-center p-2'>
                <div>
                    <div className='flex justify-center'>
                    <img src={data.image} alt="" />
                </div>
                <div className='text-center'>
                    <h4 className='text-[11px] font-bold'>{data.title}</h4>
                    <p className='text-[12px]'>{data.items} items</p>
                </div>
                </div>
            </div>
        </div>
    )
}
