# Grid Layout App with Local Notifications

A React Native application demonstrating Flexbox layouts, navigation, and **local push notifications** with both row and grid views.

## Features

- **Dynamic Layout Switching**: Toggle between row and grid layouts
- **Navigation**: Navigate to different screens (Photos, Music, Messages, Calls, Camera)
- **Local Notifications**: 
  - Immediate notifications when navigating to screens
  - Scheduled test notifications (5-second delay)
  - Permission handling and notification listeners
- **Responsive Design**: Uses Flexbox for proper layout on different screen sizes
- **FlatList Implementation**: Efficient rendering with React Native's FlatList component

## Components

### HomeScreen
- Main screen with toggle functionality between row and grid views
- **Test Notification Button**: Schedules a notification 5 seconds in the future
- Uses FlatList with dynamic numColumns based on view type
- Implements notification triggers on item tap
- Implements proper Flexbox styling for responsive design

### Navigation Screens
- **PhotosScreen**: Welcome to the Photos Screen
- **MusicScreen**: Welcome to the Music Selection Screen  
- **MessagesScreen**: Welcome to your Messages
- **CallsScreen**: Make calls from Here
- **CameraScreen**: Welcome to the camera app

## Notifications Features

### Immediate Notifications
- Triggered when tapping any menu item
- Shows title and body with the screen name
- Appears before navigation occurs

### Scheduled Notifications
- Test notification button schedules notification 5 seconds ahead
- Demonstrates delayed notification delivery
- Works even when app is in background

### Permission Handling
- Automatic permission request on app startup
- Platform-specific configuration (Android channels, iOS background modes)
- User-friendly alerts if permissions are denied

For detailed notification implementation, see [NOTIFICATIONS_DOCUMENTATION.md](./NOTIFICATIONS_DOCUMENTATION.md)

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
   npx expo start
   ```

## Key Technologies

- **React Native**: Cross-platform mobile development
- **React Navigation**: Screen navigation and routing
- **Expo Notifications**: Local push notification system
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