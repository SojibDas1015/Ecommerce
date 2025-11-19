import React from 'react'
import { useLoaderData } from 'react-router'
import ProductCard from './ProductCard'
import { IoChevronDownSharp } from 'react-icons/io5'
import { RiSortAlphabetDesc } from 'react-icons/ri'

export default function MegaMenu() {
    const product = useLoaderData()
    return (
        <div>
            <div className="w-11/12 mx-auto max-w-[1200px]">
                <div className='block lg:flex justify-between py-8 text-center lg:text-left'>
                    <div>
                        <h1 className="text-4xl font-bold">Recips Article</h1>
                    </div>
                    <ul className="grid grid-cols-2 lg:grid-cols-6 items-center justify-items-start lg:justify-items-center gap-2 text-sm font-bold mt-4 lg:m-0 w-60 mx-auto lg:w-auto">
                        <li>All</li>
                        <li>Baking material</li>
                        <li>Fresh Fruits</li>
                        <li>Vegetables</li>
                        <li>Milks & Dairies</li>
                        <li>Meats</li>
                    </ul>
                </div>
            </div>
            <div className='w-10/12 mx-auto max-w-[1100px] pb-12'>
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
                    {
                        product.slice(10, 25).map((data) =>
                            <ProductCard key={data.id} data={data}></ProductCard>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
