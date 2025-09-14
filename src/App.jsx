import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home.jsx'
import MenuPage from './components/Pages/MenuPage.jsx'
import Offters from './components/Pages/Offters.jsx'
import PizzaPage from './components/IconSection/PizzaPage.jsx'
import ChickenPage from './components/IconSection/ChickenPage.jsx'
import DessertsPage from './components/IconSection/DessertsPage.jsx'
import IceCreamPage from './components/IconSection/IceCreamPage.jsx'
import CoffePage from './components/IconSection/CoffePage.jsx'
import SaladPage from './components/IconSection/SaladPage.jsx'
import BlogRecipes from './components/Pages/BlogRecipes.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="Offters" element={<Offters />} />
        <Route path="PizzaPage" element={<PizzaPage />} />
        <Route path="ChickenPage" element={<ChickenPage />} />
        <Route path="DessertsPage" element={<DessertsPage />} />
        <Route path="IceCreamPage" element={<IceCreamPage />} />
        <Route path="CoffePage" element={<CoffePage />} />
        <Route path="SaladPage" element={<SaladPage />} />
        <Route path="blog" element={<BlogRecipes />} /> 
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
