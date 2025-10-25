/**
 * Pixel Button Component
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * Licensed under the MIT License
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RPG_THEME } from '../theme/rpgTheme';

const PixelButton = ({ title, onPress, variant = 'primary', style }) => {
  const variantStyle = styles[variant] || styles.primary;

  return (
    <TouchableOpacity style={[styles.button, variantStyle, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: RPG_THEME.spacing.md,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 2,
  },
  primary: {
    backgroundColor: RPG_THEME.colors.purple,
    borderColor: RPG_THEME.colors.purple,
  },
  secondary: {
    backgroundColor: RPG_THEME.colors.darkGray,
    borderColor: RPG_THEME.colors.lightGray,
  },
  gold: {
    backgroundColor: RPG_THEME.colors.gold,
    borderColor: RPG_THEME.colors.gold,
  },
  text: {
    color: RPG_THEME.colors.white,
    fontSize: RPG_THEME.fonts.size.small,
    fontWeight: 'bold',
  },
});

export default PixelButton;
