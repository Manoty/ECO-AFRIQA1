// context/ProfileContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the ProfileContext
export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFarmer, setIsFarmer] = useState(false);
    const [selectedSection, setSelectedSection] = useState('Account');

    const [service, setService] = useState(false);

    const fetchProfile = async () => {
        const token = localStorage.getItem('accessToken');

        try {
            setLoading(true);
            const response = await axios.get(`${apiUrl}profile/`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            setProfile(response.data);
            console.log("Profile Data", response.data)

            if(response.data.is_farmer === true){
                setIsFarmer(true)
            }else{
                console.log("No Farmer profile exists")
            }
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
            console.log("error", err.response.data)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <ProfileContext.Provider value={{ profile, loading, error, fetchProfile, isFarmer, selectedSection, setSelectedSection, service, setService }}>
            {children}
        </ProfileContext.Provider>
    );
};
