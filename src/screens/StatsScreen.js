/**
 * Stats Screen - Detailed statistics
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * All Rights Reserved
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BackgroundWrapper from '../components/BackgroundWrapper';
import RPGPanel from '../components/RPGPanel';
import PixelButton from '../components/PixelButton';
import { RPG_THEME } from '../theme/rpgTheme';
import { useNavigation } from '@react-navigation/native';

const StatsScreen = () => {
  const navigation = useNavigation();

  return (
    <BackgroundWrapper>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>📊 Detailed Stats</Text>

        <RPGPanel style={styles.panel}>
          <Text style={styles.sectionTitle}>Coming Soon!</Text>
          <Text style={styles.text}>
            Detailed statistics and charts will be available here.
          </Text>
        </RPGPanel>

        <PixelButton
          title="GO BACK"
          onPress={() => navigation.goBack()}
          variant="primary"
        />
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
  sectionTitle: {
    fontSize: RPG_THEME.fonts.size.large,
    color: RPG_THEME.colors.gold,
    marginBottom: RPG_THEME.spacing.sm,
    fontWeight: 'bold',
  },
  text: {
    fontSize: RPG_THEME.fonts.size.medium,
    color: RPG_THEME.colors.white,
    lineHeight: 24,
  },
});

export default StatsScreen;
