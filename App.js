import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screens/OnboardingScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

import MainScreensTab from './screens/MainScreensTab'

const Stack = createStackNavigator();

const App = () => {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode='none'
        >
          <Stack.Screen name='Onboarding' component={OnboardingScreen}/>
          <Stack.Screen name='MainNav' component={MainScreensTab} />
        </Stack.Navigator>
      </NavigationContainer> 
    )
  } else {
    return (
      <NavigationContainer>
        <MainScreensTab />
      </NavigationContainer>
      
    )
  }
}

export default App;

