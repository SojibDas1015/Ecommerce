import React from 'react'
import { useLoaderData } from 'react-router'

export default function DmegaMenu() {
    const Dmenu = useLoaderData();
    console.log(Dmenu);
  return (
    <div className='w-11/12 mx-auto max-w-[1200px] py-8'>
      <div>
        <img src={Dmenu.image} alt="" />
        <h1 className='text-xl font-bold'>{Dmenu.title}</h1>
        <p>Item In Stock {Dmenu.stock_quantity} Quantity</p>
        <p>Estimated Delivery Time {Dmenu.estimated_delivery_days} Days</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel ipsa error dolor cumque cum autem iure eligendi aut voluptatibus maiores explicabo expedita, laboriosam nulla porro est voluptas? Eius repellat ea maxime minima quae, est nemo sit dignissimos. Commodi quis quibusdam cum provident porro voluptates, a debitis velit dignissimos dolore?</p>
      </div>
    </div>
  )
}
