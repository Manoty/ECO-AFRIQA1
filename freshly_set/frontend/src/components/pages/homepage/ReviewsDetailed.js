import React from 'react';
import Nav from '../../Nav/Navbar';

function ReviewsDetailed() {
  return (
    <div className="min-h-screen bg-[#F5FAF9] overflow-x-hidden">
      <Nav />

      <div className="block mt-[150px] lg:mt-[200px]">
      <div className="flex-shrink-0 ml-[5%]">
  <img
    src="/static/media/image10.png"
    alt="image 10"
    className="w-[61px] h-[47px]"
  />
</div>

        <h4 className="text-[#008000] text-[35px] text-center font-inter">Our Reviewers</h4>
        
      </div>

     {/* First Reviewer */}
     
<div className="flex flex-col lg:flex-row items-center justify-center mt-[20px] px-4 lg:px-6">
  {/* Image and Content Container with Border */}
  <div className="relative flex flex-col lg:flex-row items-start space-x-0 lg:space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[345.586px] lg:w-[1222px] h-[158.963px] lg:h-[562px] flex-shrink-0">
    {/* Image */}
    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 order-1 lg:order-none">
      <img
        className="object-cover lg:w-[262px] w-[74.095px] h-[120.192px] lg:h-[425px] lg:rounded-[11px] rounded-[3.1111px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start lg:flex-1 flex-shrink-0 order-2 lg:order-none">
      <p className="absolute text-start top-[0px] left-[108px] lg:left-[382px] w-[187.856px] lg:w-[664.263px] h-[8.774px] lg:h-[31.024px] text-black font-inter text-[12px] lg:text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="absolute top-[35px] h-[92px] lg:h-[320px] text-ellipsis overflow-hidden lg:text-n text-start  lg:top-[87px] left-[106px] lg:left-[384px] w-[166px] lg:w-[460.698px]  mt-2 text-black font-josefin text-[9.5px] lg:text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our
        community garden's harvests."<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
      </p>
      <div className="absolute bottom-[25px] lg:bottom-[88px] left-[105px] lg:left-[374px] w-80.011px lg:w-[282.922px] h-9.846px lg:h-[34.816px] mt-6 text-[#008000] font-josefin text-[8.486px] lg:text-[30px] font-bold leading-[130%]">
        Bean Farmer
      </div>
      <div className="absolute left-[105px] lg:left-[374px] bottom-[0px] mt-2">
      <img className=" h-[15.271px] lg:h-[54px] lg:w-[297px] w-[83.993px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6 order-3 lg:order-none">
      <div className="lg:w-[18px] w-[5.09px] lg:h-[364px] h-[103.941px] flex-shrink-0 lg:rounded-[25px] rounded-[7.07px] bg-[#008000] lg:mr-[20px] mr-[5px]"></div>
    </div>
  </div>
</div>

      {/* Second Reviewer */}

      <div className="flex flex-col lg:flex-row items-center justify-center mt-[20px] px-4 lg:px-6">
  {/* Image and Content Container with Border */}
  <div className="relative flex flex-col lg:flex-row items-start space-x-0 lg:space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[345.586px] lg:w-[1222px] h-[158.963px] lg:h-[562px] flex-shrink-0">
    {/* Image */}
    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 order-1 lg:order-none">
      <img
        className="object-cover lg:w-[262px] w-[74.095px] h-[120.192px] lg:h-[425px] lg:rounded-[11px] rounded-[3.1111px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start lg:flex-1 flex-shrink-0 order-2 lg:order-none">
      <p className="absolute text-start top-[0px] left-[108px] lg:left-[382px] w-[187.856px] lg:w-[664.263px] h-[8.774px] lg:h-[31.024px] text-black font-inter text-[12px] lg:text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="absolute top-[35px] h-[92px] lg:h-[320px] text-ellipsis overflow-hidden lg:text-n text-start  lg:top-[87px] left-[106px] lg:left-[384px] w-[166px] lg:w-[460.698px]  mt-2 text-black font-josefin text-[9.5px] lg:text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our
        community garden's harvests."<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
      </p>
      <div className="absolute bottom-[25px] lg:bottom-[88px] left-[105px] lg:left-[374px] w-80.011px lg:w-[282.922px] h-9.846px lg:h-[34.816px] mt-6 text-[#008000] font-josefin text-[8.486px] lg:text-[30px] font-bold leading-[130%]">
        Bean Farmer
      </div>
      <div className="absolute left-[105px] lg:left-[374px] bottom-[0px] mt-2">
      <img className=" h-[15.271px] lg:h-[54px] lg:w-[297px] w-[83.993px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6 order-3 lg:order-none">
      <div className="lg:w-[18px] w-[5.09px] lg:h-[364px] h-[103.941px] flex-shrink-0 lg:rounded-[25px] rounded-[7.07px] bg-[#008000] lg:mr-[20px] mr-[5px]"></div>
    </div>
  </div>
</div>


      {/* Third Reviewer */}

      <div className="flex flex-col lg:flex-row items-center justify-center mt-[20px] px-4 lg:px-6">
  {/* Image and Content Container with Border */}
  <div className="relative flex flex-col lg:flex-row items-start space-x-0 lg:space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[345.586px] lg:w-[1222px] h-[158.963px] lg:h-[562px] flex-shrink-0">
    {/* Image */}
    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 order-1 lg:order-none">
      <img
        className="object-cover lg:w-[262px] w-[74.095px] h-[120.192px] lg:h-[425px] lg:rounded-[11px] rounded-[3.1111px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start lg:flex-1 flex-shrink-0 order-2 lg:order-none">
      <p className="absolute text-start top-[0px] left-[108px] lg:left-[382px] w-[187.856px] lg:w-[664.263px] h-[8.774px] lg:h-[31.024px] text-black font-inter text-[12px] lg:text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="absolute top-[35px] h-[92px] lg:h-[320px] text-ellipsis overflow-hidden lg:text-n text-start  lg:top-[87px] left-[106px] lg:left-[384px] w-[166px] lg:w-[460.698px]  mt-2 text-black font-josefin text-[9.5px] lg:text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our
        community garden's harvests."<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
      </p>
      <div className="absolute bottom-[25px] lg:bottom-[88px] left-[105px] lg:left-[374px] w-80.011px lg:w-[282.922px] h-9.846px lg:h-[34.816px] mt-6 text-[#008000] font-josefin text-[8.486px] lg:text-[30px] font-bold leading-[130%]">
        Bean Farmer
      </div>
      <div className="absolute left-[105px] lg:left-[374px] bottom-[0px] mt-2">
      <img className=" h-[15.271px] lg:h-[54px] lg:w-[297px] w-[83.993px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6 order-3 lg:order-none">
      <div className="lg:w-[18px] w-[5.09px] lg:h-[364px] h-[103.941px] flex-shrink-0 lg:rounded-[25px] rounded-[7.07px] bg-[#008000] lg:mr-[20px] mr-[5px]"></div>
    </div>
  </div>
</div>

      {/* Fourth Reviwer */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-[20px] px-4 lg:px-6">
  {/* Image and Content Container with Border */}
  <div className="relative flex flex-col lg:flex-row items-start space-x-0 lg:space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[345.586px] lg:w-[1222px] h-[158.963px] lg:h-[562px] flex-shrink-0">
    {/* Image */}
    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 order-1 lg:order-none">
      <img
        className="object-cover lg:w-[262px] w-[74.095px] h-[120.192px] lg:h-[425px] lg:rounded-[11px] rounded-[3.1111px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start lg:flex-1 flex-shrink-0 order-2 lg:order-none">
      <p className="absolute text-start top-[0px] left-[108px] lg:left-[382px] w-[187.856px] lg:w-[664.263px] h-[8.774px] lg:h-[31.024px] text-black font-inter text-[12px] lg:text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="absolute top-[35px] h-[92px] lg:h-[320px] text-ellipsis overflow-hidden lg:text-n text-start  lg:top-[87px] left-[106px] lg:left-[384px] w-[166px] lg:w-[460.698px]  mt-2 text-black font-josefin text-[9.5px] lg:text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our
        community garden's harvests."<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
      </p>
      <div className="absolute bottom-[25px] lg:bottom-[88px] left-[105px] lg:left-[374px] w-80.011px lg:w-[282.922px] h-9.846px lg:h-[34.816px] mt-6 text-[#008000] font-josefin text-[8.486px] lg:text-[30px] font-bold leading-[130%]">
        Bean Farmer
      </div>
      <div className="absolute left-[105px] lg:left-[374px] bottom-[0px] mt-2">
      <img className=" h-[15.271px] lg:h-[54px] lg:w-[297px] w-[83.993px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6 order-3 lg:order-none">
      <div className="lg:w-[18px] w-[5.09px] lg:h-[364px] h-[103.941px] flex-shrink-0 lg:rounded-[25px] rounded-[7.07px] bg-[#008000] lg:mr-[20px] mr-[5px]"></div>
    </div>
  </div>
</div>


      {/* Fith Reviewer */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-[20px] px-4 lg:px-6">
  {/* Image and Content Container with Border */}
  <div className="relative flex flex-col lg:flex-row items-start space-x-0 lg:space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[345.586px] lg:w-[1222px] h-[158.963px] lg:h-[562px] flex-shrink-0">
    {/* Image */}
    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 order-1 lg:order-none">
      <img
        className="object-cover lg:w-[262px] w-[74.095px] h-[120.192px] lg:h-[425px] lg:rounded-[11px] rounded-[3.1111px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start lg:flex-1 flex-shrink-0 order-2 lg:order-none">
      <p className="absolute text-start top-[0px] left-[108px] lg:left-[382px] w-[187.856px] lg:w-[664.263px] h-[8.774px] lg:h-[31.024px] text-black font-inter text-[12px] lg:text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="absolute top-[35px] h-[92px] lg:h-[320px] text-ellipsis overflow-hidden lg:text-n text-start  lg:top-[87px] left-[106px] lg:left-[384px] w-[166px] lg:w-[460.698px]  mt-2 text-black font-josefin text-[9.5px] lg:text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our
        community garden's harvests."<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
      </p>
      <div className="absolute bottom-[25px] lg:bottom-[88px] left-[105px] lg:left-[374px] w-80.011px lg:w-[282.922px] h-9.846px lg:h-[34.816px] mt-6 text-[#008000] font-josefin text-[8.486px] lg:text-[30px] font-bold leading-[130%]">
        Bean Farmer
      </div>
      <div className="absolute left-[105px] lg:left-[374px] bottom-[0px] mt-2">
      <img className=" h-[15.271px] lg:h-[54px] lg:w-[297px] w-[83.993px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6 order-3 lg:order-none">
      <div className="lg:w-[18px] w-[5.09px] lg:h-[364px] h-[103.941px] flex-shrink-0 lg:rounded-[25px] rounded-[7.07px] bg-[#008000] lg:mr-[20px] mr-[5px]"></div>
    </div>
  </div>
</div>

      {/* Sixth Reviewer */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-[20px] px-4 lg:px-6">
  {/* Image and Content Container with Border */}
  <div className="relative flex flex-col lg:flex-row items-start space-x-0 lg:space-x-4 p-6 rounded-[26px] border border-[rgba(0,0,0,0.20)] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[345.586px] lg:w-[1222px] h-[158.963px] lg:h-[562px] flex-shrink-0">
    {/* Image */}
    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 order-1 lg:order-none">
      <img
        className="object-cover lg:w-[262px] w-[74.095px] h-[120.192px] lg:h-[425px] lg:rounded-[11px] rounded-[3.1111px]"
        src="/static/media/image4.jpg"
        alt="Charles Kisika"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-start lg:flex-1 flex-shrink-0 order-2 lg:order-none">
      <p className="absolute text-start top-[0px] left-[108px] lg:left-[382px] w-[187.856px] lg:w-[664.263px] h-[8.774px] lg:h-[31.024px] text-black font-inter text-[12px] lg:text-[29px] font-bold">
        Charles Kisika
      </p>
      <p className="absolute top-[35px] h-[92px] lg:h-[320px] text-ellipsis overflow-hidden lg:text-n text-start  lg:top-[87px] left-[106px] lg:left-[384px] w-[166px] lg:w-[460.698px]  mt-2 text-black font-josefin text-[9.5px] lg:text-[20px] font-semibold leading-[130%]">
        "Freshly Farm's expertise has empowered our local farmers,<br />
        improving the quality and quantity of our
        community garden's harvests."<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
      </p>
      <div className="absolute bottom-[25px] lg:bottom-[88px] left-[105px] lg:left-[374px] w-80.011px lg:w-[282.922px] h-9.846px lg:h-[34.816px] mt-6 text-[#008000] font-josefin text-[8.486px] lg:text-[30px] font-bold leading-[130%]">
        Bean Farmer
      </div>
      <div className="absolute left-[105px] lg:left-[374px] bottom-[0px] mt-2">
      <img className=" h-[15.271px] lg:h-[54px] lg:w-[297px] w-[83.993px]" src="/static/media/image 17.png" alt="image17" />
      </div>
    </div>

    {/* Green Vertical Rectangle */}
    <div className="absolute right-0 top-0 h-full flex items-center justify-end pr-6 order-3 lg:order-none">
      <div className="lg:w-[18px] w-[5.09px] lg:h-[364px] h-[103.941px] flex-shrink-0 lg:rounded-[25px] rounded-[7.07px] bg-[#008000] lg:mr-[20px] mr-[5px]"></div>
    </div>
  </div>
</div>

 {/* Back Button */}
 <div className="flex items-center justify-start mt-[30px] ml-[5%]">
        <button
          className="bg-[#008000] text-white w-[200px] h-[60px] text-[35px] font-inter font-extrabold rounded-[8px]"
        >
          BACK
        </button>
      </div>
      </div>
    
  );
}

export default ReviewsDetailed;