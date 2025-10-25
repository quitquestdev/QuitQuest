/**
 * Loading Spinner Component
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * Licensed under the MIT License
 */

import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { RPG_THEME } from '../theme/rpgTheme';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={RPG_THEME.colors.gold} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RPG_THEME.colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: RPG_THEME.spacing.md,
    color: RPG_THEME.colors.gold,
    fontSize: RPG_THEME.fonts.size.medium,
    fontFamily: RPG_THEME.fonts.pixel,
  },
});

export default LoadingSpinner;
