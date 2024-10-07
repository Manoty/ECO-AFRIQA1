import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import Nav from '../../Nav/Navbar';
import axios from 'axios';

const Login = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    email: '',   
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState("")


  const handleLogin = async (e) => {
    e.preventDefault();
    
    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8000/freshlyapp/token/', loginData);
      const { access, refresh } = response.data;

      // Save tokens in localStorage or cookies
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // Redirect user or update UI based on successful login
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error.response);
      setError('Invalid username or password');
    }
  };

  const [passwordToggle, setPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };

  
  const handleSubmit = async (e) => {
   
  }; 

  const validateForm = () => {
    const errors = {};
  
    if (!formData.email) errors.email = 'Required';
    
    if (!formData.password) errors.password = 'Required';
    setErrors(errors);
  };

  return (
    <div className="LoginPage relative">
      {/*Navbar */}
      <div className='Navbar'>
        <Nav />
      </div>

      {/*Main Contents */}
      <div className="MainContent block mt-[100px] pt-[20px] lg:bg-loginSignUp bg-cover bg-no-repeat ">
        <div className='MainContentsWrapper pb-[80px] mx-[12px] lg:mx-[270px]'>
          <div className="LoginCard block mt-[20px] lg:mt-[100px] lg:bg-[#F5FAF9] pt-[20px] pb-[60px] lg:py-[80px] px-[20px] lg:px-[60px] rounded-[24px] lg:rounded-[43px]">

            {/*CloseButton (Only Visible on Mobile Version) */}
             <Link to="/" className="block lg:hidden">
                    <div className="CloseButton float-right clear-both active:scale-90 transition-all duration-100 ease-out">
                        <img src="/static/media/close.png" alt="Cancel" className="w-[36px]" />
                    </div>    
              </Link>
            <div className='PageHeading clear-both pt-[20px] lg:pt-0'>
               <h1 className='text-center text-black font-inter font-[700] text-[24px] lg:text-[28px] my-0'>Login to Your Account</h1>
            </div>

            {/*Login Form */}
            <div className='LogInForm flex justify-center mt-[20px] lg:mt-0'>
              <form onSubmit={handleLogin}>
                {/*Your Email */}
                <div className='YourEmail block mt-[20px] rounded-[7px] bg-white overflow-hidden object-fill px-[20px] shadow-md shadow-[#00000040]'>
                  <input type="text" name='email' required placeholder='Your Email' className="bg-inherit font-[300] w-[100%]  text-[16px] py-[14px] text-black font-inter outline-none border-none"/>
                </div>

                {/* Password Field*/}
                <div className="password-field mt-[24px] flex justify-between rounded-[7px] bg-white px-[20px] shadow-md shadow-[#00000040]">
                  <input type={passwordToggle ? 'text' : 'password'} className=" bg-white font-[300] text-[16px] py-[14px] w-[80%] text-black font-inter outline-none border-none"
                    name="password"
                    placeholder="New Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <div className="toggle-password py-[6px] flex" onClick={handlePasswordToggle}>
                    {passwordToggle ? (<AiFillEyeInvisible className="text-black h-[33px] w-[45px]" />) : <IoEye className="text-black h-[33px] w-[45px]"/>}
                  </div>
                </div> {/*Password Field */}

                {/*Labels Wrapper */}
                <div className='LabelsWrapper mt-[10px] flex justify-between lg:block'>
                  {/*RememberMe Field */}
                  <div className='RememberMeField lg:mt-[16px] flex justify-start'>
                    <input className='block w-[20px] h-[20px] mx-[10px]'
                      type="checkbox"
                      name="remember"
                      checked={formData.rememberMe}
                      onChange={(e) =>
                        setFormData({ ...formData, rememberMe: e.target.checked })
                      }
                    />
                    <label className="remember-me block text-start font-inter font-[600] text-[12px] lg:text-[14px] my-0 py-[5px]"> Remember me</label>
                  </div> {/*Remember Me field */}

                  {/*Forgot Password (Only Visile on Mobile Devices*/}
                  <div className='ForgotPassword block lg:hidden mx-[10px] cursor-pointer items-center'>
                    <p className='text-start font-inter font-[700] text-[12px] text-[#434AF6] my-0 py-[5px]'>Forgot Password ?</p>
                  </div> 
                </div> {/*Labels Wrapper */}
                
              
                {/*Login Button */}
                <div className="LoginButton block mt-[30px] lg:mt-[20px] active:scale-90 transition-all duration-100 ease-out">
                  <button  className="bg-[#008000] w-full cursor-pointer  text-white text-center text-[24px] py-[8px] rounded-[16px] lg:rounded-[11px] font-inter font-[700] outline-none border-none" type="submit">Login</button>
                </div>
              </form>
            </div> {/*LogInForm */}
            
            {/*Login Alternatives */}
            <div className='LoginAlternatives block mx-[50px] lg:mx-auto lg:flex justify-center mt-[30px] lg:mt-[10px]'>
              
                  {/*Login with Google */}
              <div className="LoginViaGoogle flex justify-between lg:justify-center lg:mx-[10px] space-x-[20px] lg:space-x-[10px] items-center">
                <p className="text-start text-black text-[12px] font-[700] font-inter whitespace-nowrap">Login with google</p>
                <div className='h-[34px] w-[34px] cursor-pointer'>
                    <img src="/static/media/googleIcon.png" alt="Google Image" className="w-full h-full" />
                </div>
              </div> {/*Login with Google */}

              {/*Login with Facebook */}
              <div className='LoginViaFacebook flex justify-between lg:justify-center lg:mx-[10px] space-x-[20px] lg:space-x-[10px] items-center'>
                <p className="text-start text-black text-[12px] font-[700] font-inter whitespace-nowrap">Login with facebook</p>
                <div className='w-[34px] h-[30px] cursor-pointer'>
                  <img src="/static/media/facebookIcon.png" alt="Login by Facebook" className="w-full h-full" />
                </div>
              </div> {/*Login with Facebook */}

              {/*Forgot Password (Only Visile on Desktop Devices*/}
              <div className='ForgotPassword hidden lg:block mx-[10px] cursor-pointer'>
                <p className='text-start font-inter font-[700] text-[17px] text-[#434AF6] '>Forgot Password ?</p>
             
              </div>
              
            </div> {/*Login Alternatives */}
          
            {/*Don't Have Account */}
            <div className='HaveNoAccount flex justify-center mt-[10px]'>
                 <p className='text-start font-inter text-[12px] font-[300] my-0'>Don't Have an Account?<span className='mx-[20px] text-[#097EEB] lg:text-[#434AF6] font-[800] lg:font-[900] text-[16px]'><a className="no-underline" href="/signup">Signup</a></span></p>
            </div>
          </div> {/*Login card */}

        </div> {/*MainContentsWrapper */}
      </div> {/*main Contents */}
    </div> //Login page
            
  );
};

export default Login;