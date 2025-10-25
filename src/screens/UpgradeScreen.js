/**
 * Upgrade Screen - Pro upgrade
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

const UpgradeScreen = () => {
  const navigation = useNavigation();

  return (
    <BackgroundWrapper>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>👑 Upgrade to Pro</Text>

        <RPGPanel variant="gold" style={styles.panel}>
          <Text style={styles.sectionTitle}>Quest Master Pro</Text>
          <Text style={styles.text}>
            Unlock premium features and support development!
          </Text>
        </RPGPanel>

        <RPGPanel style={styles.panel}>
          <Text style={styles.sectionTitle}>Pro Features:</Text>
          <Text style={styles.feature}>✓ Advanced statistics</Text>
          <Text style={styles.feature}>✓ Custom themes</Text>
          <Text style={styles.feature}>✓ Cloud backup</Text>
          <Text style={styles.feature}>✓ Exclusive achievements</Text>
          <Text style={styles.feature}>✓ Ad-free experience</Text>
        </RPGPanel>

        <PixelButton
          title="COMING SOON"
          onPress={() => {}}
          variant="gold"
          style={styles.button}
        />

        <PixelButton
          title="GO BACK"
          onPress={() => navigation.goBack()}
          variant="secondary"
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
    marginBottom: RPG_THEME.spacing.sm,
  },
  feature: {
    fontSize: RPG_THEME.fonts.size.medium,
    color: RPG_THEME.colors.white,
    marginBottom: RPG_THEME.spacing.xs,
  },
  button: {
    marginBottom: RPG_THEME.spacing.sm,
  },
});

export default UpgradeScreen;
