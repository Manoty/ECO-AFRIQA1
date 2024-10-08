import React, { useContext, useEffect, useState } from 'react';
import Nav from '../../Nav/Navbar';
import ProfileSidebar from '../../Nav/ProfileSidebar';
import AccountInformation from './AccountInformation';
import PaymentInformation from './PaymentInformation';
import OrderHistory from './OrderHistory';
import QuotationHistory from './QuotationHistory';
import VerifiedFarmers from './VerifiedFarmers';
import Transporters from './Transporters';
import Help from './Help';
import PrivacyPolicy from './PrivacyPolicy';
import TermsConditions from './TermsConditions';
import Logout from './Logout';
import axios from 'axios';
import { ProfileContext } from '../../context/ProfileContext';

function Profile() {
  const [selectedSection, setSelectedSection] = useState('Account');
  const [profile, setProfile] = useContext(ProfileContext);


const getUserProfile = async () => {
  const token = localStorage.getItem('accessToken');  // Retrieve the JWT token

  try {
    const response = await axios.get('http://localhost:8000/profile/', {
      headers: {
        'Authorization': `Bearer ${token}`  
      }
    });

    console.log(response.data);  // The profile data
    return response.data;
    setProfile(response.data)
  } catch (error) {
    console.error('Error fetching profile:', error.response);
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized! Please log in again.');
    }
  }
};

useEffect(() => {
  // Fetch profile data on component mount
  const fetchProfile = async () => {
    const data = await getUserProfile();
    setProfile(data);
    console.log("Profile Data", profile)
  };

  fetchProfile();
}, []);


  const renderSection = () => {
    switch (selectedSection) {
      case 'Account':
        return <AccountInformation />;
      
      case 'Payment Information':
        return <PaymentInformation />;
      
      case 'OrderHistory':
        return <OrderHistory />;

      case 'QuotationHistory':
        return <QuotationHistory />;

      case 'VerifiedFarmers':
        return <VerifiedFarmers />;

      case 'Transporters':
        return <Transporters />;
      
      case 'Help':
        return <Help />;

      case 'Privacy Policy':
        return <PrivacyPolicy />;

      case 'Terms and Conditions':
        return <TermsConditions />;

      case 'Logout':
        return <Logout />;
      
      default:
        return <AccountInformation />;
    }
  };

  return (
    <div>
      <Nav />
      <div className="flex mt-[120px]">
        {/* Sidebar */}
        <div className="w-[240px]">
            <ProfileSidebar setSelectedSection={setSelectedSection} />

        </div>

        {/* Main content area */}
        <div className="flex-1 lg:ml-[69.36px] mt-[60px]">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default Profile;
