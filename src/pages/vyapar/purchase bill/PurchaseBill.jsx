import "./PurchaseBill.css";


const PurchaseBill = () => {
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
            <select name="cars" id="cars">
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
          <div className="paid">
            <div className="box box1">
              <p>Paid</p>
              <h2>0.00</h2>
            </div>
            <div className="plus">+</div>
            <div className="box box1">
              <p>Paid</p>
              <h2>0.00</h2>
            </div>
            <div className="plus">=</div>
            <div className="box box2">
              <p>Paid</p>
              <h2>0.00</h2>
            </div>
           
          
          </div>
        </div>
        <div className="transaction">
        <h3>TRANSACTIONS</h3>
        <div className="bar">
          <div className="search">
        <span>🔍</span>
          
          <input type="text" />
          </div>
          <button><span>+</span>Add Purchase</button>
        </div>
        <div>
        <table>
  <thead>
    <tr>
      <th>Date <span>▼</span></th>
      <th>Invoice No<span>▼</span></th>
      <th>Party Name<span>▼</span></th>
      <th>Party Type<span>▼</span></th>
      <th>Amount<span>▼</span></th>
      <th>Balance Due<span>▼</span></th>
      <th></th>
   
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>

        </div>
         
        </div>
      </div>
    </>
  );
};

export default PurchaseBill;
