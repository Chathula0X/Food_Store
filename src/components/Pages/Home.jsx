import React from 'react'
import NavBar from '../NavBar'  
import HeroPage from '../HeroSection/HeroPage.jsx'
import HeroBanner from '../HeroSection/HeroBanner.jsx'  
import MenuBanner from '../HeroSection/MenuBanner.jsx'
import CategorieCards from '../HeroSection/CategorieCards.jsx'
import BlogRecipeBanner from '../BlogRecipeBanner.jsx'
import Footer from '../Footer'  

function Home() {
  return (
    <div>
    <NavBar />
    <HeroPage />
    <CategorieCards />
    <MenuBanner />
    <HeroBanner />
    <BlogRecipeBanner />
    <Footer />
    </div>
  )
}

export default Home