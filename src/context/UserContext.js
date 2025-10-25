/**
 * User Context - Manages user authentication and profile
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * Licensed under the MIT License
 */

import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    uid: 'demo-user',
    email: 'demo@quitquest.app',
    heroName: 'Brave Hero',
    quitDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    cigarettesPerDay: 20,
    packCost: 10,
    isPro: false,
  });

  const signOut = async () => {
    console.log('Sign out');
  };

  const signIn = async (email, password) => {
    console.log('Sign in', email);
  };

  const updateProfile = async (updates) => {
    setUserData({ ...userData, ...updates });
  };

  return (
    <UserContext.Provider value={{ userData, signOut, signIn, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};
