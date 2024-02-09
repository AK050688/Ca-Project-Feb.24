import React from 'react'
import Sale from './Sale/Sale'
import "./Home.css";
import Expenses from './Expenses/Expenses.jsx';
import Bottomitems from './Bottomitems/Bottomitems';

const Home = () => {
  return (
    <div className='home-container'>
    <div className='home-container-div1'>
        <Sale/>
        <Expenses/>
    </div>
    <div className='home-container-div2'>
    <Bottomitems/>
    </div>
    </div>
  )
}

export default Home