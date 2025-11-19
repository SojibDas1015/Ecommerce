import React from 'react'

export default function AboutCard({ data }) {
    return (
        <div className='border border-1 border-[#d5d5d5] rounded-xl px-7 py-13'>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <img src={data.image} alt="" />
                </div>
                <h4 className='text-2xl font-bold py-7'>{data.title}</h4>
                <p className='text-sm max-w-75 mx-auto'>There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered
                    alteration in some form</p>
                <p className='text-sm text-[#3BB77E] pt-7'>Read more</p>
            </div>
        </div>
    )
}
