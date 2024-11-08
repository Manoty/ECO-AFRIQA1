import React, { useEffect, useState } from 'react'
import { FaCaretUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from 'axios';

function Verified() {
    //State to manage opening of options
    const [clicked, setClicked] = useState();
    const [query, setQuery] = useState('');
    // const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("Loridge Apartments, Karen, Nairobi, Kenya");
  const [farmSize, setFarmSize] = useState("Acres/Hectares")
    // State to manage color changes on hovering options
    const [isHovered, setIsHovered] = useState({
        1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false
    });

    // Function to toggle the color on mouse enter
    const toggleColor = (id) => {
        setIsHovered((prevState) => ({
          ...prevState,
          [id]: !prevState[id],
        }));
      };

    // Function to toggle the color on mouse leave
    const returnColor = (id) => {
        setIsHovered((!isHovered));
      };

    const toggleOptions = () => {
        setClicked(!clicked)
    };
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSearch = () => {
      setIsLoading(true); // Set loading state to true
      axios.get(`http://localhost:8000/freshlyapp/search?q=${query}`, {
        headers: {
          'X-CSRFToken': csrfToken
        },
        withCredentials: true
      })
      .then(response => {
        setFilteredProducts(response.data);
        setError(null); // Clear error if the request was successful
      })
      .catch(error => {
        console.error('Error searching products :', error);
        setError('An error occurred while searching.'); // Set error message
      })
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
    };


    return (
      <div className="Farmers flex justify-center ">
      <div className="OuterBackground hidden lg:block lg:w-full bg-no-repeat bg-cover h-[1734px] mb-[20px]" >
          <img src="/static/media/verifiedfarmers.png" alt="Verified Fermers" className=" object-cover w-full h-full "/>
      </div>
    <div className="InnerBackground absolute top-[20px] bg-white border-[1px] border-gray-500 shadow-gray-500 shadow-md lg:w-[90%] w-[75%] bg-center rounded-[30px] px-[8px] mx-[6px] ml-[-52px] lg:mx-auto">

          {/*Back button */}
          <Link to="/" className="BackButton flex justify-end  ">
              <img src="/static/media/close.png" alt="" className="m-[10px] lg:m-[6px] w-[30px] lg:w-[50px]"/>
          </Link>
          <div className="MainTitle">
              <p className="lg:text-center text-[16px] lg:text-[40px] font-inter font-[700] text-[#008000] text-start ">Welcome To Freshly Farmers Centre!</p>
          </div>
          <div className="SetOfCards mx-[10px] lg:mx-[240px]  mb-[20px] lg:mb-[100px] "  >
              <div className="DriverNames block lg:flex justify-between">
                  {/*First and Last name */}
                  <div className="Firstname mt-[12px]">
                      <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000] ">First Name</p>
                      <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[2px]">
                          <input className="border-none outline-none font-inter font-[700] text-[16px]" value={firstName} onChange={(e) => setFirstName(e.target.value) } />
                          <img src="/static/media/edit.png" alt="" className=""/>
                      </div>
                  </div>

                  <div className="Lastname mt-[12px]">
                      <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000]">Last Name</p>
                      <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[2px]">
                          <input className="border-none outline-none font-inter font-[700] text-[16px]" value={lastName} onChange={(e) => setLastName(e.target.value) } />
                          <img src="/static/media/edit.png" alt="" className="mx-[4px]"/>
                      </div>
                  </div>
              </div> {/*farmers first and last name Ends Here */}

              <div className="FamersContacts block lg:flex justify-between">
                  {/*phone number and email */}
                  <div className="PhoneNumber mt-[12px]">
                      <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000] ">Phone</p>
                      <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[2px]">
                          <input className="border-none outline-none font-inter font-[700] text-[16px]" value={phone} onChange={(e) => setPhone(e.target.value)} />
                          <img src="/static/media/edit.png" alt="" className=""/>
                      </div>
                  </div>

                  <div className="EmailAddress mt-[12px]">
                      <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000]">Email</p>
                      <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[2px] ">
                          <input className="border-none outline-none font-inter font-[700] text-[16px]" value={email}  onChange={(e) => setEmail(e.target.value) }/>
                          <img src="/static/media/edit.png" alt="" className="mx-[4px]"/>
                      </div>
                  </div>
              </div> {/*Farmer Phone and Email Ends Here */}
              {/*Physical Address */}
              <div className="PhysicalAddress mt-[12px]">
                      <p className="text-start font-inter font-[700] text-[18px] my-0 text-[#008000] ">Address</p>
                      <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[2px]">
                          <input className="border-none outline-none font-inter font-[700] text-[12px] lg:text-[16px] w-[92%]  h-[40px]" value={address} onChange={(e) => setAddress(e.target.value)} />
                          <img src="/static/media/edit.png" alt="" className="mx-[4px] my-auto"/>
                      </div>
              </div>
                    {/*PRODUCTs */}
                    <div className="products block">
                        <p className="font-inter text-start text-[16px] lg:text-[23px] font-[700] text-[#008000] ">Looks like you havent uses our products yet,choose one to continue? ?</p>
                        {/*product Choices */}
                        <div className="ProductChoices flex justify-space justify-between flex-row">
                            <div className="OptionBox block ">
                                <div className="flex justify-end bg-white rounded-[12px] border-gray-700 border-[1px] shadow-md shadow-gray-500 px-[16px]">
                                    <p className="font-inter text-start font-[700] text-[18px] text-[#008000] ">FARMING SYSTEM</p>
                                    <div className='w-[20px] ml-[10px]'>
                                        <FaCaretUp onClick={() => toggleOptions()} className={`w-full h-full cursor-pointer transition-all duration-300 ease-in-out ${clicked? "rotate-180" : ""} `} />
                                    </div>

                                </div>
                                {/*Options (Show when toggled only) */}
                                <div className=' absolute left-auto right-auto w-[270px]  mx-auto'>
                                     <div className={clicked? " bg-white  rounded-[12px] border-gray-700 border-[1px] shadow-md shadow-gray-500 p-[2px] mt-[12px]": "hidden" } >
                                    <div className='mx-[10px] mt-[20px]' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(1)} onMouseLeave={() => returnColor(1)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[1]? "bg-[#008000] text-white" : ""}` } >Traditional</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(2)} onMouseLeave={() => returnColor(2)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[2]? "bg-[#008000] text-white" : ""}` } >Modern</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(3)} onMouseLeave={() => returnColor(3)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[3]? "bg-[#008000] text-white" : ""}` } >Sustainable</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(4)} onMouseLeave={() => returnColor(4)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[4]? "bg-[#008000] text-white" : ""}` } >innovative</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(5)} onMouseLeave={() => returnColor(5)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[5]? "bg-[#008000] text-white" : ""}` } >Modern</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(6)} onMouseLeave={() => returnColor(6)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[6]? "bg-[#008000] text-white" : ""}` } >Traditional</p>
                                    </div>
                                    <div className='mx-[10px] mt-0 mb-[10px]' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(7)} onMouseLeave={() => returnColor(7)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[7]? "bg-[#008000] text-white" : ""}` } >innovative</p>
                                    </div>
                                </div> {/*Set Of Options Ends Here */}
                                </div>

                            </div> {/*Options Box Ends Here */}

                            <div className="garden  block ">
                                <div className="flex justify-end bg-white rounded-[12px] border-gray-700 border-[1px] shadow-md shadow-gray-500 px-[16px]">
                                    <p className="font-inter text-start font-[700] text-[18px] text-[#008000] ">GARDEN SETUP</p>
                                    <div className='w-[20px] ml-[10px]'>
                                        <FaCaretUp onClick={() => toggleOptions()} className={`w-full h-full cursor-pointer transition-all duration-300 ease-in-out ${clicked? "rotate-180" : ""} `} />
                                    </div>

                                </div>
                                {/*Options (Show when toggled only) */}
                                <div className=' absolute left-auto right-auto w-[270px]  mx-auto'>
                                     <div className={clicked? " bg-white  rounded-[12px] border-gray-700 border-[1px] shadow-md shadow-gray-500 p-[2px] mt-[12px]": "hidden" } >
                                    <div className='mx-[10px] mt-[20px]' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(1)} onMouseLeave={() => returnColor(1)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[1]? "bg-[#008000] text-white" : ""}` } >Urban</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(2)} onMouseLeave={() => returnColor(2)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[2]? "bg-[#008000] text-white" : ""}` } >Specialized</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(3)} onMouseLeave={() => returnColor(3)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[3]? "bg-[#008000] text-white" : ""}` } >Traditional</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(4)} onMouseLeave={() => returnColor(4)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[4]? "bg-[#008000] text-white" : ""}` } >Modern</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(5)} onMouseLeave={() => returnColor(5)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[5]? "bg-[#008000] text-white" : ""}` } >Urban</p>
                                    </div>
                                    <div className='mx-[10px] my-0' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(6)} onMouseLeave={() => returnColor(6)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[6]? "bg-[#008000] text-white" : ""}` } >Urban</p>
                                    </div>
                                    <div className='mx-[10px] mt-0 mb-[10px]' onClick={() => toggleOptions()} onMouseEnter={() => toggleColor(7)} onMouseLeave={() => returnColor(7)} >
                                        <p className={`text-[18px] font-inter font-[500] text-start my-0 p-[4px] pl-[10px] rounded-[6px] cursor-pointer ${ isHovered[7]? "bg-[#008000] text-white" : ""}` } >Tuk-Tuk</p>
                                    </div>
                                </div> {/*Set Of Options Ends Here */}
                                </div>

                            </div> {/*Options Box Ends Here */}
                        </div> {/*Pruducts Choices ends here */}
                    </div> {/*Products  */}

                    {/*search section */}
         
         
                    {/* <div className="relative mt-[100px] h-[42.188px] lg:h-[100px] w-[853.653p] flex items-center justify-center border-[#008000] bg-white-100 pb--2"> */}
                   <div> <p className="text-start font-inter lg:mt-28 font-[700] text-16 lg:text-[23px] my-0 text-[#008000] mt-[12px] ">What do you grow/want to grow using our product?</p>
      <div className="flex justify-between items-center  pt-[8px] pr-[32px] lg:w-[653.653px] w-[252px] font-[600] lg:h-[70px] h-[40px] rounded-[20px] my-[29px] border-solid border-[5px] bg-white border-[#008000] mb-[-150px]  shadow-lg">

      
        <input
          type="text"
          className="px-4 text-[11px] lg:text-[30px] text-black/[50%] font-inter font-semibold border-none outline-none mx-[30px] my-[20px] w-[217px] lg:w-auto"
          placeholder="Search For a crop you can pick more than one..."
          value={query}
          onChange={handleInputChange}
        />
        <button 
          onClick={handleSearch}
          className="focus:outline-none"
          aria-label="Search"
        >
          <img 
            className={`lg:h-[48px] h-[20] lg:w-[39px] w-[15px] ${isLoading ? 'opacity-50' : ''}`} 
            src="/static/media/searchIcon.png" 
            alt="Search Icon" 
          />
        </button>
      </div>
      </div>

                    {/*farmsize */}
                    <div className="PhysicalAddress mt-[208px]">
                            <p className="text-start font-inter font-[700] text-16 lg:text-[23px] my-0 text-[#008000] ">What is your farm size</p>
                            <div className="InputBox flex justify-between border-gray-700 shadow-gray-500 shadow-md py-[6px] px-[8px] rounded-[8px] mt-[12px]">
                                <input className="border-none outline-none font-inter font-[500] text-[22px] w-full h-[40px]"  />
                            </div>
                    </div>

                   

                    {/*Button */}
                    <Link to="/verified-success" className="">
                        <button className="SubmitButton cursor-pointer font-inter font-[700] lg:mt-10 mt-4 text-white text-[16px] lg:text-[30px] bg-[#008000] w-full py-[20px] rounded-[12px] px-[20px] my-0 border-none active:scale-90 transition-all duration-100 ease-out">SUBMIT</button>
                    </Link>

                </div> {/*set of Cards ends Here*/}
            </div> {/*Inner Background Ends Here */}
            {/* </div> */}

        </div> //Farmers Ends Here
    );
};

export default Verified