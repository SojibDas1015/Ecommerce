import React, { useEffect, useState } from 'react'
import FeaturedCard from './FeaturedCard'
import FeaturedSlider from './FeaturedCardSlider'

export default function Featured() {
  const [data, setdata] = useState([])
  useEffect(()=>{
    fetch("/ecommarce.json").then((res)=> res.json()).then((data)=>setdata(data))},[]
  )
  return (
    <div className='w-11/12 mx-auto max-w-[1200px]'>
      <h1 className='font-bold text-2xl mt-10'>Featured Categories</h1>
      <div className='py-10'>
        <FeaturedSlider key={data.id} cards={data}></FeaturedSlider>
      </div>
    </div>
  )
}
