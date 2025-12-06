import 'react-native-gesture-handler';
import React, { useEffect, useRef, useState } from 'react';
import { Platform, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import HomeScreen from './screens/HomeScreen';
import PhotosScreen from './screens/PhotosScreen';
import MusicScreen from './screens/MusicScreen';
import MessagesScreen from './screens/MessagesScreen';
import CallsScreen from './screens/CallsScreen';
import CameraScreen from './screens/CameraScreen';

// Configure how notifications should be handled when the app is in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Stack = createStackNavigator();

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // Request permissions and get push token
    registerForPushNotificationsAsync().then(token => {
      setExpoPushToken(token);
    });

    // Listener for notifications received while app is in foreground
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
    });

    // Listener for when user interacts with notification
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification response:', response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Photos" 
          component={PhotosScreen} 
          options={{ title: 'Photos' }}
        />
        <Stack.Screen 
          name="Music" 
          component={MusicScreen} 
          options={{ title: 'Music' }}
        />
        <Stack.Screen 
          name="Messages" 
          component={MessagesScreen} 
          options={{ title: 'Messages' }}
        />
        <Stack.Screen 
          name="Calls" 
          component={CallsScreen} 
          options={{ title: 'Calls' }}
        />
        <Stack.Screen 
          name="Camera" 
          component={CameraScreen} 
          options={{ title: 'Camera' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Function to request notification permissions
async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#007AFF',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  if (finalStatus !== 'granted') {
    Alert.alert('Permission Required', 'Please enable notifications to receive alerts from this app.');
    return;
  }

  return token;
}