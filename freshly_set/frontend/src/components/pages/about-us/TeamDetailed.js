import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Navbar';
import TeamCard from './TeamCard';
import TeamsData from './json/TeamsData.json'
import TeamFinance from './json/TeamFinance.json'
import TeamTech from './json/TeamTech.json'
import TeamSales from './json/TeamSales.json'


function TeamDetailed() {
  //Number of Team Member per each category
  const ExecutiveTeam = 3;
  const FinanceTeam = 2;
  const TechTeam = 9;
  const SalesTeam = 1;

  return (
    <div className='TeamDetailed'>
      {/*Navbar */}
      <div className=''>
        <Nav />
      </div>

      <div className="InnerContents block mx-[8px] lg:mx-[40px] pb-[80px] mt-[150px] lg:mt-[200px]">
        {/*Back Button */}
        <div className="BackButton w-fit -mx-[6px]" >
          <Link to="/about-us" >
              <div className="ButtonWrapper w-[40px] lg:w-[61px] h-[31px] lg:h-[47px] cursor-pointer">
                  <img src="/static/media/image10.png"  alt="BackButton" className="w-full h-full"/>
              </div>
          </Link>
        </div>

        {/*Executive Team */}
        <div className='ExecutiveTeamWrapper mt-[20px] lg:mt-[40px]'>
          {/*Details */}
          <div className='ExecutiveTeamDetails ml-[16px] lg:ml-[60px] mr-[20px] lg:mr-[210px]'>
            <div className='Heading'>
              <h3 className='text-start text-[25px] lg:text-[45px] text-[#008000] font-inter font-[900] my-0'>EXECUTIVE TEAM</h3>
            </div>
            <div className='Descriptions mt-[8px] lg:mt-[20px]'>
              <p className='text-start text-[14px] lg:text-[20px] text-[#525560] font-josefin font-[700] my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            </div>
            <div className='Descriptions mt-[12px] lg:mt-[30px]'>
              <p className='text-start text-[14px] lg:text-[20px] text-[#525560] font-josefin font-[700] my-0'>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
            </div>
          </div>
          {/*Executive Team Cards */}
          <div className='ExecutiveWrapper mt-[12px] lg:mt-[60px] lg:-mx-[40px]'>
            <div className='TeamCards  mx-auto grid grid-cols-2  lg:grid-cols-3 lg:gap-x-[100px] gap-y-[40px]'>
              {TeamsData.slice(0, ExecutiveTeam).map((TeamsData) => (
                <TeamCard name={TeamsData.name} role={TeamsData.role} img={TeamsData.img} LinkedIn={TeamsData.LinkedIn}/>
                  )
                )}
            </div>
          </div>
        </div> {/*Executive Team */}

        {/*Finance Team */}
        <div className='FinanceTeamWrapper mt-[40px] lg:mt-[100px]'>
          {/*Details */}
          <div className='FinanceTeamDetails ml-[20px] lg:ml-[210px] mr-[10px] lg:mr-[60px]'>
            <div className='Heading'>
              <h3 className='text-right text-[25px] lg:text-[45px] text-[#008000] font-inter font-[900] my-0'>FINANCE TEAM</h3>
            </div>
            <div className='Descriptions mt-[8px] lg:mt-[20px]'>
              <p className='text-right text-[14px] lg:text-[20px] text-[#525560] font-josefin font-[700] my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            </div>
            <div className='Descriptions mt-[12px] lg:mt-[30px'>
              <p className='text-right text-[14px] lg:text-[20px] text-[#525560] font-josefin font-[700] my-0'>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
            </div>
          </div>
          {/*Finance Team Cards */}
          <div className='FinanceWrapper mt-[12px] lg:mt-[30px lg:mt-[60px] mx-[8px] lg:mx-[200px]'>
            <div className='TeamCards  mx-auto flex justify-between lg:justify-center lg:gap-x-[100px] gap-y-[40px]'>
              {TeamFinance.slice(0, FinanceTeam).map((TeamFinance) => (
                <TeamCard name={TeamFinance.name} role={TeamFinance.role} img={TeamFinance.img} LinkedIn={TeamFinance.LinkedIn}/>
                  )
                )}
            </div>
          </div>
        </div> {/*Finance Team */}

        {/*Tech Team */}
        <div className='TechTeamWrapper mt-[40px] lg:mt-[100px]'>
          {/*Details */}
          <div className='TechTeamDetails ml-[16px] lg:ml-[60px] mr-[20px] lg:mr-[210px]'>
            <div className='Heading'>
              <h3 className='text-start text-[25px] lg:text-[45px] text-[#008000] font-inter font-[900] my-0'>TECH TEAM</h3>
            </div>
            <div className='Descriptions mt-[8px] lg:mt-[20px]'>
              <p className='text-start text-[14px] lg:text-[20px] text-[#525560] font-josefin font-[700] my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            </div>
            <div className='Descriptions mt-[12px] lg:mt-[30px'>
              <p className='text-start text-[14px] lg:text-[20px] text-[#525560] font-josefin font-[700] my-0'>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
            </div>
          </div>
          {/*Tech Team Cards */}
          <div className='TechWrapper mt-[12px] lg:mt-[30px lg:mt-[60px] lg:-mx-[40px]'>
            <div className='TeamCards  mx-auto grid grid-cols-2  lg:grid-cols-3 lg:gap-x-[100px] gap-y-[40px]'>
              {TeamTech.slice(0, TechTeam).map((TeamTech) => (
                <TeamCard name={TeamTech.name} role={TeamTech.role} img={TeamTech.img} LinkedIn={TeamTech.LinkedIn}/>
                  )
                )}
            </div>
          </div>
        </div> {/*Tech Team */}

        {/*Sales Team */}
        <div className='SalesTeamWrapper mt-[40px] lg:mt-[100px]'>
          {/*Details */}
          <div className='SalesTeamDetails ml-[20px] lg:ml-[210px] mr-[10px] lg:mr-[60px]'>
            <div className='Heading'>
              <h3 className='text-right text-[25px] lg:text-[45px] text-[#008000] font-inter font-[900] my-0'>SALES TEAM</h3>
            </div>
            <div className='Descriptions mt-[8px] lg:mt-[20px]'>
              <p className='text-right text-[14px] lg:text-[20px] text-[#525560] font-josefin font-[700] my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            </div>
            <div className='Descriptions mt-[12px] lg:mt-[30px'>
              <p className='text-right text-[14px] lg:text-[20px] text-[#525560] font-josefin font-[700] my-0'>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
            </div>
          </div>
          {/*Sales Team Cards */}
          <div className='SalesWrapper mt-[12px] lg:mt-[30px lg:mt-[60px] lg:-mx-[40px]'>
            <div className='TeamCards  mx-auto flex justify-center lg:gap-x-[100px] gap-y-[40px]'>
              {TeamSales.slice(0, SalesTeam).map((TeamSales) => (
                <TeamCard name={TeamSales.name} role={TeamSales.role} img={TeamSales.img} LinkedIn={TeamSales.LinkedIn}/>
                  )
                )}
            </div>
          </div>
        </div> {/*Sales Team */}

      </div> {/*Inner Contents */}
    </div> // Team detailed
  );
}

export default TeamDetailed;
