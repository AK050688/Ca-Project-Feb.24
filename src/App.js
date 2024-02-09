import { useState } from 'react'
import "./Css/styles.css" ; 
import "./Css/styles1.css";
import "./App.css";
import Navbar from './Component/Navbar/Navbar.jsx'
import Sidebar from './Component/Sidebar/Sidebar.jsx';
import Header from './Component/Layourt/Header.jsx';
import Home from './Component/Layourt/Home/Home.jsx';
import Stockinventory from './Component/Stockinventory/Stockinventory.jsx';





function App() {
  

  return (
    <div className='app-container'>
      <Navbar/>
      <div className="app-page-div">
        <section className="app-sidebar">
          <Sidebar/>
        </section>
        <section className="app-Home">
          <div className="header-div-fixed">
          <Header/>
          </div>
          <div className="home-layout">
            <div className="app-home-section">
          <Home/>
            </div>
          <div className="app-right-sidebar">
          <Stockinventory/>
          </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
