import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../context/ProfileContext';

const NotFarmerModal = ({ role, link }) => {

    const { navigate } = useNavigate()
    const { selectedSection, setSelectedSection} = useContext(ProfileContext);
    const onClose = () => {
        setSelectedSection("Account")
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6">
        <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">Not Registered as a {role}</h2>
        <p className="text-center text-gray-600 mb-6">
          Your profile is currently not registered as a {role}. To join our community of {role}s, please proceed to the registration page.
        </p>
        <div className="flex justify-center">
          <a 
            href={`/${link}`}
            className="px-6 py-2 text-white bg-[#008000] rounded-lg hover:shadow-2xl transition duration-200"
          >
            Register as a {role}
          </a>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default NotFarmerModal;
