import React from 'react'
import Hero from '../Component/Hero'
import Featured from '../Component/Featured'
import TreeCard from '../Component/TreeCard'
import Product from '../Component/Product'
import OfferingCard from '../Component/OfferingCard'
import Footer from '../Component/Footer'

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Featured></Featured>
      <TreeCard></TreeCard>
      <Product></Product>
      <OfferingCard></OfferingCard>
    </div>
  )
}
