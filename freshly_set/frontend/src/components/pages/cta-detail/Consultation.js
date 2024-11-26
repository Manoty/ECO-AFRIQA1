import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import FreshlyFooter from "../../footer/FreshlyFooter";
import ConsultantCard from "./ConsultantCard";
import Nav from "../../Nav/Navbar";
import { ConsultationContext } from "../../context/ConsultationsContext";

function Consultation() {

const [consultants, setConsultants] = useState([]);

//Fetch consaltations from the django API

useEffect(() => {
    fetch("http://127.0.0.1:8000/api/consultants/")
    .then((response) => response.json())
    .then((data) => setConsultants(data))
    .catch((error) => console.error("Error fetching consultants:", error));
},[]);

    return (
        <div className="Consultations">
            <Nav /> {/*The Navbar */}
            <div className="InnerContents mt-[100px] ">
                <div className="Top Contents block lg:flex justify-end relative">
                    <div className="PageHeroPicture block lg:w-[40%]">
                        <div className="ConsultantHero absolute z-20 left-[100px] top-[50px] lg:top-[190px] w-[168px]  lg:w-[353px]">
                            <img src="/static/media/consultant1.png" alt="Consultant" className="w-[100%]" />
                        </div>
                        <div className="BottomTriangle relative float-right lg:float-none top-[8px] lg:top-[40px] lg:right-0 lg:-left-[40px] z-10 w-[340px] lg:w-[743px] transform transition-transform duration-500 scale-x-[-1] lg:scale-x-[1]">
                            <img src="/static/media/consultantEllipse.png" alt="" className="w-[100%]" />
                        </div>

                    </div> {/*Page Hero Picture ands here  */}

                    <div className="PageHeroContents block lg:w-[60%] clear-both">
                        <div className="Title pt-[20px] lg:pt-0 lg:mt-[200px] ">
                            <p className="text-start font-inter font-[700] lg:px-[80px] mx-[20px] text-[16px] lg:text-[40px] text-[#008000]">Get Your Farm Problems Fixed By Our Great Consultants Across Kenya</p>
                        </div>

                        {/*Consultants Button */}
                        <div className="flex justify-start lg:justify-center mx-[20px] lg:mx-0 mt-[20px] lg:mt-[60px] ">
                            <Link to="/" className="ConsultantsButton bg-[#008000] rounded-[6px] lg:rounded-[10px] cursor-pointer active:scale-90 transition-all duration-100 ease-out">
                                <p className="text-center font-inter font-[700] my-0 px-[20px] lg:px-[28px] py-[10px] lg:py-[20px] text-[16px] lg:text-[30px] text-white">See Consultants</p>
                            </Link>
                        </div>

                    </div> {/*Page Hero contents Ends Here */}

                </div> {/*Top Contents Ends Here */}



                {/*Display consultants dynamically */}
<div className="AllCards grid grid-cols-2 md:grid-cols-3 gap-[14px] lg:gap-[60px] mt-[40px] lg:mt-[100px] mx-[18px] lg:mx-[20px]">
    {consultants.slice(0, 9).map((consultant) => (
        <ConsultantCard 
            key={consultant.id} 
            img={consultant.img} 
            name={consultant.name} 
            field={consultant.field} 
            description={consultant.description} 
            rate={consultant.rate} 
        />
    ))}
</div>
{/*All cards Ends Here */}
            </div> {/*InnerContents Ends Here */}

            {/*Main Footer */}
            <div className="PageFooter lg:mt-[30px]">
                <FreshlyFooter />
            </div>
            
        </div> //Consultations Page ends here
  )  
};

export default Consultation