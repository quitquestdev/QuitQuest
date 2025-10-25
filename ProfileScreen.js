import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import BackgroundWrapper from '../components/BackgroundWrapper';
import RPGPanel from '../components/RPGPanel';
import PixelButton from '../components/PixelButton';
import { RPG_THEME } from '../theme/rpgTheme';
import { useUser } from '../context/UserContext';
import { useGame } from '../context/GameContext';
import { useNavigation } from '@react-navigation/native';
import { calculateHealthRecovered, calculateMoneySaved } from '../utils/calculations';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { userData, signOut } = useUser();
  const { gameData } = useGame();
  const [showStats, setShowStats] = useState(false);

  const quitDate = new Date(userData.quitDate);
  const now = new Date();
  const daysSmokeFree = Math.floor((now - quitDate) / (1000 * 60 * 60 * 24));
  const hoursSmokeFree = Math.floor((now - quitDate) / (1000 * 60 * 60));
  
  const stats = {
    daysSmokeFree,
    hoursSmokeFree,
    moneySaved: calculateMoneySaved(daysSmokeFree, userData.cigarettesPerDay, userData.packCost),
    healthRecovered: calculateHealthRecovered(daysSmokeFree),
    cigarettesAvoided: daysSmokeFree * userData.cigarettesPerDay,
    level: gameData.level,
    experience: gameData.experience,
    gold: gameData.gold,
    battlesWon: gameData.battlesWon,
    currentStreak: gameData.currentStreak
  };

  const getCharacterIcon = () => {
    if (gameData.level >= 50) return '👑';
    if (gameData.level >= 30) return '🦸';
    if (gameData.level >= 20) return '⚔️';
    if (gameData.level >= 10) return '🛡️';
    return '🗡️';
  };

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Sign Out', 
          style: 'destructive',
          onPress: () => signOut()
        }
      ]
    );
  };

  const handleUpgrade = () => {
    navigation.navigate('Upgrade');
  };

  const handleViewStats = () => {
    navigation.navigate('Stats');
  };

  return (
    <BackgroundWrapper type="profile">
      <ScrollView style={styles.container}>
        {/* Hero Profile */}
        <RPGPanel variant="gold" style={styles.heroPanel}>
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Cigarettes Avoided</Text>
            <Text style={styles.statValue}>{stats.cigarettesAvoided}</Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Health Recovery</Text>
            <Text style={styles.statValue}>{stats.healthRecovered}%</Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Current Streak</Text>
            <Text style={styles.statValue}>{stats.currentStreak} days</Text>
          </View>
        </RPGPanel>

        {/* Game Stats */}
        <RPGPanel style={styles.gameStatsPanel}>
          <Text style={styles.sectionTitle}>GAME STATS</Text>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Experience</Text>
            <Text style={styles.statValue}>{stats.experience} XP</Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Gold</Text>
            <Text style={styles.statValue}>{stats.gold} 💰</Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Battles Won</Text>
            <Text style={styles.statValue}>{stats.battlesWon}</Text>
          </View>
        </RPGPanel>

        {/* Actions */}
        <View style={styles.actionButtons}>
          <PixelButton
            title="VIEW DETAILED STATS"
            onPress={handleViewStats}
            variant="primary"
            style={styles.actionButton}
          />
          
          {!userData.isPro && (
            <PixelButton
              title="UPGRADE TO PRO"
              onPress={handleUpgrade}
              variant="gold"
              style={styles.actionButton}
            />
          )}
          
          <PixelButton
            title="SIGN OUT"
            onPress={handleSignOut}
            variant="secondary"
            style={styles.actionButton}
          />
        </View>

        {/* Pro Status */}
        {userData.isPro && (
          <RPGPanel variant="gold" style={styles.proPanel}>
            <Text style={styles.proIcon}>👑</Text>
            <Text style={styles.proText}>QUEST MASTER PRO</Text>
            <Text style={styles.proSubtext}>Thank you for your support!</Text>
          </RPGPanel>
        )}
      </ScrollView>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RPG_THEME.spacing.md
  },
  heroPanel: {
    marginBottom: RPG_THEME.spacing.md
  },
  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  heroIcon: {
    fontSize: 64,
    marginRight: RPG_THEME.spacing.md
  },
  heroInfo: {
    flex: 1
  },
  heroName: {
    fontFamily: RPG_THEME.fonts.pixel,
    fontSize: RPG_THEME.fonts.size.large,
    color: RPG_THEME.colors.darkBlue,
    marginBottom: 4
  },
  heroTitle: {
    fontFamily: RPG_THEME.fonts.pixel,
    fontSize: RPG_THEME.fonts.size.small,
    color: RPG_THEME.colors.darkBlue,
    marginBottom: 4
  },
  heroEmail: {
    fontFamily: RPG_THEME.fonts.pixel,
    fontSize: RPG_THEME.fonts.size.tiny,
    color: RPG_THEME.colors.darkBlue,
    opacity: 0.8
  },
  statsPanel: {
    marginBottom: RPG_THEME.spacing.md
  },
  gameStatsPanel: {
    marginBottom: RPG_THEME.spacing.md
  },
  sectionTitle: {
    fontFamily: RPG_THEME.fonts.pixel,
    fontSize: RPG_THEME.fonts.size.medium,
    color: RPG_THEME.colors.gold,
    textAlign: 'center',
    marginBottom: RPG_THEME.spacing.md
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RPG_THEME.spacing.sm,
    paddingHorizontal: RPG_THEME.spacing.sm
  },
  statLabel: {
    fontFamily: RPG_THEME.fonts.pixel,
    fontSize: RPG_THEME.fonts.size.small,
    color: RPG_THEME.colors.lightGray
  },
  statValue: {
    fontFamily: RPG_THEME.fonts.pixel,
    fontSize: RPG_THEME.fonts.size.small,
    color: RPG_THEME.colors.white
  },
  actionButtons: {
    marginBottom: RPG_THEME.spacing.md
  },
  actionButton: {
    marginBottom: RPG_THEME.spacing.sm
  },
  proPanel: {
    alignItems: 'center'
  },
  proIcon: {
    fontSize: 48,
    marginBottom: RPG_THEME.spacing.sm
  },
  proText: {
    fontFamily: RPG_THEME.fonts.pixel,
    fontSize: RPG_THEME.fonts.size.medium,
    color: RPG_THEME.colors.darkBlue,
    marginBottom: 4
  },
  proSubtext: {
    fontFamily: RPG_THEME.fonts.pixel,
    fontSize: RPG_THEME.fonts.size.small,
    color: RPG_THEME.colors.darkBlue,
    opacity: 0.8
  }
});

export default ProfileScreen; style={styles.heroHeader}>
            <Text style={styles.heroIcon}>{getCharacterIcon()}</Text>
            <View style={styles.heroInfo}>
              <Text style={styles.heroName}>{userData.heroName}</Text>
              <Text style={styles.heroTitle}>Level {gameData.level} Hero</Text>
              <Text style={styles.heroEmail}>{userData.email}</Text>
            </View>
          </View>
        </RPGPanel>

        {/* Quick Stats */}
        <RPGPanel style={styles.statsPanel}>
          <Text style={styles.sectionTitle}>QUEST PROGRESS</Text>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Days Smoke-Free</Text>
            <Text style={styles.statValue}>{stats.daysSmokeFree}</Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Money Saved</Text>
            <Text style={styles.statValue}>${stats.moneySaved.toFixed(2)}</Text>
          </View>
          
          <View