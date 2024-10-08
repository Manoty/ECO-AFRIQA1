// context/ProfileContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the ProfileContext
export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {
        const token = localStorage.getItem('accessToken');

        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8000/profile/', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            setProfile(response.data);
            console.log("Profile Data", response.data)
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <ProfileContext.Provider value={{ profile, loading, error, fetchProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
