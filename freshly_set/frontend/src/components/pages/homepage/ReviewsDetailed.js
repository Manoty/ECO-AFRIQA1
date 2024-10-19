import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Navbar';
import ReviewsDetailedCard from './ReviewsDetailedCard';
import ReviewsDetailedData from './json/ReviewsDetailedData.json'

function ReviewsDetailed() {
  // Number of Reviewers to display per page
  const ReviewersNumber = 10;

  return (
    <div className="ReviewersDetailed">
      <div className='The Navbar'>
        <Nav />
      </div>

      {/*InnerWrapper */}
      <div className='InnerWrapper mx-[6px] lg:mx-[20px] mt-[150px] lg:mt-[200px] lg:pb-[50px]'>
        {/*Back Button */}
        
          <div className="BackButton block w-[61px] h-[47px]">   
            <Link to="/">
              <img src="/static/media/image10.png" alt="Return back" className="w-full h-full" />
            </Link>
          </div>

        {/*The Page Title */}
        <div className='ReviewersTitle'>
          <h4 className="text-[#008000] lg:text-[35px] text-center font-[700] font-inter my-0">Our Reviews</h4>
        </div>

        {/* Reviwers Cards */}
        <div className='ReviewersCards lg:mx-[90px]'>
          {ReviewsDetailedData.slice(0, ReviewersNumber).map((ReviewsDetailedData) =>
          <ReviewsDetailedCard  img={ReviewsDetailedData.img} name={ReviewsDetailedData.name} role={ReviewsDetailedData.role} reviews={ReviewsDetailedData.reviews} ratings={ReviewsDetailedData.ratings}/>
          )}
        </div>  {/* Reviwers Cards */}

        {/* Back Button */}
        <div className='hidden lg:block lg:mt-[80px]'>
          <Link to="/">
            <button className="bg-[#008000] text-white py-[10px] px-[50px] border-none outline-none lg:text-[25px] font-inter font-[900] rounded-[11px] cursor-pointer"> BACK</button>
          </Link>
        </div>
        
      </div> {/*InnerWrapper */}
    </div> //ReviewerDetails
    
  );
}

export default ReviewsDetailed;