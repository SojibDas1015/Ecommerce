import React, { useEffect, useState } from 'react'
import TreeCardDe from './TreeCardDe';

export default function TreeCard() {
    const [treCard, settreCard]=useState([]);
    useEffect(()=>{
        fetch("/treeimage.json").then((res)=> res.json()).then((data)=>settreCard(data))
    },[])
    console.log(treCard)
  return (
    <div className='pb-10 w-11/12 mx-auto max-w-[1200px]'>
      <div className='grid grid-row-3 lg:grid-cols-3 gap-3 w-full'>
        {
        treCard.map((data)=>
        <TreeCardDe data={data}></TreeCardDe>
        )
      }
      </div>
    </div>
  )
}
