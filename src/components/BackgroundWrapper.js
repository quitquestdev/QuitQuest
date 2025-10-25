/**
 * Background Wrapper Component
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * All Rights Reserved
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RPG_THEME } from '../theme/rpgTheme';

const BackgroundWrapper = ({ children, type = 'default' }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RPG_THEME.colors.darkBlue,
  },
});

export default BackgroundWrapper;
