/**
 * Achievement Notification Component
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * All Rights Reserved
 */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { RPG_THEME } from '../theme/rpgTheme';

export const AchievementNotification = ({ achievement, onComplete }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(3000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onComplete();
    });
  }, []);

  if (!achievement) return null;

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View style={styles.content}>
        <Text style={styles.title}>🏆 Achievement Unlocked!</Text>
        <Text style={styles.name}>{achievement.name || 'New Achievement'}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    zIndex: 1000,
  },
  content: {
    backgroundColor: RPG_THEME.colors.gold,
    padding: RPG_THEME.spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: RPG_THEME.fonts.size.medium,
    fontWeight: 'bold',
    color: RPG_THEME.colors.darkBlue,
    marginBottom: RPG_THEME.spacing.sm,
  },
  name: {
    fontSize: RPG_THEME.fonts.size.small,
    color: RPG_THEME.colors.darkBlue,
  },
});
