import React from 'react'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'

import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div >
      <Header/>
      <Outlet/>
      
     
    </div>
  )
}

export default App
