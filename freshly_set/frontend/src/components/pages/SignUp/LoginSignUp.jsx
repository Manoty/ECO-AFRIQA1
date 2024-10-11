import React, { useState } from 'react';
import { IoEye } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import Nav from '../../Nav/Navbar';
import axios from 'axios';
import { getCsrfToken } from '../../../utils/getCsrfToken';
import { useNavigate } from 'react-router-dom';
const LoginSignUp = () => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const [passwordToggle, setPasswordToggle] = useState(false);
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);
  const [errors, setErrors] = useState({});

  const [backendErrors, setBackendErrors] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };

  const handleConfirmPasswordToggle = () => {
    setConfirmPasswordToggle(!confirmPasswordToggle);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        const payload = {
            username: formData.email,
            email: formData.email,
            password: formData.password,
            first_name: formData.firstName,
            last_name: formData.lastName,
                phone: formData.phone,
                location: formData.location,
                remember_me: formData.rememberMe,
        };

        try {
            const response = await axios.post('http://localhost:8000/register/', payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCsrfToken(),
                },
                withCredentials: true,
            });

            if (response.status === 201) {
                // Clear backend error messages if the signup is successful
                setBackendErrors('');
                alert('Signup successful!');
                console.log("Signup Successful");
                navigate("/profile")
            }
        } catch (error) {
            // Handle different error messages
            if (error.response && error.response.status === 400) {
                if (error.response.error) {
                    setBackendErrors(error.response.error); // Display the specific error from the backend
                } else {
                    setBackendErrors('Signup failed. Please try again.');
                }
            } else {
                setBackendErrors('An error occurred during signup. Please try again later.');
            }
        }
    }
};

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'Required';
    if (!formData.lastName) errors.lastName = 'Required';
    if (!formData.email) errors.email = 'Required';
    if (!formData.phone) errors.phone = 'Required';
    if (!formData.location) errors.location = 'Required';
    if (!formData.password) errors.password = 'Required';
    if (!formData.confirmPassword) errors.confirmPassword = 'Required';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    
    setErrors(errors);
    return Object.keys(errors).length === 0;  // Return true if no errors, false otherwise
  };
  
  return (
    <div className="SignUpPage relative">
      {/*Navbar */}
      <div className='Navbar'>
        <Nav />
      </div>

      {/*Main Contents */}
      <div className="MainContentsflex block mt-[100px] pt-[20px] lg:bg-loginSignUp bg-cover bg-center bg-no-repeat">
        <div className='MainContentsWrapper pb-[30px] lg:pb-[60px] mx-[12px] lg:mx-[270px]'>
          <div className='SignUpCard block lg:flex flex-row-reverse justify-between bg-[#F5FAF9] border-solid lg:border-none border-[0.1px] border-[#0000008F] shadow-lg lg:shadow-none shadow-[#00000040] mt-[20px] lg:mt-[100px] pt-[20px] pb-[30px] lg:pb-[60px] lg:py-[60px] px-[20px] lg:px-[30px] rounded-[24px] lg:rounded-[55px]'>
            
            {/*Right-SignUp Form (Reversed flex on Desktop Version) */}
            <div className='SignUpForm lg:w-[40%]'>
              <div className='FormInputs block mx-auto mt-[20px] lg:mt-0'>
                {/*SignUp */}
                <div className='SignUpTittle block'>
                  <h3 className="text-start text-black text-[21px] font-[700] font-inter my-0">Create Your Profile</h3>
                </div>

                <form className="block" onSubmit={handleSubmit}>
                  {/*First Name */}
                  <div className='Firstname block mt-[20px] rounded-[7px] bg-white overflow-hidden object-fill px-[20px] shadow-md shadow-[#00000040]'>
                    <input type="text" name="firstName" placeholder="First Name" className="bg-inherit font-[300] w-[100%]  text-[16px] py-[14px] text-black font-inter outline-none border-none"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                  </div>

                  {/*Last Name */}
                  <div className='LastName block mt-[20px] rounded-[7px] bg-white overflow-hidden object-fill px-[20px] shadow-md shadow-[#00000040]'>
                    <input type="text" name="lastName" placeholder="Last Name" className="bg-inherit font-[300] w-[100%]  text-[16px] py-[14px] text-black font-inter outline-none border-none"    
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                  </div>

                  {/*Email */}
                  <div className='Email block mt-[20px] rounded-[7px] bg-white overflow-hidden object-fill px-[20px] shadow-md shadow-[#00000040]'>
                    <input type="email" name="email" placeholder="Email" className="bg-inherit font-[300] w-[100%]  text-[16px] py-[14px] text-black font-inter outline-none border-none"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>

                  {/*Phone */}
                  <div className='Phone block mt-[20px] rounded-[7px] bg-white overflow-hidden object-fill px-[20px] shadow-md shadow-[#00000040]'>
                    <input type="tel" name="phone" placeholder="Phone" className="bg-inherit font-[300] w-[100%]  text-[16px] py-[14px] text-black font-inter outline-none border-none"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                  </div>

                  {/*Location */}
                  <div className='Location block mt-[20px] rounded-[7px] bg-white overflow-hidden object-fill px-[20px] shadow-md shadow-[#00000040]'>
                  <input type="text" name="location" placeholder="Location" className="bg-inherit font-[300] w-[100%]  text-[16px] py-[14px] text-black font-inter outline-none border-none"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                    {errors.location && <p className="error">{errors.location}</p>}
                  </div>
                  
                  {/*Password Field 1 */}
                  <div className="password-field mt-[24px] flex justify-between rounded-[7px] bg-white px-[20px] shadow-md shadow-[#00000040]">
                    <input type={passwordToggle ? 'text' : 'password'} name="password" placeholder="New Password" className="bg-white font-[300] text-[16px] py-[14px] w-[80%] text-black font-inter outline-none border-none"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <div className="toggle-password py-[6px] flex" onClick={handlePasswordToggle}>
                      {passwordToggle ? (<AiFillEyeInvisible className="text-black h-[33px] w-[45px]" />) : <IoEye className="text-black h-[33px] w-[45px]" />}
                    </div>
                    {errors.password && <p className="error">{errors.password}</p>}
                  </div>
                  
                  {/*Password Field 2 */}
                  <div className="password-field mt-[24px] flex justify-between rounded-[7px] bg-white px-[20px] shadow-md shadow-[#00000040]">
                    <input type={confirmPasswordToggle ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" className=" bg-white font-[300] text-[16px] py-[14px] w-[80%] text-black font-inter outline-none border-none "
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <div className="toggle-password py-[6px] flex" onClick={handleConfirmPasswordToggle}>
                      {confirmPasswordToggle ? (<AiFillEyeInvisible className="text-black h-[33px] w-[45px]" />) : <IoEye className="text-black h-[33px] w-[45px]" />}
                    </div>
                    
                  </div>
                  {errors.confirmPassword && <p className="error text-center text-[#FF0C1A] text-[14px] font-[700] font-inter">{errors.confirmPassword}</p>}
                  {errors.password && <p className="error text-center text-[#FF0C1A] text-[14px] font-[700] font-inter">{errors.password}</p>}
                 
                  {/*Remember Me Field */}
                  <div className='RememberMe mt-[12px] lg:mt-[16px] flex justify-start'>
                    <input type="checkbox" name="remember" className='block w-[20px] h-[20px] mx-[10px]'
                      checked={formData.rememberMe}
                      onChange={(e) =>
                        setFormData({ ...formData, rememberMe: e.target.checked })
                      }
                    />
                    <label className="remember-me block text-start font-inter font-[600] text-[12px] lg:text-[14px] my-0 py-[5px]"> Remember me </label>
                  </div>

                  {/*SignUp Button */}
                  <div className='SignUpButton block mt-[30px] lg:mt-[20px] active:scale-90 transition-all duration-100 ease-out'>
                    <button className="bg-[#008000] w-full cursor-pointer  text-white text-center text-[24px] py-[8px] rounded-[16px] lg:rounded-[11px] font-inter font-[700] outline-none border-none" type="submit">Sign Up</button>
                  </div>
                </form>
              </div> {/*Form Inputs */}

              {/*Alternative SignUp Methods */}
              <div className='SignUpAlternatives block mx-[50px] lg:mx-auto lg:flex justify-center mt-[30px] lg:mt-[10px]'>
                {/*SignUp with Google */}
                <div className="SignUpViaGoogle flex justify-between lg:justify-center lg:mx-[10px] space-x-[20px] lg:space-x-[10px] items-center">
                  <p className="text-start text-black text-[12px] font-[700] font-inter whitespace-nowrap">sign up with google</p>
                  <div className='h-[34px] w-[34px] cursor-pointer'>
                    <img src="/static/media/googleIcon.png" alt="Google Image" className="w-full h-full" />
                  </div>
                </div>

                {/*SignUp with Facebook */}
                <div className='SignUpViaFacebook flex justify-between lg:justify-center lg:mx-[10px] space-x-[20px] lg:space-x-[10px] items-center'>
                  <p className="text-start text-black text-[12px] font-[700] font-inter whitespace-nowrap">sign up with facebook</p>
                  <div className='w-[34px] h-[30px] cursor-pointer'>
                    <img src="/static/media/facebookIcon.png" alt="Login by Facebook" className="w-full h-full" />
                  </div>
                </div> 
              </div>  {/*Alternative SignUp Methods */}

              {/*Already Have an Account */}
              <div className='HaveAccount flex justify-center mt-[10px]'>
                <p className='text-start font-inter text-[12px] font-[300] my-0'>Already Have an Account ?<span className='mx-[20px] text-[#097EEB] lg:text-[#434AF6] font-[800] lg:font-[900] text-[16px]'><a className="no-underline" href="/login">Login</a></span></p>
              </div>
            </div>  {/*SignUp Form */}

            {/*Left-SignUp Details (Reversed Flex on Desktop Version) */}
            <div className='SignUpDetails lg:mt-0 mt-[40px] lg:w-[60%] lg:mr-[20px]'>
              <div className='hidden lg:block w-[113px] h-[116px]'>  {/*Only Visible on Desktop Version */}
                <img src="/static/media/logo2.png" alt="Logo" className="h-full w-full" />
              </div>
              <div className='SignUpHeading mt-[20px]'>
                <h3 className="text-start text-black font-inter text-[15px] lg:text-[20px] font-[700] my-0">Sign Up with our community of farmers</h3>
              </div>
              <div className='TextBlock mt-[14px] lg:mt-[20px]'>
                <p className='text-start text-[#525560] text-[14px] font-josefin font-[400] my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
              </div>
              <div className='TextBlock mt-[12px] lg:mt-[16px]'>
                <p className='text-start text-[#525560] text-[14px] font-josefin font-[400] my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
              </div>
            </div>  {/*SignUp Details */}
          </div> {/*SignUp Card */}

        </div>  {/*main Contents Wrapper */}     
      </div> {/*Main Contents */}
    </div> //SignUp Page
  );
};

export default LoginSignUp;
