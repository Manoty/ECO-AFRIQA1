import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TeamCard from './TeamCard';
import TestimonialsData from './json/TestimonialsData.json'
import TeamsData from './json/TeamsData.json'

function Team() {
  //Cards To Show per Page
  const CardsNumber = 3;

  return (
    <section id="team" className="block mt-[60px] lg:mt-[100px]">
      <div className='TeamWrapper mx-[40px]'>
        <div className='TeamHeading'>
          <h3 className="DesktopTitle hidden lg:block text-[#008000] text-[45px] font-[700] text-center font-inter my-0">Our Team</h3>
          <h3 className="MobileTitle block lg:hidden text-[#008000] text-[30px] font-[900] text-center font-inter my-0">Meet Our Team</h3>
        </div>

      {/*Team cards */}
      <div className='TeamCards mt-[30px] lg:mt-[20px] mx-auto grid grid-cols-1  lg:grid-cols-3 lg:gap-x-[100px] gap-y-[40px]'>
          {TeamsData.slice(0, CardsNumber).map((TeamsData) => (
            <TeamCard name={TeamsData.name} role={TeamsData.role} img={TeamsData.img} LinkedIn={TeamsData.LinkedIn}/>
          )
      )}
      </div>

      {/*View All Button*/}
      <Link to="/details" className='ViewAll block mt-[30px] lg:mt-[40px] bg-[#008000] w-fit mx-auto rounded-[10px] lg:rounded-[15px]'>
        <p className='text-center text-[12px] lg:text-[25px] text-[#FFFFFF] font-[700] font-inter my-0 py-[12px] px-[40px] '>View All</p>
      </Link>
       
      </div> {/*Teams Wrapper */}
    </section> //Team
  );
}

export default Team;
