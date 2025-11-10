import React, { useEffect, useState } from 'react'
import OfferingCardDe from './OfferingCardDe';

export default function OfferingCard() {
    const [offer, setoffer] = useState([]);
    useEffect(()=>{
        fetch("/offer.json").then((res)=> res.json()).then((data)=> setoffer(data))
    },[])
  return (
    <div className='w-11/12 mx-auto max-w-[1200px] py-8'>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
        {
            offer.map((data)=>
            <OfferingCardDe key={data.id} data={data}></OfferingCardDe>
            )
        }
      </div>
    </div>
  )
}
