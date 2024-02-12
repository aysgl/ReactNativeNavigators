import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeScreen from '../screens/HomeScreen';
import {getDrawerActiveBackgroundColor} from '../utils/constant';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerTitle: '',
        headerShadowVisible: false,
        headerBorderVisible: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({route}) => ({
          headerStyle: {
            backgroundColor: getDrawerActiveBackgroundColor(route.name),
          },
        })}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={({route}) => ({
          headerStyle: {
            backgroundColor: getDrawerActiveBackgroundColor(route.name),
          },
        })}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({route}) => ({
          headerStyle: {
            backgroundColor: getDrawerActiveBackgroundColor(route.name),
          },
        })}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={({route}) => ({
          headerStyle: {
            backgroundColor: getDrawerActiveBackgroundColor(route.name),
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
