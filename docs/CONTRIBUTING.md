# Contributing to QuitQuest

Thank you for your interest in contributing to QuitQuest! This guide will help you get started with development and understand our contribution workflow.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other contributors

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- Git
- Expo CLI: `npm install -g expo-cli`
- For iOS: Xcode (macOS only)
- For Android: Android Studio

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/YOUR_USERNAME/QuitQuest.git
cd QuitQuest
```

3. Add the upstream repository:
```bash
git remote add upstream https://github.com/quitquestdev/QuitQuest.git
```

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your development keys (Firebase, Stripe, etc.)

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
```

## Project Structure

```
quit-quest/
├── App.js                    # Main entry point
├── src/
│   ├── components/           # Reusable UI components
│   ├── screens/              # Screen components
│   ├── navigation/           # Navigation configuration
│   ├── context/              # React Context providers
│   ├── services/             # API and service layer
│   ├── theme/                # Theme and styling
│   ├── utils/                # Utility functions
│   └── data/                 # Static data
├── assets/                   # Images, fonts, etc.
├── docs/                     # Documentation
└── __tests__/                # Test files
```

## Coding Standards

### JavaScript/React

- Use functional components with hooks
- Follow the existing code style (we use ESLint)
- Use meaningful variable and function names
- Keep components small and focused (< 200 lines)
- Use PropTypes or TypeScript for type checking

### File Naming

- Components: `PascalCase.js` (e.g., `RPGPanel.js`)
- Utilities: `camelCase.js` (e.g., `calculations.js`)
- Constants: `UPPER_CASE` (e.g., `MAX_HEALTH`)

### Component Structure

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { RPG_THEME } from '../theme/rpgTheme';

/**
 * Component description
 * @param {Object} props - Component props
 */
const MyComponent = ({ title, onPress }) => {
  // Hooks at the top
  const [state, setState] = useState(null);

  // Event handlers
  const handlePress = () => {
    onPress();
  };

  // Render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// PropTypes
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

// Default props
MyComponent.defaultProps = {
  onPress: () => {},
};

// Styles at the bottom
const styles = StyleSheet.create({
  container: {
    padding: RPG_THEME.spacing.md,
  },
  title: {
    fontSize: RPG_THEME.fonts.size.large,
    color: RPG_THEME.colors.gold,
  },
});

export default MyComponent;
```

### Style Guidelines

- Use StyleSheet.create() for all styles
- Reference theme constants (RPG_THEME)
- Group related styles together
- Use meaningful style names
- Avoid inline styles

### Git Commit Messages

Follow the conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(battle): add new battle animation

Implemented smooth transition animations for battle victories
using React Native Reanimated.

Closes #123
```

```
fix(auth): resolve login state persistence issue

Fixed bug where users were logged out on app restart.
Added proper AsyncStorage check in UserContext.
```

## Making Changes

### Branching Strategy

1. Create a feature branch from `main`:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit frequently:
```bash
git add .
git commit -m "feat: add new feature"
```

3. Keep your branch up to date:
```bash
git fetch upstream
git rebase upstream/main
```

4. Push to your fork:
```bash
git push origin feature/your-feature-name
```

### What to Work On

- Check [GitHub Issues](https://github.com/quitquestdev/QuitQuest/issues) for open tasks
- Look for issues labeled `good first issue` or `help wanted`
- Comment on an issue before starting work to avoid duplication
- For new features, open an issue first to discuss

## Pull Request Process

1. **Before Submitting**
   - Ensure your code follows our coding standards
   - Run tests: `npm test`
   - Update documentation if needed
   - Test on multiple platforms (iOS, Android, Web) if possible

2. **Submit PR**
   - Push your branch to your fork
   - Open a Pull Request against `main`
   - Fill out the PR template completely
   - Link related issues

3. **PR Template**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on iOS
- [ ] Tested on Android
- [ ] Tested on Web
- [ ] Unit tests added/updated

## Screenshots
(if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings
```

4. **Review Process**
   - Maintainers will review your PR
   - Address any requested changes
   - Keep the discussion constructive
   - Once approved, maintainers will merge

## Testing Guidelines

### Writing Tests

Place tests in `__tests__/` directory:

```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyComponent from '../src/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MyComponent title="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <MyComponent title="Test" onPress={onPress} />
    );

    fireEvent.press(getByText('Test'));
    expect(onPress).toHaveBeenCalled();
  });
});
```

### Running Tests

```bash
npm test              # Run all tests
npm test -- --watch   # Watch mode
npm test -- MyComponent  # Run specific test
```

## Documentation

### Code Comments

- Use JSDoc for functions and components
- Explain "why" not "what"
- Keep comments up to date

```javascript
/**
 * Calculates health recovery percentage based on days smoke-free
 * Uses CDC guidelines for health recovery milestones
 *
 * @param {number} days - Number of days smoke-free
 * @returns {number} Health recovery percentage (0-100)
 */
const calculateHealthRecovered = (days) => {
  // Implementation
};
```

### README Updates

When adding new features, update:
- Main README.md
- Feature documentation in docs/
- API documentation if applicable

## Getting Help

- Join our [GitHub Discussions](https://github.com/quitquestdev/QuitQuest/discussions)
- Ask questions in issues
- Check existing documentation

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in the app (for significant contributions)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to QuitQuest! Your efforts help people quit smoking and live healthier lives.
