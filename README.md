# Grid Layout App

A React Native application demonstrating Flexbox layouts and navigation with both row and grid views.

## Features

- **Dynamic Layout Switching**: Toggle between row and grid layouts
- **Navigation**: Navigate to different screens (Photos, Music, Messages, Calls, Camera)
- **Responsive Design**: Uses Flexbox for proper layout on different screen sizes
- **FlatList Implementation**: Efficient rendering with React Native's FlatList component

## Components

### HomeScreen
- Main screen with toggle functionality between row and grid views
- Uses FlatList with dynamic numColumns based on view type
- Implements proper Flexbox styling for responsive design

### Navigation Screens
- **PhotosScreen**: Welcome to the Photos Screen
- **MusicScreen**: Welcome to the Music Selection Screen  
- **MessagesScreen**: Welcome to your Messages
- **CallsScreen**: Make calls from Here
- **CameraScreen**: Welcome to the camera app

## Installation

1. Make sure you have Node.js installed
2. Install Expo CLI globally:
   ```
   npm install -g expo-cli
   ```
3. Navigate to the project directory:
   ```
   cd Assignment4
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm start
   ```

## Key Technologies

- **React Native**: Cross-platform mobile development
- **React Navigation**: Screen navigation and routing
- **Expo Vector Icons**: Icon library for consistent iconography
- **FlatList**: Efficient list rendering component
- **Flexbox**: CSS layout system for responsive design

## Project Structure

```
Assignment4/
├── App.js                 # Main app component with navigation setup
├── screens/
│   ├── HomeScreen.js      # Main screen with grid/row toggle
│   ├── PhotosScreen.js    # Photos navigation screen
│   ├── MusicScreen.js     # Music navigation screen
│   ├── MessagesScreen.js  # Messages navigation screen
│   ├── CallsScreen.js     # Calls navigation screen
│   └── CameraScreen.js    # Camera navigation screen
├── package.json           # Project dependencies
├── app.json              # Expo configuration
└── babel.config.js       # Babel configuration
```

## Usage

1. **Home Screen**: 
   - Use the toggle button to switch between "Rows" and "Grid" view
   - Tap on any item to navigate to its respective screen

2. **Navigation**:
   - Each screen has a back button in the header
   - Use the "Go Back" button on each screen to return to the home screen

## Flexbox Implementation

The app demonstrates various Flexbox concepts:
- **flex: 1** - For full height containers
- **flexDirection: 'row'** - For horizontal layouts in row view
- **justifyContent and alignItems** - For proper alignment
- **numColumns in FlatList** - For responsive grid layouts
- **Responsive sizing** - Using Dimensions API for proper grid item sizing