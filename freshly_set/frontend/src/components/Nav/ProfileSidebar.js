import React from 'react';

function ProfileSidebar({ setSelectedSection }) {
  return (
    <div className="SideNavbar hidden lg:flex top-0  h-[100%] pt-[13px] ">
      <ul className="fixed flex-col h-full justify-between  bg-gradient-to-r from-[#008000]  to-[#001A00] via-[#008000] w-[235.64px] pb-[42.7px]">
        {/*General Sections */}
        <div className='GeneralSections mt-[20px]'>
          {/*General Header */}
          <li className="font-inter text-white text-[20px] font-[900]">GENERAL </li>
        
          {/*Account Information */}
          <div className='AccountInformation mt-[12px]'>
            <li className="font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('Account Information')}>Account Information
            </li>
          </div>

          {/*Payment Information */}
          <div className='PaymentInformation mt-[12px]'>
            <li className="font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('Payment Information')}>Payment Information
            </li>
          </div>

          {/*Order History */}
          <div className='OrderHistory mt-[12px]'>
            <li className="font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('OrderHistory')}>Order History
            </li>
          </div>

          {/*Quotatation History */}
          <div className='QuotationHistory mt-[12px]'>
            <li className="font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('QuotationHistory')}>Quotation History
            </li>
          </div>

          {/*Verified Farmers */}
          <div className='VerifiedFarmers mt-[12px]'>
            <li className="font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('VerifiedFarmers')}>Verified Farmers
            </li>
          </div>

          {/*Transporter */}
          <div className='Transporters mt-[12px]'>
            <li className="font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('Transporters')}>Transporters
            </li>
          </div>
        </div>  {/*General Sections */}

        {/*Support Pages */}
        <div className='SupportPages mt-[20px]'>
          {/*Suport Header */}
          <li className="font-inter text-white text-[20px] font-[900]">SUPPORT </li>
        
          {/*Help */}
          <div className='Help mt-[12px]'>
            <li className="font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('Help')}>Help
            </li>
          </div>

          {/*Privacy Policy */}
          <div className='PrivacyPolicy mt-[12px]'>
            <li className="font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('Privacy Policy')}>Privacy Policy
            </li>
          </div>

          {/*Terms & Conditions */}
          <div className='TermsAndConditions mt-[12px]'>
            <li className="font-inter font-[700] bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('Terms and Conditions')}>Terms & Conditions
            </li>
          </div>
        </div> {/*Support Pages */}

        {/*Log Out */}
          <div className='Logout mt-[14px]'>
            <li className="font-inter bg-gradient-to-b bg-clip-text text-transparent from-[#FFFFFF80] hover:from-[#FFFFFF] to-[#99999980] hover:to-[#999999] font-[900] transition-all duration-500 ease-in-out text-[20px] cursor-pointer"
              onClick={() => setSelectedSection('Logout')}>LOGOUT
            </li>
          </div>    
      </ul>
    </div>
  );
}

export default ProfileSidebar;
