import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import WellInfo from './WellInfo';
import WellStat from './WellStat';
import Inver from './Inver';
import WellHistory from './WellHistory';

const Tab = createMaterialBottomTabNavigator();


const WellBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
              name="WellInfo" 
              component={WellInfo} 
              options={{
                tabBarLabel: 'Карточка',
                tabBarIcon: ({ color }) => (
                  <Icon name="ios-albums" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen 
              name="WellStat" 
              component={WellStat} 
              options={{
                tabBarLabel: 'Показатели',
                tabBarIcon: ({ color }) => (
                  <Icon name="ios-clipboard" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen 
              name="Inver" 
              component={Inver}
              options={{
                tabBarLabel: 'Конструкция',
                tabBarIcon: ({ color }) => (
                  <Icon name="ios-construct" color={color} size={26} />
                ),
              }}/>
            <Tab.Screen 
              name="WellHistory" 
              component={WellHistory}
              options={{
                tabBarLabel: 'История',
                tabBarIcon: ({ color }) => (
                  <Icon name="ios-filing" color={color} size={26} />
                ),
              }}/>
        </Tab.Navigator>
    )
}

export default WellBar