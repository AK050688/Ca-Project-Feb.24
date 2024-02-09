import React, {useState } from 'react';
import "../Css/styles.css" ;
import "../Css/styles1.css" ;
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { IoLockOpenOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };


  const {fullName, email, companyName, password } = inputs;
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/")
  };
  

  return (
    <form onSubmit={handleSubmit} className='Container'>
        <div>
            <h2 className='heading'>Register Here</h2>
      <div className='inputbox'>
        <label htmlFor="fullName" className="hidden">
          Enter your fullName:
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="fullName"
          value={inputs.fullName || ''}
          onChange={handleChange}
          className="input"
        />
        <div className='react-icon'>
        <FaRegUserCircle/>
        </div>
      </div>
      <div className='inputbox'>
        <label htmlFor="email" className="hidden">
          Enter your email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={inputs.email || ''}
          onChange={handleChange}
          className="input"
        />
        <div className='react-icon'>
        <MdOutlineMailOutline/>
        </div>
      </div>
      <div className='inputbox'>
        <label htmlFor="companyName" className="hidden">
          Enter your companyName:
        </label>
        <input
          type="text"
          name="companyName"
          placeholder="comapnyName"
          value={inputs.companyName || ''}
          onChange={handleChange}
          className="input"
        />
         <div className='react-icon'>
        <CgOrganisation/>
        </div>
      </div>
      <div className='inputbox'>
        <label htmlFor="password" className="hidden">
          Enter your companyName:
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputs.password || ''}
          onChange={handleChange}
          className="input"
        />
         <div className='react-icon'>
        <IoLockOpenOutline/>
        </div>
      </div>
      <button type="submit" className="button">
        Register
      </button>
    </div>
    </form>
  );
}

export default Register;