/**
 * RPG Panel Component
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * All Rights Reserved
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RPG_THEME } from '../theme/rpgTheme';

const RPGPanel = ({ children, variant = 'default', style }) => {
  const variantStyle = variant === 'gold' ? styles.gold : styles.default;

  return (
    <View style={[styles.panel, variantStyle, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    padding: RPG_THEME.spacing.md,
    borderRadius: 8,
    borderWidth: 2,
  },
  default: {
    backgroundColor: RPG_THEME.colors.darkGray,
    borderColor: RPG_THEME.colors.lightGray,
  },
  gold: {
    backgroundColor: RPG_THEME.colors.gold,
    borderColor: RPG_THEME.colors.gold,
  },
});

export default RPGPanel;
