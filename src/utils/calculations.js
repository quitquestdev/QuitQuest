/**
 * Calculation Utilities
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * All Rights Reserved
 */

export const calculateMoneySaved = (days, cigarettesPerDay, packCost) => {
  const cigarettesPerPack = 20;
  const packsPerDay = cigarettesPerDay / cigarettesPerPack;
  return days * packsPerDay * packCost;
};

export const calculateHealthRecovered = (days) => {
  if (days < 1) return 0;
  if (days < 7) return 10;
  if (days < 30) return 25;
  if (days < 90) return 50;
  if (days < 180) return 75;
  return 90;
};
