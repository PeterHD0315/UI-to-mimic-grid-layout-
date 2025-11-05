import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';
import PhotosScreen from './screens/PhotosScreen';
import MusicScreen from './screens/MusicScreen';
import MessagesScreen from './screens/MessagesScreen';
import CallsScreen from './screens/CallsScreen';
import CameraScreen from './screens/CameraScreen';

const Stack = createStackNavigator();

export default function App() {
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

