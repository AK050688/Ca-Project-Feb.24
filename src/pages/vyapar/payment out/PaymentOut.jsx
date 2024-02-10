import React from 'react'
import "./PaymentOut.css"
const PaymentOut = () => {
  return (
    <>
    <div className="main-v">
      <div className="Upper">
        <input type="text" placeholder="Enter Bussiness Name" name="" id="" />
        <span>
          <button type="button">Save</button>
        </span>
      </div>

      <div className="middle">
        <div className="upper">
          <div className="upper-first">
          <select name="cars" id="cars">
            <option value="volvo">This Month</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <div className="between">
            <h4>Between</h4>
            <input type="date" />
            <h5>to</h5>
            <input type="date" />
          </div>
          <select className="AllFirm" name="cars" >
            <option value="volvo">All Firms</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          </div>
          <div className="upper-last">
            <img src="" alt="" />
            <label htmlFor="">Excel</label>
            <img src="" alt="" />
            <label htmlFor="">Print</label>
          </div>
           
        </div>
        <div className="Debit">
        <select name="note" id="cars">
            <option value="Debit Note">Payment Out</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div className="transaction">
    
      <div className="bar">
        <div className="search">
      <span>🔍</span>
        
        <input type="text" />
        </div>
        <button><span>+</span>Add Payment Out</button>
      </div>
      <div>
      <table>
<thead>
  <tr>
    <th>Date <span>▼</span></th>
    <th>REF No<span>▼</span></th>
    <th>Party Name<span>▼</span></th>
    <th>Catagory Name<span>▼</span></th>
    <th>Type<span>▼</span></th>
    <th>Total <span>▼</span></th>
    <th>Recieved/Paid <span>▼</span></th>
    <th>Balance <span>▼</span></th>
    <th>Print/Share <span>▼</span></th>
    <th></th>
   
 
  </tr>
</thead>
{/* <tbody>
  <tr>
    <td>2024-02-01</td>
    <td>INV-001</td>
    <td>ABC Company</td>
    <td>Vendor</td>
    <td>$1000</td>
    <td>$1000</td>
  </tr>
  <tr>
    <td>2024-02-03</td>
    <td>INV-002</td>
    <td>XYZ Corporation</td>
    <td>Customer</td>
    <td>$1500</td>
    <td>$1500</td>
  </tr>
  <tr>
    <td>2024-02-05</td>
    <td>INV-003</td>
    <td>LMN Enterprises</td>
    <td>Vendor</td>
    <td>$2000</td>
    <td>$2000</td>
  </tr>
  <tr>
    <td>2024-02-05</td>
    <td>INV-003</td>
    <td>LMN Enterprises</td>
    <td>Vendor</td>
    <td>$2000</td>
    <td>$2000</td>
  </tr>
</tbody> */}
</table>

      </div>
       
      </div>
      <hr />
      <div className="end">
          <p>Total Amount: ₹ 0.00</p>
          <p>Balance: ₹ 0.00</p>
      </div>
    </div>
  </>
    )
}

export default PaymentOut