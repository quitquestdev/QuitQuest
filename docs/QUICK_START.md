# Quick Start Guide

Get QuitQuest up and running in 5 minutes!

## Prerequisites

- Node.js 16+
- npm or yarn
- Expo CLI (install with `npm install -g expo-cli`)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/quitquestdev/QuitQuest.git
cd QuitQuest
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
# Required for full functionality
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_key
# ... other Firebase config
```

> **Note**: For development, you can skip this step initially. Some features won't work without proper configuration.

### 4. Start Development Server

```bash
npm start
```

This will open the Expo Developer Tools in your browser.

### 5. Run on Your Device or Emulator

#### Option 1: Physical Device
- Install the Expo Go app on your phone ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- Scan the QR code from the Expo Developer Tools

#### Option 2: iOS Simulator (macOS only)
```bash
npm run ios
```

#### Option 3: Android Emulator
```bash
npm run android
```

#### Option 4: Web Browser
```bash
npm run web
```

## Project Status

**⚠️ This project is in active development.** Many features are still being implemented.

### Currently Available
- ✅ Project structure
- ✅ ProfileScreen component
- ✅ Configuration files

### In Development
- 🔨 Core components
- 🔨 Screen implementations
- 🔨 Firebase integration
- 🔨 Game logic

## What to Do Next

### For Users
Wait for the official release! We're working hard to build an amazing app.

### For Developers

1. **Read the Documentation**
   - [README.md](../README.md) - Project overview
   - [ARCHITECTURE.md](ARCHITECTURE.md) - Technical architecture
   - [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute

2. **Check Open Issues**
   - Visit [GitHub Issues](https://github.com/quitquestdev/QuitQuest/issues)
   - Look for `good first issue` labels
   - Comment on issues you'd like to work on

3. **Join the Community**
   - [GitHub Discussions](https://github.com/quitquestdev/QuitQuest/discussions)
   - Ask questions, share ideas, get help

4. **Start Contributing**
   - Pick an issue or feature
   - Create a branch
   - Make your changes
   - Submit a Pull Request

## Common Commands

```bash
# Development
npm start              # Start Expo dev server
npm run ios           # Run on iOS
npm run android       # Run on Android
npm run web           # Run on web

# Building
npm run build:web     # Build for web
npm run build:android # Build for Android
npm run build:ios     # Build for iOS

# Testing
npm test              # Run tests
npm test -- --watch   # Watch mode
npm test -- --coverage # With coverage

# Linting
npm run lint          # Check code style
npm run lint:fix      # Fix code style issues
```

## Troubleshooting

### "Module not found" errors
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npx expo start --clear
```

### Metro bundler issues
```bash
# Reset Metro cache
npx expo start --clear
```

### iOS build errors
```bash
# Clear iOS build
cd ios && pod install && cd ..
npx expo run:ios --clean
```

### Android build errors
```bash
# Clean Android build
cd android && ./gradlew clean && cd ..
npx expo run:android --clean
```

### Expo Go connection issues
- Make sure your phone and computer are on the same WiFi network
- Try using tunnel mode: `npx expo start --tunnel`

## Getting Help

- **Documentation**: Check the [docs](.) folder
- **Issues**: Search [existing issues](https://github.com/quitquestdev/QuitQuest/issues)
- **Discussions**: Ask in [GitHub Discussions](https://github.com/quitquestdev/QuitQuest/discussions)
- **Expo**: See [Expo documentation](https://docs.expo.dev/)

## Next Steps

Now that you have the app running, explore the codebase:

1. Check out `App.js` - the main entry point
2. Look at `ProfileScreen.js` - an example screen component
3. Review the file structure in `QuitQuestProFileStructure.txt`
4. Read through the architecture documentation

Happy coding! 🚀
