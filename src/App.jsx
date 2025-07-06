import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryCarousel from './components/CategoryCarousel'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <CategoryCarousel />
      <ProductGrid />
      <Footer />
    </div>
  )
}
