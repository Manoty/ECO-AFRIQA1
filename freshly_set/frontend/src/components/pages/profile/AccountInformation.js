import React, { useContext, useEffect, useState } from 'react';
import { BiSolidEdit } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { ProfileContext } from '../../context/ProfileContext';
import axios from "axios";
import { debounce } from "lodash";
import config from '../../../config';

function AccountInformation() {
    const { profile, loading, error } = useContext(ProfileContext);
    const [isUpdating, setIsUpdating] = useState(false);
    const { fetchProfile } = useContext(ProfileContext);
    const [fields, setFields] = useState({
        firstName: profile?.first_name,
        lastName: profile?.last_name,
        email:profile?.email,
        phone:profile?.profile.phone,
        location:profile?.profile.location
    });
    const apiUrl = config.API_URL;

    
    // State to track which field is being edited
    const [editingField, setEditingField] = useState(null); // 'firstName' or 'lastName' or null

    // General handler for setting a field to edit mode
    const handleEditClick = (field) => {
        setEditingField(field); // Set the field currently being edited
    };


    const updateProfile = async () => {
        if (isUpdating) return;  // Prevents multiple calls if already updating
        setIsUpdating(true);  // Sets flag to indicate the update is in progress
      
        try {
          const accessToken = localStorage.getItem('accessToken');
          const response = await axios.put(
            `${apiUrl}profile/update/`,
            {
              first_name: fields.firstName,
              last_name: fields.lastName,
              email: fields.email,
              profile: {
                phone: fields.phone,
                location: fields.location,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          console.log('Profile updated:', response.data);
          handleSaveClick();
        } catch (error) {
          console.error('Error updating profile:', error);
          // Additional error handling if rate limit exceeded
          if (error.response && error.response.status === 429) {
            console.warn('Rate limit exceeded, please wait and try again');
          }
        } finally {
          setIsUpdating(false);  // Reset flag after update attempt
        }
      };

      const debouncedUpdateProfile = debounce(updateProfile, 2000); // Delay by 1 second


    // General handler for saving a field
    const handleSaveClick = () => {
        updateProfile(); // Call the PUT request function

        setEditingField(null); // Exit edit mode
    };

    // General handler for updating field values
    const handleFieldChange = (field, value) => {
        setFields({
            ...fields,
            [field]: value, // Update the specific field dynamically
        });
    };


    useEffect(() => {

        console.log("profile", profile)
    },[loading, profile])

    useEffect(() => {
        fetchProfile()
    },[loading])
    return (
        <div className="flex">
            <div className="block">
                <h2 className="freshlyGreenText text-[22px] font-inter text-start">Account Information</h2>
                <h4 className="text-[#000000]/[50%] text-[15px]">Manage Your Account Information</h4>

                {/* Profile Image */}
                <img className="h-[106.86px] w-[106.86px]" src="/static/media/profileImage.png" alt="Profile" />

                <div className="lg:grid lg:grid-cols-2 gap-x-[106.6px] gap-y-[34.36px]">
                        {/* Reusable Component for Editing */}
                        <EditableField
  label="First Name"
  field="firstName"
  value={fields.firstName}
  editingField={editingField}
  onEditClick={handleEditClick}
  onSaveClick={debouncedUpdateProfile}
  onChange={handleFieldChange}
  type="text"
/>

<EditableField
  label="Last Name"
  field="lastName"
  value={fields.lastName}
  editingField={editingField}
  onEditClick={handleEditClick}
  onSaveClick={debouncedUpdateProfile}
  onChange={handleFieldChange}
  type="text"
/>
                   

                        <EditableField
                            label="Email"
                            field="email"
                            value={fields?.email}
                            type="email"
                            editingField={editingField}
  onEditClick={handleEditClick}
  onSaveClick={debouncedUpdateProfile}
  onChange={handleFieldChange}
                        />

                        <EditableField
                            label="Phone"
                            field="phone"
                            value={fields.phone}
                            type="number"
                            editingField={editingField}
                            onEditClick={handleEditClick}
                            onSaveClick={debouncedUpdateProfile}
                            onChange={handleFieldChange}
                        />

                        <EditableField
                            label="Location"
                            field="location"
                            value={fields.location}
                            type="text"
                            editingField={editingField}
                            onEditClick={handleEditClick}
                            onSaveClick={debouncedUpdateProfile}
                            onChange={handleFieldChange}
                        />

                        <EditableField
                            label="Password"
                            field="password"
                            value="......"
                            type="password"
                            editingField={editingField}
                            onEditClick={handleEditClick}
                            onSaveClick={debouncedUpdateProfile}
                            onChange={handleFieldChange}
                        />
                </div>
            </div>
        </div>
    );
}

// Reusable EditableField component
function EditableField({ label, field, value, editingField, onEditClick, onSaveClick, onChange, type }) {
    return (
        <div className="block">
            <h4 className="freshlyGreenText text-[16.1px] font-inter font-[500]">{label}</h4>
            <div className="flex">
                {/* Display mode */}
                {editingField !== field ? (
                    <div className="flex justify-between items-center py-[16px] bg-white shadow-lg rounded-[8px] pl-[19.71px] pr-[22.11px] w-[340.79px]">
                        <div className="text-[16.1px] font-[700]">{value}</div>
                        <BiSolidEdit onClick={() => onEditClick(field)} className="lg:text-[27px] cursor-pointer" />
                    </div>
                ) : (
                    /* Edit mode */
                    <div className="flex justify-between items-center py-[16px] bg-white shadow-lg rounded-[8px] pl-[19.71px] pr-[22.11px] w-[340.79px]">
                        <input
                            type={type}
                            className="focus:outline-none border-none"
                            value={value}
                            onChange={(e) => onChange(field, e.target.value)} // Update the field value dynamically
                        />
                        <CiCircleCheck onClick={onSaveClick} className="lg:text-[27px] hover:freshlyGreenText transition-all duration-500 ease-in-out cursor-pointer" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default AccountInformation;
