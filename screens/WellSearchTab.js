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
                    backgroundColor: '#017bff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    
                    alignSelf: 'center'
                }
            }}
        >
            <WellSearchStack.Screen 
                name='WellSearch' 
                component={WellsSearch}
                options={{
                    title: 'Поиск Скважин',
                    headerLeft: () => (
                        <Icon.Button 
                            name='ios-menu' 
                            size={25} 
                            backgroundColor='#017bff'
                            onPress={() => navigation.openDrawer()}>
                        </Icon.Button>
                    ),
                    headerRight: () => (
                        <Icon.Button
                            size={25} 
                            backgroundColor='#017bff'
                            onPress={() => {}}>
                        </Icon.Button>
                    )
                }}/>

                <WellSearchStack.Screen 
                name='Well'
                component={WellBar}
                options={{
                    title: 'Скважина',
                    headerRight: () => (
                        <Icon.Button
                            size={25} 
                            backgroundColor='#017bff'
                            onPress={() => {}}>
                        </Icon.Button>
                    )
                }}/>
        </WellSearchStack.Navigator>
    )
}

export default WellSearchTab;