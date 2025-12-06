# Local Notifications Implementation

## Overview
This Grid Layout app has been enhanced with **local push notifications** using Expo's `expo-notifications` package. The implementation demonstrates two types of notifications:

1. **Immediate Notifications** - Triggered when navigating to screens
2. **Scheduled Notifications** - Triggered after a delay (test notification feature)

---

## Features Implemented

### 1. Notification Permissions
- **Automatic Permission Request**: The app requests notification permissions on startup
- **Platform-Specific Handling**: 
  - Android: Creates a notification channel with vibration and custom color
  - iOS: Configures background notification modes
- **User Alerts**: Shows an alert if permissions are denied

### 2. Notification Handler Configuration
```javascript
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,    // Show alert when app is open
    shouldPlaySound: true,     // Play notification sound
    shouldSetBadge: true,      // Update app badge count
  }),
});
```

### 3. Navigation-Based Notifications
When users tap on any app item (Photos, Music, Messages, Calls, Camera):
- An **immediate notification** is triggered
- Notification displays:
  - **Title**: "Opening [ItemName]"
  - **Body**: "You are about to access the [ItemName] screen"
  - **Data**: Contains the screen name for tracking
- User is then navigated to the selected screen

### 4. Test Notification Feature
A dedicated **"Test Notification"** button allows users to:
- Schedule a notification **5 seconds** in the future
- Experience how scheduled notifications work
- Test notification functionality without navigating

---

## Code Implementation Details

### App.js Changes
1. **Import Notifications**:
   ```javascript
   import * as Notifications from 'expo-notifications';
   ```

2. **Register for Push Notifications**:
   - Requests permissions on app start
   - Sets up notification listeners
   - Configures Android notification channel

3. **Notification Listeners**:
   - `notificationListener`: Handles notifications received while app is open
   - `responseListener`: Handles user interactions with notifications

### HomeScreen.js Changes
1. **Import Notifications**:
   ```javascript
   import * as Notifications from 'expo-notifications';
   ```

2. **Immediate Notification Function**:
   ```javascript
   const handleItemPress = async (screenName, itemName) => {
     await Notifications.scheduleNotificationAsync({
       content: {
         title: `Opening ${itemName}`,
         body: `You are about to access the ${itemName} screen`,
         data: { screen: screenName },
       },
       trigger: null, // null = immediate
     });
     navigation.navigate(screenName);
   };
   ```

3. **Scheduled Notification Function**:
   ```javascript
   const scheduleTestNotification = async () => {
     await Notifications.scheduleNotificationAsync({
       content: {
         title: "Scheduled Notification 📬",
         body: 'This is a test notification scheduled 5 seconds ago!',
         data: { testData: 'Test notification from Grid Layout App' },
       },
       trigger: { seconds: 5 },
     });
   };
   ```

4. **UI Updates**:
   - Added "Test Notification" button with bell icon
   - Updated header layout to accommodate both buttons
   - Styled with red background for visibility

---

## Configuration Files

### package.json
Added dependency:
```json
"expo-notifications": "~0.29.12"
```

### app.json
Added notification configuration:
```json
{
  "ios": {
    "infoPlist": {
      "UIBackgroundModes": ["remote-notification"]
    }
  },
  "android": {
    "permissions": [
      "RECEIVE_BOOT_COMPLETED",
      "VIBRATE"
    ]
  },
  "plugins": [
    [
      "expo-notifications",
      {
        "icon": "./assets/notification-icon.png",
        "color": "#007AFF",
        "sounds": []
      }
    ]
  ]
}
```

---

## How to Test

### Test 1: Immediate Notifications
1. Launch the app
2. Grant notification permissions when prompted
3. Tap on any item (Photos, Music, Messages, Calls, or Camera)
4. **Expected Result**: You should see a notification appear immediately before navigating

### Test 2: Scheduled Notifications
1. Tap the **"Test Notification"** button (red button with bell icon)
2. Wait 5 seconds
3. **Expected Result**: A notification appears with the message "This is a test notification scheduled 5 seconds ago!"

### Test 3: Background Notifications
1. Tap "Test Notification" button
2. Minimize or close the app
3. Wait 5 seconds
4. **Expected Result**: Notification appears even when app is in background

---

## Notification Types Demonstrated

### 1. Trigger: null (Immediate)
```javascript
trigger: null  // Shows immediately
```
- Used for navigation notifications
- Appears instantly when action is performed

### 2. Trigger: seconds (Scheduled)
```javascript
trigger: { seconds: 5 }  // Shows after 5 seconds
```
- Used for test notification
- Demonstrates time-based scheduling

### 3. Other Trigger Options Available
```javascript
// Daily notification
trigger: {
  hour: 9,
  minute: 0,
  repeats: true
}

// Weekly notification
trigger: {
  weekday: 1,  // Monday
  hour: 10,
  minute: 0,
  repeats: true
}

// Specific date
trigger: new Date(Date.now() + 60 * 60 * 1000)  // 1 hour from now
```

---

## Learning Outcomes

This implementation demonstrates:

1. ✅ **Permission Handling**: Requesting and managing notification permissions
2. ✅ **Local Notifications**: Creating and scheduling local notifications
3. ✅ **Immediate Triggers**: Notifications that appear instantly
4. ✅ **Scheduled Triggers**: Notifications that appear after a delay
5. ✅ **Notification Content**: Customizing title, body, and data
6. ✅ **Listeners**: Handling notification events (received and responded)
7. ✅ **Platform Differences**: Android channels vs iOS configuration
8. ✅ **User Experience**: Integrating notifications with navigation

---

## Code Comments & Documentation

All notification-related code includes:
- Clear comments explaining functionality
- Descriptive variable names
- Inline documentation for parameters
- Error handling for permission denials

---

## Assignment Requirements Met

✅ **Functional Program**: Runs without errors
✅ **Push Notifications**: Both immediate and scheduled notifications implemented
✅ **Code Explanation**: Comprehensive comments and documentation provided
✅ **Practical Application**: Notifications enhance user experience during navigation
✅ **Multiple Notification Types**: Demonstrates immediate and scheduled triggers

---

## Additional Resources

- [Expo Notifications Documentation](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [React Navigation Integration](https://reactnavigation.org/)
- [Platform-Specific Permissions](https://docs.expo.dev/versions/latest/sdk/notifications/#permissions)

---

## Author Notes

This implementation showcases a real-world use case for notifications in a mobile app. The immediate notifications provide user feedback during navigation, while the scheduled notification demonstrates the flexibility of the notification system. Both types are commonly used in production applications for user engagement and app functionality.