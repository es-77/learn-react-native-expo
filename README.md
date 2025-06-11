# React Native Expo Project

A modern React Native application built with Expo, featuring a clean UI and efficient routing system.

## Project Overview

This project demonstrates the implementation of:
- File-based routing with Expo Router
- Component styling best practices
- Image handling (both local and remote)
- Responsive layouts
- Type-safe navigation

This is a React Native project built with Expo, a framework and platform for universal React applications.

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager
- Expo CLI
- A mobile device or emulator

## Project Setup

1. Install required packages for Expo Router:
```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

2. Configure the entry point in package.json:
```json
{
  "main": "expo-router/entry"
}
```

3. Project Structure for Expo Router:
```
├── app/           # Main application directory for Expo Router
│   └── index.js   # Home screen component
```

4. Expo Router Features:
- File-based routing system
- Built-in navigation support
- Deep linking capabilities
- Type-safe routing
- Automatic route generation

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the development server:
```bash
npx expo start
# or
yarn expo start
```

## Features

- Built with React Native and Expo
- Easy to set up and run
- Hot reloading for quick development
- Cross-platform support (iOS and Android)

## Development

After starting the development server:
- Use the Expo Go app on your mobile device to scan the QR code
- Press 'a' to open Android emulator
- Press 'i' to open iOS simulator (macOS only)

## Project Structure

```
├── app/             # Main application directory (Expo Router)
│   └── index.js     # Home screen component
├── assets/          # Contains all images and assets
│   ├── images/      # Project images
│   └── icons/       # App icons and splash screens
├── App.js           # Main application component
├── app.json         # Expo configuration
└── package.json     # Project dependencies and scripts
```

## Components

### Home1 Component (`app/index.js`)

Main home screen component with the following features:

- Centered layout using flex display
- Welcome message with styled container
- Image display capabilities:
  - Remote image loading with proper URI handling
  - Local image import and display
- Responsive design with flexible styling

#### Styling

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
```

## Scripts

- `npm start` or `yarn start`: Start the development server
- `npm run android` or `yarn android`: Start Android development build
- `npm run ios` or `yarn ios`: Start iOS development build
- `npm run web` or `yarn web`: Start web development build

## Development Guide

### Setting Up the Development Environment

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npx expo start
```

3. Run on specific platforms:
- Press 'a' for Android
- Press 'i' for iOS
- Press 'w' for web

### Common Issues and Solutions

1. Image Loading Issues
   - Ensure remote images use the `uri` property instead of `url`
   - Check image paths for local images are correct
   - Verify image dimensions are properly set in styles

2. Styling Issues
   - React Fragment cannot have style props
   - Use View components for styling containers
   - Follow React Native's flexbox implementation

3. Expo Router Issues
   - Ensure proper setup in app.json with scheme
   - Keep the app directory structure clean
   - Follow file-based routing conventions

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.