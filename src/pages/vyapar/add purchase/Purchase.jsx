import "./Purchase.css"
const Purchase = () => {
  return (
    <>
        <div>
            <div className="top">
                <h2>Purchase</h2>
            </div>
            <div className="section">
                <div className="upper">
                    <div>
                    <select name="cars" id="cars">
              <option value="volvo">Search</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
             <select name="cars" id="cars">
              <option value="volvo">Phone</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Purchase