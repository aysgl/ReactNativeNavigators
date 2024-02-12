import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../utils/constant';
import {Home, Setting2, Profile, Notification} from 'iconsax-react-native';
import NotificationScreen from '../screens/NotificationScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          paddingVertical: 5,
        },
        headerShown: false,
      }}
      initialRouteName={SCREENS.Home}>
      <Tab.Screen
        name={SCREENS.HomeScreen}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Home color={color} size={30}></Home>
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: 'tomato',
            color: 'yellow',
          },
          tabBarActiveTintColor: 'lightsalmon',
        }}
      />
      <Tab.Screen
        name={SCREENS.NotificationScreen}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Notification color={color} size={30}></Notification>
          ),
          tabBarActiveTintColor: 'palegreen',
        }}
      />
      <Tab.Screen
        name={SCREENS.ProfileScreen}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Profile color={color} size={30}></Profile>
          ),
          tabBarActiveTintColor: 'cornflowerblue',
        }}
      />
      <Tab.Screen
        name={SCREENS.SettingScreen}
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Setting2 color={color} size={30}></Setting2>
          ),
          tabBarActiveTintColor: 'mediumaquamarine',
        }}
      />
    </Tab.Navigator>
  );
}
