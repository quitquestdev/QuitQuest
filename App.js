/**
 * QuitQuest - Transform your journey to quit smoking into an epic RPG adventure
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * Licensed under the MIT License
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, LogBox, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { UserProvider } from './src/context/UserContext';
import { GameProvider } from './src/context/GameContext';
import { ThemeProvider } from './src/context/ThemeContext';
import MainNavigator from './src/navigation/MainNavigator';
import LoadingSpinner from './src/components/LoadingSpinner';
import { RPG_THEME } from './src/theme/rpgTheme';
import { initializeServices } from './src/services/initializeServices';
import { AchievementNotification } from './src/components/AchievementNotification';
import AchievementService from './src/services/achievementService';

// Ignore specific warnings
LogBox.ignoreLogs(['AsyncStorage has been extracted']);

const STRIPE_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        await initializeServices();
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize services:', error);
        setIsInitialized(true); // Continue anyway
      }
    };
    init();
  }, []);

  const showNextAchievement = () => {
    const achievement = AchievementService.getNextNotification();
    if (achievement) {
      setCurrentAchievement(achievement);
    }
  };

  const handleNotificationComplete = () => {
    setCurrentAchievement(null);
    AchievementService.notificationComplete();
    
    // Show next achievement if queued
    setTimeout(() => {
      showNextAchievement();
    }, 500);
  };

  if (!isInitialized) {
    return <LoadingSpinner message="Initializing Quest..." />;
  }

  return (
    <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
      <ThemeProvider>
        <UserProvider>
          <GameProvider onAchievementUnlocked={showNextAchievement}>
            <View style={styles.container}>
              <StatusBar style="light" backgroundColor={RPG_THEME.colors.darkBlue} />
              <NavigationContainer>
                <MainNavigator />
              </NavigationContainer>
              
              {currentAchievement && (
                <AchievementNotification
                  achievement={currentAchievement}
                  onComplete={handleNotificationComplete}
                />
              )}
            </View>
          </GameProvider>
        </UserProvider>
      </ThemeProvider>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RPG_THEME.colors.darkBlue,
  },
});