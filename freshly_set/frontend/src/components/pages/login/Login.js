import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import Nav from '../../Nav/Navbar';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',  
    password: '',
  });
  const [error, setError] = useState("")
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // const loginData = {
    //   email: email,
    //   password: password,
    // };

    try {
      const response = await axios.post('http://localhost:8000/freshlyapp/token/', formData);
      const { access, refresh } = response.data;

      // Save tokens in localStorage or cookies
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // Redirect user or update UI based on successful login
      console.log('Login successful');
      console.log('Login successful', access);
      navigate('/');  // Redirect to the homepage after logout


      // Redirect or update UI here
    }
   catch (error) {
    console.error('Login failed:', error.response);
    setError('Invalid username or password');
  }
};
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState('');




  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        const payload = {
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://localhost:8000/freshlyapp/login/', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // Ensures cookies and authentication tokens are handled
            });

            if (response.status === 200) {
                // Clear errors and redirect user upon successful login
                setErrors({});
                alert('Login successful!');
                console.log("Login Successful");
                // Redirect to dashboard or some other page if needed
            }
        } catch (error) {
          if (error.response && error.response.status === 400) {
            if (error.response.data) {
                setBackendErrors(error.response.data); // Display specific error from backend
            } else {
                setBackendErrors('Login failed. Please check your credentials.');
            }
        } else {
            setBackendErrors('An error occurred during login. Please try again later.');
        }
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) errors.email = 'Required';
    if (!formData.password) errors.password = 'Required';
    
    setErrors(errors);

    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

  return (
    <div>
    
    <div className="LoginPage relative">
      {/*Navbar */}
      <div className='Navbar'>
        <Nav />
      </div>

      {/*Main Contents */}
      <div className="MainContent block mt-[100px] pt-[20px] bg-loginSignUp bg-cover bg-no-repeat ">
        <div className='MainContentsWrapper pb-[80px] mx-[270px]'>
          <div className="LoginCard block mt-[100px] bg-[#F5FAF9] py-[80px] px-[60px] rounded-[43px]">
            <div className='PageHeading mt-[20px]'>
               <h1 className='text-center text-black font-inter font-[700] text-[28px] my-0'>Login to Your Account</h1>
            </div>

            {/*Login Form */}
            <div className='LogInForm flex justify-center'>
              <form onSubmit={handleLogin}>
                {/*Your Email */}
                <div className='YourEmail block mt-[20px] rounded-[7px] bg-white overflow-hidden object-fill px-[20px] shadow-md shadow-[#00000040]'>
                  <input type="text" name='username' value={formData.username} onChange={handleChange}required placeholder='Your Email' className="bg-inherit font-[300] w-[100%]  text-[16px] py-[14px] text-black font-inter outline-none border-none"/>
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
                  <div className="toggle-password py-[6px] hidden lg:flex" onClick={handlePasswordToggle}>
                    {passwordToggle ? (<AiFillEyeInvisible className="text-black h-[33px] w-[45px]" />) : <BiShow className="text-black h-[33px] w-[45px]"/>}
                  </div>
                </div> {/*Password Field */}

                {/*RememberMe Field */}
                <div className='RememberMeField mt-[16px] flex justify-start'>
                  <input className='block w-[20px] h-[20px] mx-[10px]'
                    type="checkbox"
                    name="remember"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      setFormData({ ...formData, rememberMe: e.target.checked })
                    }
                  />
                  <label className="remember-me block py-[4px] text-start font-inter font-[600] text-[14px]"> Remember me</label>
                </div> {/*Remember Me field */}
              
                {/*Login Button */}
                <div className="LoginButton block mt-[20px] active:scale-90 transition-all duration-100 ease-out">
                  <button  className="bg-[#008000] w-full cursor-pointer  text-white text-center text-[24px] py-[8px] rounded-[11px] font-inter font-[700] outline-none border-none" type="submit">Login</button>
                </div>
              </form>
            </div> {/*LogInForm */}
            
            {/*Login Alternatives */}
            <div className='LoginAlternatives flex justify-center mt-[10px]'>
              {/*Login with Google */}
              <div className="LoginViaGoogle flex justify-center mx-[10px] space-x-[20px] lg:space-x-[10px] items-center">
                <p className="text-black text-[12px] font-[700] font-inter whitespace-nowrap">Login with google</p>
                <div className='h-[34px] w-[34px] cursor-pointer'>
                    <img src="/static/media/googleIcon.png" alt="Google Image" className="w-full h-full" />
                </div>
              </div> {/*Login with Google */}

              {/*Login with Facebook */}
              <div className='LoginViaFacebook flex justify-center mx-[10px] space-x-[20px] lg:space-x-[10px] items-center'>
                <p className="text-black text-[12px] font-[700] font-inter whitespace-nowrap">Login with facebook</p>
                <div className='w-[34px] h-[30px] cursor-pointer'>
                  <img src="/static/media/facebookIcon.png" alt="Login by Facebook" className="w-full h-full" />
                </div>
              </div> {/*Login with Facebook */}

              {/*Forgot Password */}
              <div className='ForgotPassword block mx-[10px] cursor-pointer'>
                <p className='text-start font-inter font-[700] text-[17px] text-[#434AF6] '>Forgot Password ?</p>
              </div> 
            </div> {/*Login Alternatives */}
          
            {/*Don't Have Account */}
            <div className='HaveNoAccount flex justify-center mt-[10px]'>
                 <p className='text-start font-inter text-[12px] font-[300] my-0'>Don't Have an Account?<span className='mx-[20px] text-[#434AF6] font-[900] text-[16px]'><a className="no-underline" href="/signup">Signup</a></span></p>
            </div>
          </div> {/*Login card */}

        </div> {/*MainContentsWrapper */}
      </div> {/*main Contents */}
    </div> //Login page
    </div>
            
  );
};

export default Login;
