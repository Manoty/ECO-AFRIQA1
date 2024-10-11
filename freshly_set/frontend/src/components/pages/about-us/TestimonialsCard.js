import React, { useState } from 'react'

function TestimonialsCard({img, name, title, details}) {
    // State to manage color changes
    const [isHovered, setIsHovered] = useState({id:false});

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

    return (
        <div className="TestimonialsCard">
            <div className={ `SingleCard ${isHovered[1]?  "bg-[#008000]" : "bg-white"}  h-fit rounded-[8px] lg:rounded-[10.5px] border-[0.35px] border-solid  pb-[6px] pt-[8px] lg:py-[14.83px] px-[6px] lg:px-[11.4px] shadow-gray-500 shadow-md  border-gray-700`}
                onMouseEnter={() => toggleColor(1)}
                onMouseLeave={() => returnColor(1)}
                >
                {/*UserName and Image */}
                <div className="ImageAndName flex justify-start">
                    <div className="UserImage block w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] rounded-[500px] overflow-hidden">
                        <img src={img} alt={name}  className="object-cover w-full h-full"/>
                    </div>
                    <div className="UserName block ml-0.5">
                        <p className={`font-inter font-[900] text-[10px] lg:text-[18px]  my-0 ${isHovered[1] ? "text-white" : "text-black"}`} >{name}</p>
                    </div> 
                </div>   {/*User Image and Name*/}

                {/*Card Title */}
                <div className="CardTitle block my-1">
                    <h3 className={ `font-inter font-[700] text-[12px] m-0 lg:text-[22px] ${isHovered[1] ? "text-white":"text-[#008000]" }`}>{title}</h3>
                </div> {/*card title*/}

                {/*Card Details */}
                <div className="CardDetails">
                    <p className={`font-inter font-[500]  text-[6px] lg:text-[12px] mt-1 text-start mb-0   ${isHovered[1] ? "text-white" : "text-black"}`}>{details}</p>
                </div>
            </div> {/*Single card*/}
           
        </div> //TestimonialsCard
    )
}

export default TestimonialsCard