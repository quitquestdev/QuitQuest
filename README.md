# QuitQuest

> Transform your journey to quit smoking into an epic RPG adventure

**[🎮 Try the Web App](https://quitquestdev.github.io/QuitQuest/)** | [📱 Coming Soon to App Stores](#deployment)

QuitQuest is a gamified habit-breaking mobile and web application that helps users quit smoking by turning their recovery journey into an engaging RPG experience. Battle cravings, level up your character, complete daily quests, and track your progress as you become the hero of your own quit story.

## Features

- **RPG-Style Gamification**: Level up, gain experience, and earn gold as you progress
- **Battle System**: Fight cravings with an engaging battle mechanic
- **Daily Quests**: Complete challenges to stay motivated
- **Achievement System**: Unlock achievements as you hit milestones
- **Progress Tracking**: Monitor days smoke-free, money saved, and health recovery
- **Profile System**: Create your hero and track your journey
- **Premium Features**: Upgrade to Pro for additional benefits
- **Multi-Platform**: Works on iOS, Android, and Web

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Stack & Bottom Tabs)
- **State Management**: React Context API
- **Storage**: AsyncStorage
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Payments**: Stripe
- **Web Support**: React Native Web (Expo Web)
- **Design**: Custom RPG-themed UI with pixel art aesthetics

## Project Structure

```
quit-quest/
├── App.js                          # Main application entry point
├── ProfileScreen.js                # User profile screen component
├── app.json                        # Expo configuration
├── package.json                    # Dependencies and scripts
├── babel.config.js                 # Babel configuration
├── eas.json                        # EAS Build configuration
├── .env                            # Environment variables (not in git)
├── .gitignore                      # Git ignore rules
└── src/                            # Source code (to be implemented)
    ├── components/                 # Reusable UI components
    ├── screens/                    # Screen components
    ├── navigation/                 # Navigation configuration
    ├── context/                    # React Context providers
    ├── services/                   # API and service layer
    ├── theme/                      # Theme and styling
    ├── utils/                      # Utility functions
    └── data/                       # Static data and constants
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- For iOS development: Xcode (macOS only)
- For Android development: Android Studio

### Installation

1. Clone the repository:
```bash
git clone https://github.com/quitquestdev/QuitQuest.git
cd QuitQuest
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Then edit `.env` with your configuration:
```
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here
FIREBASE_API_KEY=your_firebase_key_here
FIREBASE_AUTH_DOMAIN=your_firebase_domain_here
# ... other Firebase config
```

### Running the App

#### Development Mode

```bash
# Start Expo development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web
```

#### Building for Production

```bash
# Build for Android
npm run build:android

# Build for iOS
npm run build:ios

# Build for Web
npm run build:web
```

## Development Status

This project is currently in active development. The following components are being implemented:

### Completed
- ✅ Project structure and configuration
- ✅ Expo setup with multi-platform support
- ✅ ProfileScreen component
- ✅ Firebase integration setup
- ✅ Stripe payment integration setup

### In Progress
- 🔨 Core components (RPGPanel, PixelButton, etc.)
- 🔨 Screen implementations (Dashboard, Battle, Achievements, etc.)
- 🔨 Context providers (User, Game, Theme)
- 🔨 Service layer (Auth, Data, Notifications)
- 🔨 Theme and styling system

### Planned
- 📋 Backend server implementation
- 📋 Push notifications
- 📋 Social features
- 📋 Analytics integration
- 📋 Comprehensive testing

## Architecture

### Context Providers

- **UserContext**: Manages user authentication and profile data
- **GameContext**: Handles game state, achievements, and progression
- **ThemeContext**: Manages theme settings and dark mode

### Services

- **authService**: Firebase authentication
- **dataService**: Firestore data operations
- **achievementService**: Achievement tracking and notifications
- **stripeService**: Payment processing
- **notificationService**: Push notification handling

### Theme

The app uses a custom RPG-themed design system with:
- Pixel art font
- Dark color scheme (#1a1a2e primary)
- Gold accents for premium features
- Retro gaming aesthetics

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes on multiple platforms when possible
- Update documentation as needed
- Keep components small and focused
- Use TypeScript where possible (migration in progress)

## Deployment

### GitHub Pages (Web Version)

The web version of QuitQuest is automatically deployed to GitHub Pages:

**Live Demo**: [https://quitquestdev.github.io/QuitQuest/](https://quitquestdev.github.io/QuitQuest/)

**Deployment**:
- Automatically deploys when changes are pushed to the `main` branch
- GitHub Actions workflow builds the Expo web app and deploys to GitHub Pages
- The built files are exported to the `dist/` directory

**Manual Build**:
```bash
npm run build:web
```

The web app runs directly in the browser with full React Native Web support.

### Mobile App Stores

- **iOS**: Built with EAS Build and submitted via App Store Connect
- **Android**: Built with EAS Build and submitted via Google Play Console

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Stripe
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Firebase
EXPO_PUBLIC_FIREBASE_API_KEY=...
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=...
EXPO_PUBLIC_FIREBASE_PROJECT_ID=...
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=...
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
EXPO_PUBLIC_FIREBASE_APP_ID=...

# AdMob (optional)
EXPO_PUBLIC_ADMOB_IOS_APP_ID=...
EXPO_PUBLIC_ADMOB_ANDROID_APP_ID=...
```

## License

Copyright © 2022 Jonathan Klimoski. All Rights Reserved.

This software is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without express written permission from Jonathan Klimoski.

## Support

- **Documentation**: [GitHub Wiki](https://github.com/quitquestdev/QuitQuest/wiki)
- **Issues**: [GitHub Issues](https://github.com/quitquestdev/QuitQuest/issues)
- **Discussions**: [GitHub Discussions](https://github.com/quitquestdev/QuitQuest/discussions)

## Acknowledgments

- Built with [Expo](https://expo.dev/)
- UI inspired by classic RPG games
- Icons and imagery from community resources

---

**Made with ❤️ for everyone on their journey to quit smoking**
