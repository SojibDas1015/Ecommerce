import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

export default function Product() {
    const [product, setproduct]= useState([]);
    useEffect(()=>{
        fetch("/product.json").then((res)=> res.json()).then((data)=>setproduct(data))
    },[])
    console.log(product)

  return (
    <div className='w-11/12 mx-auto max-w-[1200px]'>
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
        {
            product.slice(0, 10).map((data)=>
            <ProductCard key={data.id} data={data}></ProductCard>
            )
        }
      </div>
    </div>
  )
}
