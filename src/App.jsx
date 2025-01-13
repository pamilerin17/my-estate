// import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Categories from './components/categories/Categories'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
 

  return (
    <div className="app">
      <Router>
        <Header/>
        <Home/>
        <Categories/>
      </Router>
    </div>
  )
}

export default App
