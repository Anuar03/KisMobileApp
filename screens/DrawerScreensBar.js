import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';

import BasicIndicatorsTab from './BasicIndicatorsTab';
import WellSearchTab from './WellSearchTab';


const DrawerStack = createDrawerNavigator();


const DrawerScreensBar = () => {
    return (
        <DrawerStack.Navigator
            initialRouteName='BasicIndicatorsTab'    
        >
            <DrawerStack.Screen name='BasicIndicatorsTab' component={BasicIndicatorsTab}/>
            <DrawerStack.Screen name='WellSearchTab' component = {WellSearchTab}/>
        </DrawerStack.Navigator>
    )
}

export default DrawerScreensBar;