import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SCREENS, getDrawerActiveBackgroundColor} from '../utils/constant';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import 'react-native-gesture-handler';
import SettingScreen from '../screens/SettingScreen';
import {Home, Notification, Profile, Setting2} from 'iconsax-react-native';
import NotificationScreen from '../screens/NotificationScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={({route}) => ({
        headerTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'black',
        drawerStyle: {
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'flex-end',
          borderRadius: 30,
        },
        drawerItemStyle: {
          marginVertical: 10,
          borderRadius: 50,
        },
        drawerLabelStyle: {
          fontSize: 20,
          fontWeight: 200,
          marginLeft: -30,
        },
        drawerBackgroundColor: 'yellow',
        drawerPosition: 'left',
        drawerActiveBackgroundColor: getDrawerActiveBackgroundColor(route.name),
        headerTitle: '',
        drawerType: 'front',
      })}
      initialRouteName="Home">
      <Drawer.Screen
        name={SCREENS.HomeScreen}
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Home color={color} size={20} style={{paddingStart: 50}} />
          ),
          headerStyle: {
            backgroundColor: 'lightsalmon',
            shadowColor: 'transparent',
          },
        }}
      />
      <Drawer.Screen
        name={SCREENS.NotificationScreen}
        component={NotificationScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Notification color={color} size={20} style={{paddingStart: 50}} />
          ),
          headerStyle: {
            backgroundColor: 'palegreen',
            shadowColor: 'transparent',
          },
        }}
      />
      <Drawer.Screen
        name={SCREENS.ProfileScreen}
        component={ProfileScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Profile color={color} size={20} style={{paddingStart: 50}} />
          ),
          headerStyle: {
            backgroundColor: 'cornflowerblue',
            shadowColor: 'transparent',
          },
        }}
      />
      <Drawer.Screen
        name={SCREENS.SettingScreen}
        component={SettingScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Setting2 color={color} size={20} style={{paddingStart: 50}} />
          ),
          headerStyle: {
            backgroundColor: 'mediumaquamarine',
            shadowColor: 'transparent',
          },
        }}
      />
    </Drawer.Navigator>
  );
}
