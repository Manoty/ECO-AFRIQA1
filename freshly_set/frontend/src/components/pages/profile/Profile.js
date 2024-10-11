import React, { useContext, useState } from 'react';
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

function Profile() {
  const [selectedSection, setSelectedSection] = useState('Account');

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
