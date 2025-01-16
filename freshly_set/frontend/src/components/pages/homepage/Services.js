import React from 'react'

function Services() {
  return (
    <section id="services" className="OurServices mt-[80px] lg:mt-[100px] ">
        <div className='OurServicesWrapper mx-[20px] lg:mx-[40px]'>
            {/*Services Heading */}   
            <div className="ServicesHeading">
                <h3 className="text-center text-[#008000] text-[35px] lg:text-[45px] font-[700] font-inter my-0">Our Services</h3>
            </div>

            {/* Services cards */}
            <div className="ServicesCards mt-[40px] grid gap-[30px] lg:gap-[50px] grid-cols-2 lg:grid-cols-3">
                {/*Installation */}
                <div className="Installation block bg-services-homepage-installation bg-no-repeat bg-center bg-cover rounded-[28px] lg:rounded-[60px]">
                    <div className='OuterWrapper my-[10px] lg:my-[70px]'>
                        <div className="InstallationWrapper mt-[130px] lg:mt-[410px] p-[2px] mx-[6px] lg:mx-[20px]  bg-[#0000007D] lg:bg-transparent rounded-[8px] ">
                            {/*ServiceHeading */}
                            <div className="ServiceHeading ml-[4px] lg:ml-[20px] ">
                                <p className='text-start text-white text-[14px] lg:text-[40px] font-[700] font-inter my-0'>Installations</p>
                            </div>
                            {/*ServiceDetails */}
                            <div className='ServiceDetails ml-[4px] lg:ml-[20px] mt-[10px] lg:mt-[24px]'>
                                <p className="text-start text-white text-[8px] lg:text-[16px] font-[600] font-josefin my-0">Transform your outdoor spaces with our expert garden installations. From designing lush landscapes to setting up efficient irrigation systems, we make sustainable farming easy and beautiful.</p>
                            </div>
                        </div> {/*Installation Wrapper */}
                    </div> {/*Outer Wrapper */}
                </div> {/*Installation Card */}
                
                {/*Consultation */}
                <div className="Consultation bg-services-homepage-consultation bg-no-repeat bg-center bg-cover rounded-[28px] lg:rounded-[60px] ">
                    <div className='OuterWrapper my-[10px] lg:my-[70px]'>
                        <div className="ConsultationWrapper mt-[130px] lg:mt-[410px] mx-[6px] lg:mx-[20px] p-[2px] bg-[#0000007D] lg:bg-transparent rounded-[8px]  ">
                            {/*ServiceHeading */}
                            <div className="ServiceHeading ml-[4px] lg:ml-[20px] ">
                                <p className='text-start text-white text-[14px] lg:text-[40px] font-[700] font-inter my-0'>Consultations</p>
                            </div>
                            {/*ServiceDetails */}
                            <div className='ServiceDetails ml-[4px] lg:ml-[20px] mt-[10px] lg:mt-[24px]'>
                                <p className="text-start text-white text-[8px] lg:text-[16px] font-[600] font-josefin my-0">Get professional advice tailored to your farming and gardening needs. Whether you're starting a new project or optimizing an existing one, our experts are here to guide you every step of the way.</p>
                            </div>
                        </div> {/*Consultation Wrapper */}
                    </div> {/*Outer Wrapper */}
                </div> {/*Consultation Card */}

                {/*Garden Eqipment */}
                <div className="GardenEquipment bg-services-homepage-gardenEquip bg-no-repeat bg-center bg-cover rounded-[28px] lg:rounded-[60px]">
                    <div className='OuterWrapper my-[18px] lg:my-[105px]'>
                        <div className="InstallationWrapper mt-[132px] lg:mt-[365px] mx-[6px] lg:mx-[20px] p-[2px] bg-[#0000007D] lg:bg-transparent rounded-[8px] ">
                            {/*ServiceHeading */}
                            <div className="ServiceHeading ml-[4px] lg:ml-[20px] ">
                                <p className='text-start text-white text-[14px] lg:text-[40px] font-[700] font-inter my-0'>Gardening Equipment</p>
                            </div>
                            {/*ServiceDetails */}
                            <div className='ServiceDetails ml-[4px] lg:ml-[20px] mt-[10px] lg:mt-[24px]'>
                                <p className="text-start text-white text-[8px] lg:text-[16px] font-[600] font-josefin my-0">Get access to top-quality gardening tools designed for durability and efficiency. From basic hand tools to advanced farming equipment, we've got everything you need to nurture your plants.</p>
                            </div>
                        </div> {/*Installation Wrapper */}
                    </div> {/*Outer Wrapper */}
                </div> {/*GardenEquipment Card */}

                {/*Garden Eqipment (Only Visible on Mobile Devices) */}
                <div className="GardenEquipment block lg:hidden bg-services-homepage-gardenEquip bg-no-repeat bg-center bg-cover rounded-[28px] lg:rounded-[60px] ">
                    <div className='OuterWrapper my-[18px] lg:my-[105px]'>
                        <div className="InstallationWrapper mt-[132px] lg:mt-[365px] mx-[6px] lg:mx-[20px] p-[2px] bg-[#0000007D] lg:bg-transparent rounded-[8px] ">
                            {/*ServiceHeading */}
                            <div className="ServiceHeading ml-[4px] lg:ml-[20px] ">
                                <p className='text-start text-white text-[14px] lg:text-[40px] font-[700] font-inter my-0'>Gardening Equipment</p>
                            </div>
                            {/*ServiceDetails */}
                            <div className='ServiceDetails ml-[4px] lg:ml-[20px] mt-[10px] lg:mt-[24px]'>
                                <p className="text-start text-white text-[8px] lg:text-[16px] font-[600] font-josefin my-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                            </div>
                        </div> {/*Installation Wrapper */}
                    </div> {/*Outer Wrapper */}
                </div> {/*GardenEquipment Card */}
            </div>  {/*Services Cards */}
              
        </div> {/*Our Services Wrapper */}
    </section> //Our Services
  )
}

export default Services