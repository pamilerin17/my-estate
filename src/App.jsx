// import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Categories from './components/categories/Categories'
import Proper from './components/Properties/Proper'
import Video from './components/Video/Video'
import About from './components/About/About'
import Leaving from './components/Leaving/Leaving'
import Testimonials from './components/Testimonials/Testimonials'
import Agents from './components/Agents/Agents'
import Pictures from './components/Pictures/Pictures'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
 

  return (
    <div className="app">
      <Router>
        <Header/>
        <Home/>
        <Categories/>
        <Proper/>
        <Video/>
        <About/>
        <Leaving/>
        <Testimonials/>
        <Agents/>
        <Pictures/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
