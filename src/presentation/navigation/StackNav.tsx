import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import Animation101Screen from '../screens/animations/Animation101Screen';
import Animation102Screen from '../screens/animations/Animation102Screen';
import SwitchScreen from '../switches/SwitchScreen';
import AlerScreen from '../screens/alerts/AlertScreen';
import TextInputScreen from '../inputs/TextInputScreen';
import PullToRefreshScreen from '../ui/PullToRefreshScreen';
import CustomSectionListScreen from '../ui/CustomSectionListScreen';
import ModalScreen from '../ui/ModalScreen';
import { InfiniteScrollScreen } from '../ui/InfiniteScrollScreen';

const Stack = createStackNavigator();
export const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlerScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
    </Stack.Navigator>

  );
};




