/**
 * Achievement Service
 *
 * Copyright (c) 2022 Jonathan Klimoski
 * All Rights Reserved
 */

class AchievementService {
  constructor() {
    this.notificationQueue = [];
  }

  getNextNotification() {
    return this.notificationQueue.shift() || null;
  }

  notificationComplete() {
    console.log('Notification complete');
  }

  queueNotification(achievement) {
    this.notificationQueue.push(achievement);
  }
}

export default new AchievementService();
