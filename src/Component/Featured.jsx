import React, { useEffect, useState } from 'react'
import FeaturedCard from './FeaturedCard'

export default function Featured() {
  const [data, setdata] = useState([])
  useEffect(()=>{
    fetch("/ecommarce.json").then((res)=> res.json()).then((data)=>setdata(data))},[]
  )
  console.log(data)
  return (
    <div className='w-10/12 mx-auto max-w-[1200px]'>
      <h1 className='font-bold text-2xl mt-10'>Featured Categories</h1>
      <div className='grid grid-cols-3 lg:grid-cols-10 gap-2'>
        {
        data.map((data)=>
          <FeaturedCard data={data}></FeaturedCard>
        )
      }
      </div>
    </div>
  )
}
