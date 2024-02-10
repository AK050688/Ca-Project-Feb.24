import React from 'react'
import "./FirstPurchase.css"

const FirstPurchase = () => {
  return (

    <>
       <div className="main-v">
       <div className="Upper">
            <input type="text" placeholder='Enter Bussiness Name' name="" id="" /> 
            <span><button type="button">Save</button></span>
        </div>
        <div className="middle">
            <h3>ORDERS</h3>
        </div>
        <div className="lower">
            <img src="" alt="" />
            <p>Make & share purchase orders with your parties & convert them to purchase bill instantly.</p>
            <button type="button">Add Your First Purchase Order</button>
        </div>
       </div>
    </>
    )
}

export default FirstPurchase 