import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNav } from './presentation/navigation/StackNav';

export const App = () => {
  return (

    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

