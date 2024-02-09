import React, { useState } from 'react';
import "../Css/styles1.css" 
import { MdOutlineMailOutline } from "react-icons/md"
import { IoLockOpenOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [inputs, setInputs] = useState({});
const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const { email, password } = inputs;
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit} className='Container1'>
          <div>
            <h2 className='heading1'>Login Here</h2>
      <div className = 'inputbox1'>
        <label htmlFor="email" className="hidden">
          Enter your email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={inputs.email || ''}
          onChange={handleChange}
          className="input1"
        />
         <div className='react-icon'>
        <MdOutlineMailOutline/>
        </div>
      </div>
      <div className="inputbox1">
        <label htmlFor="password" className="hidden">
          Enter your password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={inputs.password || ''}
          onChange={handleChange}
          className="input1"
        />
        <div className='react-icon'>
        <IoLockOpenOutline/>
        </div>
      </div>
      <button type="submit" className="button">
        Login
      </button>
      </div>
    </form>
  );
}

export default Login;