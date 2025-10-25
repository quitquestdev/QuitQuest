/**
 * Game Context - Manages game state and progression
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * All Rights Reserved
 */

import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children, onAchievementUnlocked }) => {
  const [gameData, setGameData] = useState({
    level: 5,
    experience: 1250,
    gold: 500,
    health: 100,
    maxHealth: 100,
    battlesWon: 15,
    currentStreak: 30,
    inventory: [],
    achievements: [],
  });

  const battleCraving = async () => {
    console.log('Battle craving');
    setGameData({
      ...gameData,
      battlesWon: gameData.battlesWon + 1,
      experience: gameData.experience + 100,
      gold: gameData.gold + 50,
    });
  };

  return (
    <GameContext.Provider value={{ gameData, battleCraving }}>
      {children}
    </GameContext.Provider>
  );
};
