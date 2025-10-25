# QuitQuest Architecture

This document provides an overview of the QuitQuest application architecture, design patterns, and implementation details.

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Application Architecture](#application-architecture)
- [Data Flow](#data-flow)
- [Component Structure](#component-structure)
- [State Management](#state-management)
- [Service Layer](#service-layer)
- [Theme System](#theme-system)
- [Navigation](#navigation)
- [Build & Deployment](#build--deployment)

## Overview

QuitQuest is a cross-platform mobile and web application built with React Native and Expo. The app uses a gamified approach to help users quit smoking by transforming their journey into an RPG adventure.

### Key Principles

- **Multi-Platform First**: Single codebase for iOS, Android, and Web
- **Offline-First**: Critical functionality works without internet
- **Performance**: Optimized for smooth 60fps animations
- **Accessibility**: WCAG 2.1 AA compliance
- **Maintainability**: Clear separation of concerns and modular design

## Technology Stack

### Core Framework
- **React Native**: 0.79.5
- **React**: 19.0.0
- **Expo**: ~53.0.17

### Navigation
- **@react-navigation/native**: 7.1.14
- **@react-navigation/stack**: 7.4.2
- **@react-navigation/bottom-tabs**: 7.1.14

### State Management
- **React Context API**: For global state
- **AsyncStorage**: For local persistence
- **Firebase**: For cloud sync

### Backend Services
- **Firebase Auth**: User authentication
- **Firebase Firestore**: Database
- **Firebase Cloud Functions**: Serverless backend
- **Stripe**: Payment processing

### UI/UX
- **React Native Web**: Web compatibility
- **Expo Font**: Custom pixel fonts
- **React Native Reanimated**: Smooth animations
- **React Native Gesture Handler**: Touch interactions

## Application Architecture

```
┌─────────────────────────────────────────────────┐
│                  App Entry                      │
│                  (App.js)                       │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│             Context Providers                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │  Theme   │  │   User   │  │   Game   │     │
│  └──────────┘  └──────────┘  └──────────┘     │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│              Navigation                         │
│         (MainNavigator.js)                      │
└────────────────┬────────────────────────────────┘
                 │
      ┌──────────┼──────────┐
      ▼          ▼          ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│  Auth    │ │  Main    │ │  Setup   │
│  Stack   │ │  Tabs    │ │  Stack   │
└──────────┘ └──────────┘ └──────────┘
      │          │          │
      ▼          ▼          ▼
┌──────────────────────────────────┐
│          Screens                 │
│  ┌────────────────────────────┐  │
│  │  Dashboard  Battle  Stats  │  │
│  │  Profile    Shop    etc.   │  │
│  └────────────────────────────┘  │
└──────────────┬───────────────────┘
               │
               ▼
┌──────────────────────────────────┐
│         Components               │
│  ┌────────────────────────────┐  │
│  │  RPGPanel   PixelButton    │  │
│  │  StatusBar  QuestCard      │  │
│  └────────────────────────────┘  │
└──────────────┬───────────────────┘
               │
               ▼
┌──────────────────────────────────┐
│          Services                │
│  ┌────────────────────────────┐  │
│  │  Auth    Data    Stripe    │  │
│  │  Achievement  Notification │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

## Data Flow

### Authentication Flow

```
User Opens App
    │
    ▼
Check Auth State (UserContext)
    │
    ├─→ Authenticated → Dashboard
    │
    └─→ Not Authenticated → AuthScreen
            │
            ├─→ Sign Up → Setup Wizard → Dashboard
            │
            └─→ Sign In → Dashboard
```

### Game Data Flow

```
User Action (e.g., "Fight Craving")
    │
    ▼
GameContext Handler
    │
    ├─→ Update Local State
    │
    ├─→ Calculate Rewards (XP, Gold, etc.)
    │
    ├─→ Check Achievements
    │
    ├─→ Save to AsyncStorage (Offline)
    │
    └─→ Sync to Firebase (Online)
        │
        └─→ Update UI
```

## Component Structure

### Component Hierarchy

```
App
├── Providers
│   ├── StripeProvider
│   ├── ThemeProvider
│   ├── UserProvider
│   └── GameProvider
│
├── Navigation
│   ├── AuthStack
│   │   ├── AuthScreen
│   │   └── SetupScreen
│   │
│   └── MainTabs
│       ├── DashboardScreen
│       ├── BattleScreen
│       ├── AchievementsScreen
│       ├── ShopScreen
│       └── ProfileScreen
│
└── Shared Components
    ├── BackgroundWrapper
    ├── RPGPanel
    ├── PixelButton
    ├── LoadingSpinner
    ├── AchievementNotification
    └── StatusBar
```

### Component Patterns

#### 1. Screen Components
Located in `src/screens/`, handle routing and orchestrate child components.

```javascript
const DashboardScreen = () => {
  const { userData } = useUser();
  const { gameData } = useGame();

  return (
    <BackgroundWrapper type="dashboard">
      <ScrollView>
        <QuickStats userData={userData} gameData={gameData} />
        <DailyQuests />
        <QuestDashboard />
      </ScrollView>
    </BackgroundWrapper>
  );
};
```

#### 2. Presentational Components
Pure, reusable UI components in `src/components/`.

```javascript
const RPGPanel = ({ children, variant, style }) => {
  return (
    <View style={[styles.panel, styles[variant], style]}>
      {children}
    </View>
  );
};
```

#### 3. Container Components
Connect to context and pass data to presentational components.

## State Management

### Context Providers

#### UserContext
Manages authentication and user profile data.

```javascript
{
  userData: {
    uid: string,
    email: string,
    heroName: string,
    quitDate: Date,
    cigarettesPerDay: number,
    packCost: number,
    isPro: boolean,
    // ... other user fields
  },
  signIn: (email, password) => Promise,
  signUp: (email, password, userData) => Promise,
  signOut: () => Promise,
  updateProfile: (updates) => Promise,
}
```

#### GameContext
Handles game state, progression, and achievements.

```javascript
{
  gameData: {
    level: number,
    experience: number,
    gold: number,
    health: number,
    maxHealth: number,
    battlesWon: number,
    currentStreak: number,
    inventory: [],
    achievements: [],
    // ... other game fields
  },
  battleCraving: () => Promise,
  completeQuest: (questId) => Promise,
  purchaseItem: (itemId) => Promise,
  unlockAchievement: (achievementId) => void,
}
```

#### ThemeContext
Manages theme settings and dark mode.

```javascript
{
  theme: object,
  darkMode: boolean,
  toggleDarkMode: () => void,
}
```

### Local Storage Strategy

- **AsyncStorage**: User preferences, game progress (offline backup)
- **Firebase**: Authoritative data source (cloud sync)
- **Sync Strategy**: Optimistic updates with background sync

## Service Layer

### authService.js
Handles Firebase Authentication operations.

```javascript
- signUp(email, password, userData)
- signIn(email, password)
- signOut()
- resetPassword(email)
- updateProfile(updates)
```

### dataService.js
Manages Firestore CRUD operations.

```javascript
- getUserData(uid)
- updateUserData(uid, data)
- getGameData(uid)
- updateGameData(uid, data)
- syncLocalToCloud()
```

### achievementService.js
Tracks and manages achievement system.

```javascript
- checkAchievements(gameData)
- unlockAchievement(achievementId)
- getAchievementProgress()
- queueNotification(achievement)
```

### stripeService.js
Handles payment processing.

```javascript
- createPaymentIntent(amount)
- processPurchase(itemId)
- upgradeToPro()
```

## Theme System

### RPG Theme
Defined in `src/theme/rpgTheme.js`:

```javascript
{
  colors: {
    darkBlue: '#1a1a2e',
    purple: '#6f42c1',
    gold: '#ffd700',
    red: '#e63946',
    green: '#06ffa5',
    white: '#ffffff',
    lightGray: '#cccccc',
  },
  fonts: {
    pixel: 'PixelFont',
    size: {
      tiny: 10,
      small: 14,
      medium: 18,
      large: 24,
      xlarge: 32,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
}
```

### Responsive Design
- Uses flexbox for layouts
- Percentage-based widths
- Platform-specific adjustments via `Platform.OS`
- Safe area handling with `react-native-safe-area-context`

## Navigation

### Navigation Structure

```
NavigationContainer
└── MainNavigator (Stack)
    ├── Auth Flow (conditional)
    │   ├── AuthScreen
    │   └── SetupScreen
    │
    └── Main Flow (conditional)
        └── TabNavigator (Bottom Tabs)
            ├── Dashboard
            ├── Battle
            ├── Achievements
            ├── Shop
            └── Profile
```

### Deep Linking
Support for deep links to specific screens:
- `quitquest://battle`
- `quitquest://achievements/:id`
- `quitquest://shop`

## Build & Deployment

### Development
```bash
npm start        # Start Expo dev server
npm run ios      # Run on iOS simulator
npm run android  # Run on Android emulator
npm run web      # Run in web browser
```

### Production Builds

#### Web (GitHub Pages)
```bash
npm run build:web  # Outputs to web-build/
# Deployed via GitHub Actions
```

#### Mobile (EAS Build)
```bash
eas build --platform ios --profile production
eas build --platform android --profile production
```

### Environment Variables
- Development: `.env`
- Production: GitHub Secrets / EAS Secrets

### CI/CD
- **GitHub Actions**: Automated deployment to GitHub Pages
- **EAS Build**: Mobile app builds
- **Expo Updates**: OTA updates for minor changes

## Performance Optimizations

- **Code Splitting**: Lazy load screens with `React.lazy`
- **Memoization**: Use `React.memo` for expensive components
- **Virtual Lists**: `FlatList` for long scrollable content
- **Image Optimization**: Compressed assets, lazy loading
- **Bundle Size**: Tree shaking, minimal dependencies

## Security Considerations

- **Environment Variables**: Never commit secrets
- **Firebase Security Rules**: Validate all database writes
- **Input Validation**: Sanitize user input
- **Secure Storage**: Use Expo SecureStore for sensitive data
- **HTTPS Only**: All API calls over secure connections

## Testing Strategy

### Unit Tests
- Components: Jest + React Testing Library
- Services: Jest
- Utilities: Jest

### Integration Tests
- User flows: Detox (React Native)
- API integration: Jest

### E2E Tests
- Critical paths: Detox
- Cross-platform: BrowserStack (web)

## Future Enhancements

- [ ] TypeScript migration
- [ ] Offline mode improvements
- [ ] Social features (friends, leaderboards)
- [ ] More gamification elements
- [ ] Advanced analytics
- [ ] Internationalization (i18n)
- [ ] Accessibility improvements
- [ ] Performance monitoring (Sentry)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines and coding standards.

## License

Copyright © 2022 Jonathan Klimoski

MIT License - See LICENSE file for details.
