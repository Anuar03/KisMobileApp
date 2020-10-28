import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import WellsSearch from './WellsSearch';
import WellBar from './well/WellBar';


const WellSearchStack = createStackNavigator();


const WellSearchTab = ({navigation}) => {
    return (
        <WellSearchStack.Navigator
            initialRouteName='WellSearch'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#03cffc',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    
                    alignSelf: 'center'
                }
            }}
        >
            <WellSearchStack.Screen 
                name='WellSearch' 
                component={WellBar}
                options={{
                    title: 'Поиск Скважин',
                    headerLeft: () => (
                        <Icon.Button 
                            name='ios-menu' 
                            size={25} 
                            backgroundColor='#03cffc'
                            onPress={() => navigation.openDrawer()}>
                        </Icon.Button>
                    ),
                    headerRight: () => (
                        <Icon.Button
                            size={25} 
                            backgroundColor='#03cffc'
                            onPress={() => {}}>
                        </Icon.Button>
                    )
                }}/>
        </WellSearchStack.Navigator>
    )
}

export default WellSearchTab;