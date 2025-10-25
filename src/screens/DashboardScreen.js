/**
 * Dashboard Screen - Main app screen
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * All Rights Reserved
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackgroundWrapper from '../components/BackgroundWrapper';
import RPGPanel from '../components/RPGPanel';
import { RPG_THEME } from '../theme/rpgTheme';
import { useUser } from '../context/UserContext';
import { useGame } from '../context/GameContext';

const DashboardScreen = () => {
  const { userData } = useUser();
  const { gameData } = useGame();

  const quitDate = new Date(userData.quitDate);
  const now = new Date();
  const daysSmokeFree = Math.floor((now - quitDate) / (1000 * 60 * 60 * 24));

  return (
    <BackgroundWrapper type="dashboard">
      <ScrollView style={styles.container}>
        <Text style={styles.title}>🎮 QuitQuest Dashboard</Text>

        <RPGPanel variant="gold" style={styles.panel}>
          <Text style={styles.panelTitle}>Your Hero</Text>
          <Text style={styles.heroName}>{userData.heroName}</Text>
          <Text style={styles.stat}>Level {gameData.level}</Text>
        </RPGPanel>

        <RPGPanel style={styles.panel}>
          <Text style={styles.panelTitle}>Quest Progress</Text>
          <Text style={styles.stat}>Days Smoke-Free: {daysSmokeFree}</Text>
          <Text style={styles.stat}>Battles Won: {gameData.battlesWon}</Text>
          <Text style={styles.stat}>Current Streak: {gameData.currentStreak} days</Text>
        </RPGPanel>

        <RPGPanel style={styles.panel}>
          <Text style={styles.panelTitle}>Resources</Text>
          <Text style={styles.stat}>⚡ XP: {gameData.experience}</Text>
          <Text style={styles.stat}>💰 Gold: {gameData.gold}</Text>
          <Text style={styles.stat}>❤️ Health: {gameData.health}/{gameData.maxHealth}</Text>
        </RPGPanel>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Welcome to QuitQuest!</Text>
          <Text style={styles.footerSubtext}>Your journey to quit smoking, gamified.</Text>
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RPG_THEME.spacing.md,
  },
  title: {
    fontSize: RPG_THEME.fonts.size.xlarge,
    color: RPG_THEME.colors.gold,
    textAlign: 'center',
    marginBottom: RPG_THEME.spacing.lg,
    fontWeight: 'bold',
  },
  panel: {
    marginBottom: RPG_THEME.spacing.md,
  },
  panelTitle: {
    fontSize: RPG_THEME.fonts.size.large,
    color: RPG_THEME.colors.gold,
    marginBottom: RPG_THEME.spacing.sm,
    fontWeight: 'bold',
  },
  heroName: {
    fontSize: RPG_THEME.fonts.size.medium,
    color: RPG_THEME.colors.white,
    marginBottom: RPG_THEME.spacing.xs,
  },
  stat: {
    fontSize: RPG_THEME.fonts.size.medium,
    color: RPG_THEME.colors.white,
    marginBottom: RPG_THEME.spacing.xs,
  },
  footer: {
    marginTop: RPG_THEME.spacing.xl,
    marginBottom: RPG_THEME.spacing.xl,
    alignItems: 'center',
  },
  footerText: {
    fontSize: RPG_THEME.fonts.size.large,
    color: RPG_THEME.colors.gold,
    fontWeight: 'bold',
  },
  footerSubtext: {
    fontSize: RPG_THEME.fonts.size.small,
    color: RPG_THEME.colors.lightGray,
    marginTop: RPG_THEME.spacing.xs,
  },
});

export default DashboardScreen;
