import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import DrawerScreensBar from './DrawerScreensBar';

const Stack = createStackNavigator();

const MainScreensTab = () => {

    return (
        <Stack.Navigator
            initialRouteName='Login'
            headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='DrawerScreensBar' component={DrawerScreensBar}/>
        </Stack.Navigator>
    )

}

export default MainScreensTab;