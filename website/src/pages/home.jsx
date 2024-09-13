import React from 'react'
import Top from '../components/top'
import Navbar from '../components/navbar'
import Carousel from '../components/carousel'
import Featuredproduct from '../components/featuredproduct'
import Category from '../components/category'
import Footer from '../components/footer'
import Product from '../components/product'

function Home() {
    return (
        <>
        <Top/>
        <Navbar/>
        <Carousel/>
        <Featuredproduct/>
        <Product/>
        <Category/>
        <Footer/>
        </>
    )
}

export default Home
