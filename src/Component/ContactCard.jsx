import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactCard({ data }) {
    return (
        <div>
            <h4 className='text-[#3BB77E] text-xl font-bold mb-4'>{data.title}</h4>
            <p className='text-sm'>{data.address}</p>
            <div className='text-sm'>
                <p>{data.city}</p>
                <p>{data.zip}</p>
                <p>{data.country}</p>
            </div>
            <p className='text-sm'><u>Phone:</u> {data.phone}</p>
            <p className='text-sm'><u>Email:</u> {data.email}</p>
            <button className='mt-4 py-3 px-4 bg-[#3BB77E] text-white text-xs font-bold rounded-sm flex items-center gap-1'><FaMapMarkerAlt />
                {data.mapButton}</button>
        </div>
    )
}
